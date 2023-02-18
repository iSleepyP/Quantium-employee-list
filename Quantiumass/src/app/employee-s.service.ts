import { Injectable } from '@angular/core';
import { Employee } from './Employee.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {

  constructor() { }

  employeeChange = new Subject<Employee[]>();
  employeeIndex:number = 0;
  employee: Employee | undefined;

  private employees:Employee[]=[
    new Employee('Supapol Senasook','supapol.sen@quantium.pe',"0896126611","https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/41340163_1867809536631162_163980773324488704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoSQa6IjUfEmg5lPZl1Ylo0uiB6hRmc_fS6IHqFGZz9xK1k8eT2VXlJXdQ2Wj9H6oQocGqHD3UbFm0llkH73YR&_nc_ohc=3Z0QVsC_pw0AX_ify1U&_nc_oc=AQmoZYnocdTXRFIObRAGzmJHFsBgko_NUNxhaQCXT5QK5zR9RPCtYhtXnewXL-8pZcnOL3_AHUAK-qR2ithtec9G&tn=shsOvS0E44zhhWjp&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAIqOEiRieapJPCTrD7JN9vmkNBhqHb4ZTXir9fQiI-oA&oe=640F0103"),
  ]

  getList(){
    return this.employees.slice();
  }

  addList(employee:Employee){
    this.employees.push(employee);
    this.employeeChange.next(this.employees.slice());
  }

  /*detailList(){
    this.employee = this.employees[this.employeeIndex];
    return this.employee;
  }*/

  editList(employee:Employee){
    //this.detailList();
    this.employees[this.employeeIndex]=employee;
    this.employeeChange.next(this.employees.slice());
  }

  deleteList(index:number){
    this.employees.splice(index,1);
    //return this.employees.slice();//รอแก้ sub
    this.employeeChange.next(this.employees.slice());
  }

}
