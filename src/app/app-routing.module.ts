import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeRegComponent } from './forms/college-reg/college-reg.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentRegComponent } from './forms/student-reg/student-reg.component';
import { TeacherRegComponent } from './forms/teacher-reg/teacher-reg.component';
import { LoginComponent } from './forms/login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college-signup', component:CollegeRegComponent},
  {path:'student-signup',component:StudentRegComponent},
  {path:'teacher-signup',component:TeacherRegComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
