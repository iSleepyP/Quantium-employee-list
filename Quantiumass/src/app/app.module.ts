import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreditComponent } from './credit/credit.component';
import { AddFormComponent } from './employee/add-form/add-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditFormComponent } from './employee/edit-form/edit-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyhomeComponent,
    EmployeeComponent,
    CreditComponent,
    AddFormComponent,
    EditFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
