import { Injectable } from '@angular/core';
import { findIndex } from 'lodash';
import { User } from './user';
import {Http} from '@angular/http';
@Injectable()
export class UserService {
  //private uservalue = USERS;

  private resourceUrl = 'http://localhost:8085/user';

  constructor(private http:Http) { }
  
  getUsers(){
    
    return this.http.get(this.resourceUrl);
  }
    
  addUser(user: User) {
    return this.http.post(this.resourceUrl, user);
  }

  find(id: number) {
    return this.http.get(`${this.resourceUrl}/${id}`);
}

  updateUser(user : User){
    return this.http.put(`${this.resourceUrl}/${user.id}`,user);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }

  

}
