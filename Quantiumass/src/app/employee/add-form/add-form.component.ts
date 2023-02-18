import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeSService } from 'src/app/employee-s.service';
import { FormGroup,FormControl,NgForm } from '@angular/forms'
import { Employee } from 'src/app/Employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit{
@ViewChild('f') signupForm:NgForm | undefined;

  name = 'Test';
  mail = 'Test@example.com';

  constructor(private empService:EmployeeSService,private router:Router,private localService:LocalService){}
  
  user:Employee = {
    name: '',
    mail:'',
    tel:'',
    picPath:''
  }
  
  keyId=1;

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.user.name = this.signupForm?.value.name;
    this.user.mail = this.signupForm?.value.email;
    this.user.tel = this.signupForm?.value.tel;
    this.user.picPath = this.signupForm?.value.picPath;

    console.log(this.user);

    this.empService.addList(this.user);

    //this.localService.saveData(this.keyId,this.user);
    this.keyId++;

    this.signupForm?.reset();
    
    //this.router.navigate(['employee'],{relativeTo:this.route})
  }
}
