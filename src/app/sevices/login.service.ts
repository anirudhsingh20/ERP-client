import { Injectable } from '@angular/core';
import { StudentService, studentInterface } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _studentId: String = null
  _studentDetails: studentInterface = null
  _isAuthenticated = false
  constructor(private studentService: StudentService) { }

  login(loginInfo: LoginInfo) {
    if (loginInfo.type == 'Student') {
      return this.studentService.login(loginInfo)

    }
  }


  public get isAuthenticate(): boolean {
    return this._isAuthenticated
  }

  public get studentId(): String {
    return this._studentId
  }

  public set studentId(id : String) {
    this._studentId = id
  }


  public set studentDetails(student : studentInterface) {
    this._studentDetails = student;
  }





}
export interface LoginInfo {
  email: String,
  password: String,
  type: String
}
