import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { DefaultModule } from './layout/default/default.module';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './modules/companies/companies.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    DefaultModule,
    NgbNavModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
