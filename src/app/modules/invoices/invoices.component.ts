import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getInvoiceList();
  }
  getInvoiceList() {
    this.loading = true;
    this.apiService.getFunction('paymentrequest-list').subscribe((val) => {
      this.loading = false;
      console.log(val.data);
      this.invoiceList = val.data;
    });
  }
  editFunction() {
    throw new Error('Method not implemented.');
  }

  viewDetails(invoice) {
    if (invoice != '') {
      this.detailInfo = invoice;
      this.formView.resetToDetailView();
    } else {
      this.formView.resetToListView();
    }
  }

  // deleteFunction() {}
}
