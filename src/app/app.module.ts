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
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
