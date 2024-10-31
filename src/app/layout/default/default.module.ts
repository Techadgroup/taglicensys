import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';
import { CompaniesComponent } from 'src/app/modules/companies/companies.component';
import { PackagesComponent } from 'src/app/modules/packages/packages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicesComponent } from 'src/app/modules/invoices/invoices.component';
import { TaxesComponent } from 'src/app/modules/taxes/taxes.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CompaniesComponent,
    PackagesComponent,
    InvoicesComponent,
    // TaxesComponent,
    TaxesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    NgxUiLoaderModule,
  ],
})
export class DefaultModule {}
