import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { CompaniesComponent } from '../modules/companies/companies.component';
import { InvoicesComponent } from '../modules/invoices/invoices.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoginComponent,
  ],
  exports: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [CommonModule, MatIconModule],
})
export class SharedModule {}
