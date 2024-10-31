import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormView } from 'src/app/services/form-view';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.css',
})
export class TaxesComponent implements OnInit {
  itemsList: any[] = [];
  loading: boolean = false;
  formView: FormView = FormView.listView();
  detailInfo;
  taxForm: UntypedFormGroup;

  constructor(private apiService: ApiService, private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.getData();
    this.initForm();
  }

  savePackages() {
    const formData = this.taxForm.value;
    // console.log(formData);

    // ============ adding new tax ============
    if (formData.id == null) {
      this.apiService.postFunction('tax/new', formData).subscribe((val) => {
        this.loading = false;
        console.log(val);
        if (val != null) {
          this.itemsList.push(val);
          this.formView.resetToListView();
        }
      });
      // ============= editing tax =============
    } else {
      this.apiService.putFunction('tax/edit', formData).subscribe((val) => {
        // console.log('edit value', val);

        if (val != null) {
          const editItem = this.itemsList.find(
            (taxItem) => taxItem.id == val.id
          );

          const index = this.itemsList.indexOf(editItem, 0);
          if (index > -1) {
            this.itemsList.splice(index, 1);
          }
          this.itemsList.push(val);
          this.formView.resetToListView();
          // console.log('to be edited', editItem);
        }
      });
    }
  }

  getData() {
    this.loading = true;
    this.apiService.getFunction('tax/list').subscribe((val) => {
      this.loading = false;
      console.log(val);
      this.itemsList = val;
    });
  }

  createNew(itemValue: string) {
    if (itemValue == 'new') {
      this.taxForm.reset();
      this.formView.resetToCreateView();
    } else {
      this.formView.resetToListView();
    }
  }

  editFunction(itemValue: any) {
    this.taxForm.patchValue(itemValue);
    this.formView.resetToCreateView();
  }

  deletePackage(itemValue: any) {
    Swal.fire({
      // title: "Are you sure?",
      text: 'Do you want to delete?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  }

  initForm() {
    this.taxForm = this.fb.group({
      id: '',
      percentage: 0,
      name: null,
    });
  }
}
