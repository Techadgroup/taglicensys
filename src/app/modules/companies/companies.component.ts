import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-companies',
  // standalone: true,
  // imports: [],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent {
  companyList: any[] = [];
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getInvoiceList();
  }

  editFunction() {
    throw new Error('Method not implemented.');
  }

  getInvoiceList() {
    this.loading = true;
    this.apiService.getFunction('customer').subscribe((val) => {
      this.loading = false;
      console.log(val.data);
      this.companyList = val.data;
    });
  }
}
