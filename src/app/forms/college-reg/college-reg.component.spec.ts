import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeRegComponent } from './college-reg.component';

describe('CollegeRegComponent', () => {
  let component: CollegeRegComponent;
  let fixture: ComponentFixture<CollegeRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
