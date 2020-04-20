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
    this.collegeService.fetchPost()
  }

   collegeForm = new FormGroup({
   name :new FormControl(''),
   phone : new FormControl('')
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.collegeForm.value);
  }

}
