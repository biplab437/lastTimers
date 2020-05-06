import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

import {LoginComponent} from './login/loginemployee';


@Injectable({
  providedIn: 'root'
})
export class EmplyeeserviceService {
url='http://localhost:54868/'
  constructor(private http:HttpClient) { }
  createemployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url+'api/Employeemasters',employee)
  }
  loginemployee(loginEmployee: LoginComponent): Observable<any> {
    return this.http.post(this.url + 'api/Login', loginEmployee)
  }
}
                                 