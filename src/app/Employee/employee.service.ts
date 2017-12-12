import { Injectable } from '@angular/core';
import { findIndex } from 'lodash';
import { Employee } from './employee';
import {Http} from '@angular/http';
@Injectable()
export class EmployeeService {
  //private uservalue = USERS;

  private resourceUrl = 'http://localhost:8080/JerseyCRUD/api/employee';

  constructor(private http:Http) { }
  

  getUsers(){
    return this.http.get(this.resourceUrl+"/get");
  }
    
  addUser(emp: Employee) {
    return this.http.post(this.resourceUrl+"/create", emp);
  }

  find(id: number) {
    return this.http.get(`${this.resourceUrl}/${id}`);
}

  updateUser(emp : Employee){
    return this.http.put(`${this.resourceUrl+"/update"}/${emp.id}`,emp);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.resourceUrl+"/delete"}/${id}`);
  }

  

}
