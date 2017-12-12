import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import { EmployeeComponent } from './Employee/employee.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'dashboard', component: DashboardComponent },
         { path: 'employee', component: EmployeeComponent },
         { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
