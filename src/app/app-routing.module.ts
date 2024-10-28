import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PackagesComponent } from './modules/packages/packages.component';
import { CompaniesComponent } from './modules/companies/companies.component';
import { WrongrouteComponent } from './modules/wrongroute/wrongroute.component';
import { InvoicesComponent } from './modules/invoices/invoices.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'home',
    component: DefaultComponent,
    children: [
      { path: 'admin/dashboard', component: DashboardComponent },
      { path: 'admin/packages', component: PackagesComponent },
      { path: 'admin/companies', component: CompaniesComponent },
      { path: 'admin/invoices', component: InvoicesComponent },
    ],
  },

  // Wild Card Route
  {
    path: '**',
    pathMatch: 'full',
    component: WrongrouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
