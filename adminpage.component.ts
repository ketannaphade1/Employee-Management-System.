import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  employees: any = { Employee };


  public name:'';
  constructor(public employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.name=this.employeeservice.getUser().emailId;
    
  }

  public logout(){
    this.employeeservice.logout();
    window.location.href='/login';
  }
  

}


