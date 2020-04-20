import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  url = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  _college = new BehaviorSubject<any[]>([])


  get college(){
    return this._college.asObservable();
  }

  fetchPost() {
    return this.http.get<any>(this.url+'get-colleges')
      .pipe(
        map(res =>{
          res.colleges.forEach(col => {
            console.log(col);
            
          });
        })
      )
  }

}
