import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { DepartmentService, FieldInterface, DepartmentInterface } from 'src/app/services/department.service';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.scss']
})
export class StudentRegComponent implements OnInit {

  fields: FieldInterface[]=[]
  departments:DepartmentInterface[]=[]
  constructor(private studentService:StudentService,private departmentService:DepartmentService) { }

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
  studentForm= new FormGroup({
                            name:new FormControl(''),
                            email:new FormControl(''),
                            password:new FormControl(''),
                            rollNo:new FormControl(''),
                            phoneNo:new FormControl(''),
                            field:new FormControl(''),
                            branch:new FormControl(''),
                            collegeName:new FormControl(''),
                            semester:new FormControl(''),
                            address:new FormGroup({
                                city:new FormControl(''),
                                street:new FormControl(''),
                                state:new FormControl(''),
                                zip:new FormControl('')
                            })


  })
  onSubmit(){
       // TODO: Use EventEmitter with form value

       console.log(this.studentForm.value);
      //  let formdata = new FormData();
      //  formdata.append('form',this.studentForm.value)
       // formdata.append('email',this.collegeForm.get('email').value)
       // formdata.append('password',this.collegeForm.get('password').value)
       // formdata.append('phoneNo',this.collegeForm.get('phoneNo').value)
       // formdata.append('maxStudentNo',this.collegeForm.get('maxStudentNo').value)
       // formdata.append('address',this.collegeForm.get('address').value)
       // formdata.append('fields',this.collegeForm.get('fields').value)
      //  this.s.addCollege(this.studentForm.value)
      //  console.log(formdata)
      this.studentService.addStudent(this.studentForm.value).subscribe((res)=>{
        console.log(res);
        
        console.log('added successfully')
      })
       this.studentForm.reset();
      }
}
