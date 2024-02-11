import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { TutorsComponent } from './tutors/tutors.component';
import { ParentsComponent } from './parents/parents.component';
import { ClassesComponent } from './classes/classes.component';
import { ChatComponent } from './chat/chat.component';
import { CoursesComponent } from './courses/courses.component';
import { PresenceComponent } from './presence/presence.component';
import { TutorCVComponent } from './tutor-cv/tutor-cv.component';
import { MediaComponent } from './media/media.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ProgressOfTheWeekComponent } from './progress-of-the-week/progress-of-the-week.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StudentsComponent,
    TutorsComponent,
    ParentsComponent,
    ClassesComponent,
    ChatComponent,
    CoursesComponent,
    PresenceComponent,
    TutorCVComponent,
    MediaComponent,
    EvaluationComponent,
    ProgressOfTheWeekComponent,
    SettingsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
