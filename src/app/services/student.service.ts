import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressInterface } from './college.service';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { LoginInfo } from '../sevices/login.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   url = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }
  private  _students = new BehaviorSubject<studentInterface[]>([])
 
    
    public get student()  {
      return this._students.asObservable()
    }

    public fetchStudents(){
      return this.http.get<{students:studentInterface[]}>(this.url+'get-students')
            .pipe(
              map(res=>{
                let loadedStudents:studentInterface[] = []
                res.students.map(stud =>{
                   loadedStudents.push(stud)
                })
                return [...loadedStudents]
              }),take(1),
              tap(students =>{
                this._students.next(students)
              })
            )
    }
    public addStudent(studentInfo:Object){
      return this.http.post<{students:studentInterface[]}>(this.url+'student-signup',studentInfo)
    }

    public login(info :LoginInfo){
     return  this.http.post<studentInterface>(this.url + 'student-login',info)
    }
    

}

export interface studentInterface {
  address: AddressInterface
  _id: String
  name: String
  email: String
  password: String
  rollNo: Number
  phoneNo: Number
  field: String
  branch:String
  collegeName:String
  createdAt: String
  updatedAt: String
  __v: 0
}
