import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-college-reg',
  templateUrl: './college-reg.component.html',
  styleUrls: ['./college-reg.component.scss']
})
export class CollegeRegComponent implements OnInit {

  constructor(private collegeService :CollegeService) { }

  ngOnInit(): void {
  }

   collegeForm = new FormGroup({
                          name :new FormControl(''),
                          phone : new FormControl(''),
                          email : new FormControl(''),
                          maxStudentsPerClass : new FormControl(''),
                          address : new FormGroup({
                            street : new FormControl(''),
                            city : new FormControl(''),
                            state : new FormControl(''),
                            zip : new FormControl(''),
                          }),
                          password : new FormControl(''),
                          fields : new FormGroup({
                            name:new FormControl(''),
                            subFields : new FormControl('')
                          }),
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value

    console.log(this.collegeForm.value);
    let formdata = new FormData();
    formdata.append('form',this.collegeForm.value)
    // formdata.append('email',this.collegeForm.get('email').value)
    // formdata.append('password',this.collegeForm.get('password').value)
    // formdata.append('phoneNo',this.collegeForm.get('phoneNo').value)
    // formdata.append('maxStudentNo',this.collegeForm.get('maxStudentNo').value)
    // formdata.append('address',this.collegeForm.get('address').value)
    // formdata.append('fields',this.collegeForm.get('fields').value)
    // this.collegeService.addCollege(this.collegeForm.value)
    console.log(formdata)
    console.log('clicked')
    this.collegeForm.reset();
  }

}
