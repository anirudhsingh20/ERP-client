import { Component, OnInit } from '@angular/core';
import { studentInterface, StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: studentInterface[] = []
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.fetchStudents().subscribe(()=>{
      console.log('data fetched');
      
    })
    this.studentService.student.subscribe(studs=>{
      console.log(studs);
      
      this.students = studs
    })
  }

}
