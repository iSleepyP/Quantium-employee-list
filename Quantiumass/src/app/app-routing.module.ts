import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyhomeComponent } from './myhome/myhome.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreditComponent } from './credit/credit.component';
import { AddFormComponent } from './employee/add-form/add-form.component';
import { EditFormComponent } from './employee/edit-form/edit-form.component';

const routes: Routes = [
  { path: '',redirectTo:'/home',pathMatch:'full' },
  { path:'home',component:MyhomeComponent },
  { path:'employee',component:EmployeeComponent, children:[
    { path: 'add' ,component:AddFormComponent },
    { path: 'edit',component: EditFormComponent}]}, 
  { path:'credit',component:CreditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
