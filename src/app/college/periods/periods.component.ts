import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      number:[creds.length+1],
      from: ['',Validators.maxLength(120)],
      to: ['',[Validators.maxLength(120)]],
      isBreak:false,
    }));
    console.log([this.form.value.credentials]);
    
  }

  ngOnInit(): void {
  }
}
