import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeRegComponent } from './forms/college-reg/college-reg.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentRegComponent } from './forms/student-reg/student-reg.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'college-signup', component:CollegeRegComponent},
  {path:'student-signup',component:StudentRegComponent},
  {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
