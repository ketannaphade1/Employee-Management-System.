import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { PayslipComponent } from './payslip/payslip.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent,
    AdminpageComponent,
    EmployeepageComponent,
    TimesheetComponent,
    RegistrationComponent,
    ProfileComponent,
    PayslipComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
