import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeeSService } from 'src/app/employee-s.service';
import { FormGroup,FormControl,NgForm } from '@angular/forms'
import { Employee } from 'src/app/Employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{
  @ViewChild('e') editForm:NgForm | undefined;
  //@Input () id:number | any;

  constructor(private empService:EmployeeSService,private router:Router,private route:ActivatedRoute){}
  
  //name = this.empService
  

  //user:Employee = this.empService.detailList();
  user:Employee ={
    name : '',
    mail : '',
    tel : '',
    picPath : ''
  }
  
  

 ngOnInit(): void {
    //this.user = this.empService.detailList();
    this.getDetail();
  }

  getDetail(){
    /*this.name = this.empService.detailList().name;
    this.email = this.empService.detailList().mail;
    this.tel = this.empService.detailList().tel;
    this.picPath = this.empService.detailList().picPath;*/
  }

  onSubmit(){
    this.user.name = this.editForm?.value.name;
    this.user.mail = this.editForm?.value.email;
    this.user.tel = this.editForm?.value.tel;
    this.user.picPath = this.editForm?.value.picPath;

    console.log(this.user);

    this.empService.editList(this.user);

    this.editForm?.reset();
    
    //this.router.navigate(['employee'],{relativeTo:this.route})
  }
}
