import { Component, OnInit } from '@angular/core';
import { FieldInterface, DepartmentInterface, DepartmentService } from 'src/app/services/department.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-dept-subject',
  templateUrl: './add-dept-subject.component.html',
  styleUrls: ['./add-dept-subject.component.scss']
})
export class AddDeptSubjectComponent implements OnInit {
  
  constructor(private departmentService :DepartmentService,private fb:FormBuilder) { }

  fields: FieldInterface[]=[]
  departments:DepartmentInterface[]=[]

  departmentForm:FormGroup  = this.fb.group({
    name:[''],
    field:[''],
    semester:[''],
    subjects:this.fb.array([
      this.fb.control('')
    ])
  }) 

  get subjects(){
    return this.departmentForm.get('subjects') as FormArray
  }

  addSubject(){
    this.subjects.push(this.fb.control(''))
  }

  ngOnInit(): void {
    this.departmentService.fetchFields().subscribe(()=>{

    })
    this.departmentService.fetchDepartments().subscribe(()=>{

    })

    this.departmentService.departments.subscribe((res)=>{
      this.departments = res
    })

    this.departmentService.fields.subscribe(res=>{
      this.fields = res
    })
  }

  onSubmit(){
    
    this.departmentService.addDeptSubjects(this.departmentForm.value).subscribe((res)=>{
      console.log(res);
      
      this.departmentForm.reset()
    })
    console.log(this.departmentForm.value);
    
  }

}
