import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CollegeService {

  url = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  _college = new BehaviorSubject<CollegeInterface[]>([])


  get college() {
    return this._college.asObservable();
  }

  fetchPost() {
    return this.http.get<{ colleges: CollegeInterface[] }>(this.url + 'get-colleges')
      .pipe(
        map(res => {
          let loadedColleges: CollegeInterface[] = []
          console.log(res.colleges);

          res.colleges.forEach(col => {
            loadedColleges.push(col)
            console.log(col);

          })
          return loadedColleges
        }), take(1),
        tap(colleges => {
          this._college.next(colleges)
        })
      )
  }
  addCollege(object: Object) {
    console.log('posted it');

    return this.http.post(this.url + 'college-signup', object).subscribe(res => {
      console.log(res);

    })
  }

}

export interface AddressInterface {
  city: String,
  state: String,
  street: String,
  zip: Number

}

export interface FieldsInterface {
  subBranches: Array<String>,
  _id: String,
  name: String
}

export interface CollegeInterface {
  address: AddressInterface
  _id: String
  name: String
  email: String
  password: String
  maxStudentsPerClass: Number
  phoneNo: Number
  fields: Array<FieldsInterface>
  createdAt: String
  updatedAt: String
  __v: 0
}
