import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employeepage',
  templateUrl: './employeepage.component.html',
  styleUrls: ['./employeepage.component.css']
})
export class EmployeepageComponent implements OnInit {

 public  e={
    id:''
  }
  constructor(public employeeservice:EmployeeService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }

getOne(){

  
}

public logout(){
  this.employeeservice.logout();
  window.location.href='/login';
}




}
