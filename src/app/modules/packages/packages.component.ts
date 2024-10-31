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
    this.apiService.getFunction('listplans').subscribe((val) => {
      this.loading = false;
      // console.log(val);
      this.packagesList = val;
    });
  }

  savePackages() {
    const formData = this.packageForm.value;
    console.log(formData);
    formData.id = '';
    this.apiService.postFunction('addplan', formData).subscribe((val) => {
      this.loading = false;
      console.log(val);
    });
  }

  createNew(action) {
    if (action == 'new') {
      this.packageForm.reset();
      this.formView.resetToCreateView();
    } else {
      this.formView.resetToListView();
    }
  }

  deletePackage(_t28: any) {
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
  editFunction(packageInfo: any) {
    console.log(packageInfo);
    this.packageForm.patchValue(packageInfo);
    this.formView.resetToCreateView();
  }

  initForm() {
    this.packageForm = this.fb.group({
      id: '',
      amount: null,
      interval: null,
      name: null,
    });
  }
}
