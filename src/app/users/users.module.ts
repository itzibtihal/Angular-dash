import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ParentsComponent } from './parents/parents.component';
import { StudentsComponent } from './students/students.component';
import { TutorsComponent } from './tutors/tutors.component';


@NgModule({
  declarations: [
    UsersComponent,
    ParentsComponent,
    StudentsComponent,
    TutorsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
