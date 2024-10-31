import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { FormView } from 'src/app/services/form-view';

@Component({
  selector: 'app-invoices',

  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent implements OnInit {
  invoiceList: any[] = [];
  loading: boolean = false;
  formView: FormView = FormView.listView();
  detailInfo;
  taxForm: UntypedFormGroup;

  constructor(private apiService: ApiService, private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.getInvoiceList();
    this.initForm();
  }
  getInvoiceList() {
    this.loading = true;
    this.apiService.getFunction('paymentrequest-list').subscribe((val) => {
      this.loading = false;
      console.log(val.data);
      this.invoiceList = val.data;
    });
  }

  viewDetails(invoice) {
    if (invoice != '') {
      this.detailInfo = invoice;
      this.formView.resetToDetailView();
    } else {
      this.formView.resetToListView();
    }
  }

  editTaxesFunction(detailInfo) {
    console.log(detailInfo);
    this.taxForm.patchValue(detailInfo);
    this.formView.resetToCreateView();
  }

  savePackages() {
    const formData = this.taxForm.value;
    console.log(formData);
  }

  initForm() {
    this.taxForm = this.fb.group({
      id: '',
      amount: null,

      name: null,
    });
  }
}
