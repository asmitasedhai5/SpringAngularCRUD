import { Component, OnInit } from '@angular/core';
import {clone} from 'lodash';
import { User } from './user';
import { UserService } from './user.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[];
  user:User;
  userForm:boolean=false;
  isNewUser:boolean;
  newUser:User;
  editUserForm:boolean=false;
  editedUser:User;
  // checkU:boolean;
  // checkS:boolean;

  constructor(private userService: UserService) {
    this.user = new User();   
    this.editedUser = new User();
   }

  ngOnInit() {
      this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(res => this.onSuccess(res), () => console.log('error'));
  }

  onSuccess(res) {
    this.users = res.json();
    console.log(res.json());
  }
    
  showAddForm(){
      if(this.users.length){
        this.newUser=new User();
    }
    this.userForm=true;
    this.isNewUser=true;
  }
    
  addUser(user: User){
      if(this.isNewUser){
        console.log(this.user);
        this.userService.addUser(this.user).subscribe((res) => this.onSave(res), () => console.log('error'));
    }
    this.userForm=false;
  }

  onSave(res) {
    console.log(res);
    this.userService.getUsers().subscribe(response => this.onSuccess(response), () => console.log('error'));
  }

  removeUser(id){
      console.log("Deleted");
      this.userService.deleteUser(id).subscribe(res => this.onsuccessDel(), () => console.log('error'));
  }

  onsuccessDel() {
    this.userService.getUsers().subscribe(response => this.onSuccess(response), () => console.log('error'));
  }

  showEditForm(user){
    // this.editUserForm=true;
    // this.editedUser.id=clone(this.user.id);
    if(!user){
      this.userForm=false;
      return;
    }
    this.editUserForm=true;
    this.user=clone(user);
  }


  // find(id) {
  //   //  this.checkU = !this.checkU;
  //   //  this.checkS = !this.checkS;
  //    this.userService.find(id).subscribe(response => this.onSuccessGet(response), () => console.log('error'));
  
  // }

  // onSuccessGet(response) {
  //   this.user = response;
  // }


  updateUser(user:User[]){
    console.log(this.user);
    this.userService.updateUser(this.user).subscribe(response => this.onSuccessUpdate(response), () => console.log('error'));
    this.editUserForm=false;
   
}

  onSuccessUpdate(response) {
    this.userService.getUsers().subscribe(res => this.onSuccess(res), () => console.log('error'));
  }


        
}
