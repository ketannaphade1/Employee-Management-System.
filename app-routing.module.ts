import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { EmployeepageComponent } from './employeepage/employeepage.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { PayslipComponent } from './payslip/payslip.component';



const routes: Routes = [

  { path: 'employees', component: EmployeeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'employeepage', component: EmployeepageComponent },
  { path: 'timesheet', component:TimesheetComponent },
  { path: 'registration', component:RegistrationComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'payslip', component:PayslipComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
