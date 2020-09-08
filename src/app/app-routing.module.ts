import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', loadChildren:()=>import('./home/home.module').then(m => m.HomeModule)},
  {path:"home", loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule) },
  {path:"teacherPlace", loadChildren: ()=> import('./teacher-place/teacher-place.module').then(m => m.TeacherPlaceModule) },
  {path:"lesson", loadChildren: ()=> import('./lesson/lesson.module').then(m => m.LessonModule) },
  {path:"question", loadChildren: ()=> import('./question/question.module').then(m => m.QuestionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
