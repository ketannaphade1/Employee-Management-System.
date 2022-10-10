import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    //employees: Employee[];

  employees: any = { Employee };
 
  
  id:any;
  
   constructor(private employeeService: EmployeeService,private route:ActivatedRoute) { }
 
   ngOnInit(): void {

     //this.id =this.route.snapshot.params['id'];
    

     this.employees=this.employeeService.getUser();
  //  this.employees=this.employeeService.getEmployeeById(this.id).subscribe(
  //   (data)=>{
  //         this.employees=data;
  //   }
  //  )

   }
    


  
   }




   
 
 
 
 
 