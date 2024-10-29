import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoices',

  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent implements OnInit {
  invoiceList: any[] = [];
  loading: boolean = false;

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

  deleteFunction() {}
}
