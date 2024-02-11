import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PresenceComponent } from './presence/presence.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TutorCVComponent } from './tutor-cv/tutor-cv.component';
import { ClassesComponent } from './classes/classes.component';
import { ChatComponent } from './chat/chat.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ProgressOfTheWeekComponent } from './progress-of-the-week/progress-of-the-week.component';
import { SettingsComponent } from './settings/settings.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path : '' ,redirectTo: 'dashboard' ,pathMatch:'full'},
  {path : 'admin/dashboard' ,component :DashboardComponent},
  {path : 'admin/media' ,component :MediaComponent},
  {path : 'admin/presence' ,component :PresenceComponent},
  {path : 'admin/Statistics' ,component :StatisticsComponent},
  {path : 'admin/courses' ,component :CoursesComponent},
  {path : 'admin/tutorcv' ,component :TutorCVComponent},
  {path : 'admin/classes' ,component :ClassesComponent},
  {path : 'admin/chat' ,component :ChatComponent},
  {path : 'admin/settings' ,component :SettingsComponent},
  {path : 'admin/evaluation' ,component :EvaluationComponent},
  {path : 'admin/progressOfTheWeek' ,component :ProgressOfTheWeekComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
