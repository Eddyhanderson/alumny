import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SplashComponent },
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "teacherPlace", loadChildren: () => import('./teacher-place/teacher-place.module').then(m => m.TeacherPlaceModule) },
  { path: "lesson", loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule) },
  { path: "question", loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
  { path: "studant", loadChildren: () => import('./studant/studant.module').then(m => m.StudantModule) },
  { path: "teacher", loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: "school", loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
  { path: "manager-school", loadChildren: () => import('./manager-school/manager-school.module').then(m => m.ManagerSchoolModule) },
  { path: "auth", loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
