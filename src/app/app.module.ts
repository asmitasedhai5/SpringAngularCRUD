import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.routing-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeService } from './Employee/employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
