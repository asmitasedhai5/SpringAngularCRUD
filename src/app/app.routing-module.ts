import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'dashboard', component: DashboardComponent },
         { path: 'user', component: UserComponent },
         { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
