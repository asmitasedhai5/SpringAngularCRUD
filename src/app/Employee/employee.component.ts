import { Component, OnInit } from '@angular/core';
import {clone} from 'lodash';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emps:Employee[];
  emp:Employee;
  userForm:boolean=false;
  isNewUser:boolean;
  newUser:Employee;
  editUserForm:boolean=false;
  editedUser:Employee;
  // checkU:boolean;
  // checkS:boolean;

  constructor(private empService: EmployeeService) {
    this.emp = new Employee();   
    this.editedUser = new Employee();
   }

  ngOnInit() {
      this.getUsers();
  }

  getUsers(){
    this.empService.getUsers().subscribe(res => this.onSuccess(res), () => console.log('error'));
  }

  onSuccess(res) {
    this.emps = res.json();
    console.log(res.json());
  }
    
  showAddForm(){
      if(this.emps.length){
        this.newUser=new Employee();
    }
    this.userForm=true;
    this.isNewUser=true;
  }
    
  addUser(emp: Employee){
      if(this.isNewUser){
        console.log(this.emp);
        this.empService.addUser(this.emp).subscribe((res) => this.onSave(res), () => console.log('error'));
    }
    this.userForm=false;
  }

  onSave(res) {
    console.log(res);
    this.empService.getUsers().subscribe(response => this.onSuccess(response), () => console.log('error'));
  }

  removeUser(id){
      console.log("Deleted");
      this.empService.deleteUser(id).subscribe(res => this.onsuccessDel(), () => console.log('error'));
  }

  onsuccessDel() {
    this.empService.getUsers().subscribe(response => this.onSuccess(response), () => console.log('error'));
  }

  showEditForm(emp){
    // this.editUserForm=true;
    // this.editedUser.id=clone(this.user.id);
    if(!emp){
      this.userForm=false;
      return;
    }
    this.editUserForm=true;
    this.emp=clone(emp);
  }


  
  updateUser(emp:Employee[]){
    console.log(this.emp);
    this.empService.updateUser(this.emp).subscribe(response => this.onSuccessUpdate(response), () => console.log('error'));
    this.editUserForm=false;
   
}

  onSuccessUpdate(response) {
    this.empService.getUsers().subscribe(res => this.onSuccess(res), () => console.log('error'));
  }


        
}
