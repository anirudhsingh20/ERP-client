import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.scss']
})
export class StudentRegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  studentForm= new FormGroup({
                            name:new FormControl(''),
                            email:new FormControl(''),
                            password:new FormControl(''),
                            rollNumber:new FormControl(''),
                            phoneNumber:new FormControl(''),
                            fields:new FormGroup({
                              name:new FormControl(''),
                              subFields:new FormControl('')
                            }),
                            Address:new FormGroup({
                                city:new FormControl(''),
                                street:new FormControl(''),
                                State:new FormControl(''),
                                Zip:new FormControl('')
                            })


  })
  onSubmit(){
       // TODO: Use EventEmitter with form value

       console.log(this.studentForm.value);
       let formdata = new FormData();
       formdata.append('form',this.studentForm.value)
       // formdata.append('email',this.collegeForm.get('email').value)
       // formdata.append('password',this.collegeForm.get('password').value)
       // formdata.append('phoneNo',this.collegeForm.get('phoneNo').value)
       // formdata.append('maxStudentNo',this.collegeForm.get('maxStudentNo').value)
       // formdata.append('address',this.collegeForm.get('address').value)
       // formdata.append('fields',this.collegeForm.get('fields').value)
      //  this.s.addCollege(this.studentForm.value)
       console.log(formdata)
       console.log('clicked')
       this.studentForm.reset();
      }
}
