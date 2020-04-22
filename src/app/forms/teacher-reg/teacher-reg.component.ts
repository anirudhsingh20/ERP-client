import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-teacher-reg',
  templateUrl: './teacher-reg.component.html',
  styleUrls: ['./teacher-reg.component.scss']
})
export class TeacherRegComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teacherForm=new FormGroup({
                            Name:new FormControl(''),
                            email:new FormControl(''),
                            password:new FormControl(''),
                            degree:new FormControl(''),
                            phoneNumber:new FormControl(''),
                            fields:new FormControl(''),
                            Address:new FormGroup({
                                City:new FormControl(''),
                                street:new FormControl(''),
                                state:new FormControl(''),
                                Zip:new FormControl('')
  })

})
onSubmit(){
         // TODO: Use EventEmitter with form value

         console.log(this.teacherForm.value);
         let formdata = new FormData();
         formdata.append('form',this.teacherForm.value)
         // formdata.append('email',this.collegeForm.get('email').value)
         // formdata.append('password',this.collegeForm.get('password').value)
         // formdata.append('phoneNo',this.collegeForm.get('phoneNo').value)
         // formdata.append('maxStudentNo',this.collegeForm.get('maxStudentNo').value)
         // formdata.append('address',this.collegeForm.get('address').value)
         // formdata.append('fields',this.collegeForm.get('fields').value)
        //  this.s.addCollege(this.studentForm.value)
         console.log(formdata)
         console.log('clicked')
         this.teacherForm.reset();


}
}
