import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { StudantProfileComponent } from './studant-profile/studant-profile.component'
import { StudantProfileQuestionsComponent } from './studant-profile-questions/studant-profile-questions.component';
import { StudantProfileClassematesComponent } from './studant-profile-classemates/studant-profile-classemates.component';
import { StudantProfileTeacherPlacesComponent } from './studant-profile-teacher-places/studant-profile-teacher-places.component';


var routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'path' },
    { path: 'profile', component: StudantProfileComponent, children:[
        { path: 'questions', component:StudantProfileQuestionsComponent},
        { path: 'teacherPlaces', component:StudantProfileTeacherPlacesComponent},
        { path: 'classMates', component:StudantProfileClassematesComponent}
    ] },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudantRoutingModule { }