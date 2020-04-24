import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/sevices/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl(''),
  })
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
        this.loginService.login(this.loginForm.value)     
        .subscribe(res=>{
          this.loginService.studentDetails = res
          console.log(res);
          this.loginService.studentId = res._id
          
          this.loginForm.reset()
          this.router.navigateByUrl('/')
          
         },(err)=>{
           console.log(err);
         })
          

  }

}
