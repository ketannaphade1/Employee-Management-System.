import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../Services/employee.service';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  emp: Employee = new Employee();

  msg = ''

  constructor(public employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
  }



  public registerEmployee() {

    if (this.emp.firstName == null ) {
      alert("Please Enter Firstname");
    }
    if (this.emp.emailId == null ) {
      alert("Please Enter Valid EmailId");
    }
    if (this.emp.password == null ) {
      alert("Please Set Password");
    }
    if (this.emp.mobNumber == null ) {
      alert("Please Enter Valid Mobile Number");
    }
    // if (this.emp.firstName == null || this.emp.emailId == null || this.emp.mobNumber == null || this.emp.password == null) {
    //   alert("Please Enter Firstname,EmailId,MobileNumber,Password");
    // }
   

    else {
      this.employeeService.registerUser(this.emp).subscribe(
        data => {

          console.log(data)
          this.route.navigate(['/login'])

        },
        error => {

          this.msg = "please Enter Valid Inputs"
        }
      )
    }

  }
}
