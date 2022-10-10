import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

// Service For GetAll Employees



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>("http://localhost:8080/api/getAllEmployees");

  }


  // GetUserById//Search Employee
  
  getServiceOne(id: any) {
    return this.httpClient
    .get("http://localhost:8080/api/getEmployeesById/"+id)
   
    // map(res=> {

    //   return res.json();
    // }
    // )


  }

  // Service For Login

  public loginUserFromRemote(emp: Employee): Observable<Employee[]> {


    console.log("welcome")
    return this.httpClient.post<Employee[]>(`http://localhost:8080/api/login`, emp);
   
  }

  // Register User

  public registerUser(emp: Employee): Observable<Employee[]> {

    return this.httpClient.post<Employee[]>("http://localhost:8080/api/createemployee", emp);

  }

  public getEmployeeByemailId(emailId:any){
    return this.httpClient.get(`http://localhost:8080/api/getEmployeesByemail/${emailId}`);
  }

  public getEmployeeById(id:any){
    return this.httpClient.get(`http://localhost:8080/api/getEmployeesById/${id}`);
  }

  public logout() {
    localStorage.removeItem('emp');

    return true;
  }

  public setUser(emp: any) {
    localStorage.setItem('emp', JSON.stringify(emp));
  }

  public getUser() {
    let userStr = localStorage.getItem("emp");

    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }







}
