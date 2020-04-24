import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeptSubjectComponent } from './add-dept-subject.component';

describe('AddDeptSubjectComponent', () => {
  let component: AddDeptSubjectComponent;
  let fixture: ComponentFixture<AddDeptSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeptSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeptSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
