import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "teacherPlace", loadChildren: () => import('./teacher-place/teacher-place.module').then(m => m.TeacherPlaceModule) },
  { path: "lesson", loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule) },
  { path: "question", loadChildren: () => import('./question/question.module').then(m => m.QuestionModule) },
  { path: "studant", loadChildren: () => import('./studant/studant.module').then(m => m.StudantModule) },
  { path: "teacher", loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: "school", loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
  { path: "manager-school", loadChildren: () => import('./manager-school/manager-school.module').then(m => m.ManagerSchoolModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
