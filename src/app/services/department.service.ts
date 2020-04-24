import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url = `http://localhost:8080/`
  _fields = new BehaviorSubject<FieldInterface[]>([])
  _departments = new BehaviorSubject<DepartmentInterface[]>([])
  constructor(private http: HttpClient) { }


  public get fields() {
    return this._fields.asObservable()
  }
  public get departments() {
    return this._departments.asObservable()
  }

  fetchFields() {
    return this.http.get<{ fields: FieldInterface[] }>(this.url + 'get-fields')
      .pipe(
        map(res => {
          let loadedFields = []
          res.fields.forEach(field => {
            loadedFields.push(field)
          })
          return loadedFields
        }),
        take(1),
        tap(fields => {
          this._fields.next(fields)
        })
      )
  }

  fetchDepartments() {
    return this.http.get<{ departments: DepartmentInterface[] }>(this.url + 'get-departments')
      .pipe(
        map(res => {
          let loadedDepartments = []
          res.departments.forEach(dept => {
            if(!dept){
              return []
            }
            loadedDepartments.push(dept)
          })
          return loadedDepartments
        }),
        take(1),
        tap(departments => {
          this._departments.next(departments)
        })
      )
  }

  addField(field: Object) {
    return this.http.post(this.url + `add-field`, field)
  }

  addDepartment(department: Object) {
    return this.http.post(this.url + `add-department`, department)
  }

}

export interface DepartmentInterface {
  name: String
  field: String | Object
  semester: String | Object
}

export interface FieldInterface {
  name: String
  _id: String

}
