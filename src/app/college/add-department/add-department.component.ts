import { Component, OnInit } from '@angular/core';
import { DepartmentService, DepartmentInterface, FieldInterface } from 'src/app/services/department.service';
import { FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  
  fields: FieldInterface[]=[]
  departments:DepartmentInterface[]=[]

  departmentForm:FormGroup  = new FormGroup({
    name:new FormControl(''),
    field: new FormControl('')

  })
  constructor(private departmentService :DepartmentService) { }

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
    
    this.departmentService.addDepartment(this.departmentForm.value).subscribe((res)=>{
      console.log(res);
      
      this.departmentForm.reset()
    })
    // console.log(this.departmentForm.value);
    
  }

}
