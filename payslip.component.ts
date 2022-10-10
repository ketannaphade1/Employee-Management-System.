import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  //employees: Employee[];

  employees: any = { Employee };
 

  id:any;
  
   constructor(private employeeService: EmployeeService,private ar:ActivatedRoute) { }
 
   ngOnInit(): void {

    // this.id =this.route.snapshot.params['id']
    
    this.employees=this.employeeService.getUser();
    //this.id=this.ar.snapshot.params['id'];

    // this.employees=this.employeeService.getEmployeeById(this.id).subscribe(
    //   (data:any)=>{
    //         this.employees=data;
    //   }
    //  )
  

   }
    


  
   }




   
 
 
 
 
 