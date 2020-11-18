import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

const routes: Routes = [

  { path: "auth", loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "lesson", loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule) },
  { path: "manager-school", loadChildren: () => import('./manager-school/manager-school.module').then(m => m.ManagerSchoolModule) },
  { path: "question", loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
  { path: "studant", loadChildren: () => import('./studant/studant.module').then(m => m.StudantModule) },
  { path: "school", loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
  { path: "teacher-school", loadChildren: () => import('./teacher-school/teacher-school.module').then(m => m.TeacherSchoolModule) },
  { path: "teacherPlace", loadChildren: () => import('./teacher-place/teacher-place.module').then(m => m.TeacherPlaceModule) },
  { path: "teacher", loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
