import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../Services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  public id1: any;
  emp = new Employee();
  msg = '';

  constructor(public employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {

  }

  loginEmployee(emp: Employee) {
    console.log("in loginemp");

    console.log(emp.emailId)
    console.log(emp.password)

    if (emp.emailId != null && emp.password != null) {


      if (emp.emailId == 'admin@gmail.com' && emp.password == 'admin') {
        this.route.navigate(["/adminpage/"])

      }
      else {
        this.employeeService.loginUserFromRemote(this.emp).subscribe(
          data => {
            this.employeeService.setUser(data);
            this.route.navigate(['/employeepage/']);

          },
          error => {

            this.msg = "Please Enter Valid EmailId and Password"

          }
        )
      }

    }
    else {

      this.msg = "Please Enter EmailId and Password";
    }
  }

  registerEmployee(emp: Employee) {

    this.route.navigate(["/registration"])

  }
}
