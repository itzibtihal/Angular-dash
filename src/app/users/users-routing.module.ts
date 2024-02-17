import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ParentsComponent } from './parents/parents.component';
import { StudentsComponent } from './students/students.component';
import { TutorsComponent } from './tutors/tutors.component';

const routes: Routes = [
  {
    path:'tutors',
    component:TutorsComponent
  },
  {
    path:'parents',
    component:ParentsComponent
  },
  {
    path:'students',
    component:StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
