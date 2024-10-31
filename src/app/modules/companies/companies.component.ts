import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormView } from 'src/app/services/form-view';

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
  detailInfo;
  formView: FormView = FormView.listView();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getInvoiceList();
  }

  editFunction() {
    throw new Error('Method not implemented.');
  }

  getInvoiceList() {
    this.loading = true;
    this.apiService.getFunction('customer/list').subscribe((val) => {
      this.loading = false;
      console.log(val);
      this.companyList = val;
    });
  }

  viewDetails(company) {
    if (company != '') {
      this.detailInfo = company;
      console.log('view');
      this.formView.resetToDetailView();
    } else {
      this.formView.resetToListView();
    }
  }
}
