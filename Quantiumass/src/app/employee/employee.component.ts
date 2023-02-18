import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../Employee.model';
import { EmployeeSService } from '../employee-s.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,OnDestroy{

  

  constructor(private empService:EmployeeSService,private modalService: NgbModal,private localService:LocalService){}

  //subscription:Subscription;
  employees:Employee[]=[];

  index = this.empService.employeeIndex;

  ngOnInit(): void {
    this.empService.employeeChange.subscribe(Employees=>{
      this.employees=Employees;
    })
    this.employees = this.empService.getList();
  }

  openAdd(content:any){
    this.modalService.open(content, { size: 'xl' });
  }

  addEployee(){
    this.employees.push();
  }

  openEdit(content:any,i:number){
    this.modalService.open(content, { size: 'xl' });
    this.empService.employeeIndex = i;
  }

  onDel(index:number){
    this.empService.deleteList(index); 
    //this.employees = this.empService.getList();//รอแก้ sub
    this.localService.removeData('$index');
  }

  ngOnDestroy(): void {
    
  }

}
