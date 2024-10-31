import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormView } from 'src/app/services/form-view';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
})
export class PackagesComponent implements OnInit {
  packagesList: any[] = [];
  loading: boolean = false;
  formView: FormView = FormView.listView();
  detailInfo;
  packageForm: UntypedFormGroup;

  constructor(private apiService: ApiService, private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.getPackages();
    this.initForm();
  }

  getPackages() {
    this.loading = true;
    this.apiService.getFunction('plan/list').subscribe((val) => {
      this.loading = false;
      console.log('plan list', val);
      this.packagesList = val;
    });
  }

  savePackages() {
    const formData = this.packageForm.value;
    console.log(formData);
    formData.id = '';
    // ================ creating new plans =============
    if (formData.id == null) {
      this.apiService.postFunction('plan/create', formData).subscribe((val) => {
        this.loading = false;
        console.log('created item', val);
      });
    } else {
      // ================= editing plans =================
    }
  }

  createNew(action) {
    if (action == 'new') {
      this.packageForm.reset();
      this.formView.resetToCreateView();
    } else {
      this.formView.resetToListView();
    }
  }

  deletePackage(itemValue: any) {
    Swal.fire({
      text: 'Do you want to delete?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService
          .deleteFunction(`plan/${itemValue.id}`, {})
          .subscribe((val) => {
            console.log('delete', val);
          });
      }
    });
  }

  editFunction(packageInfo: any) {
    console.log(packageInfo);
    this.packageForm.patchValue(packageInfo);
    this.formView.resetToCreateView();
  }

  initForm() {
    this.packageForm = this.fb.group({
      id: '',
      amount: null,
      billingCycle: null,
      name: null,
    });
  }
}
