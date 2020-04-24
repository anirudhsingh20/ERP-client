import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CrouselComponent } from './shared/crousel/crousel.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CardsComponent } from './home/cards/cards.component';
import { CollegeRegComponent } from './forms/college-reg/college-reg.component';
import { StudentRegComponent } from './forms/student-reg/student-reg.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { TeacherRegComponent } from './forms/teacher-reg/teacher-reg.component';
import { LoginComponent } from './forms/login/login.component';
import { ListComponent } from './college/list/list.component';
import { ProfileComponent } from './college/profile/profile.component';
import { PeriodsComponent } from './college/periods/periods.component';
import { BargraphComponent } from './graphs/bargraph/bargraph.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './graphs/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './graphs/radar-chart/radar-chart.component';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { CollegeProfileComponent } from './college/college-profile/college-profile.component';
import { TeacherProfileComponent } from './teacher/teacher-profile/teacher-profile.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddDepartmentComponent } from './college/add-department/add-department.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CrouselComponent,
    AttendanceComponent,
    CardsComponent,
    CollegeRegComponent,
    StudentRegComponent,
    TeacherRegComponent,
    LoginComponent,
    ListComponent,
    ProfileComponent,
    PeriodsComponent,
    BargraphComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    StudentProfileComponent,
    CollegeProfileComponent,
    TeacherProfileComponent,
    StudentListComponent,
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
