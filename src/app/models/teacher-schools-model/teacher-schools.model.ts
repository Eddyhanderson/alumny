import { SchoolModel } from '../school-model/school.model';
import { TeacherModel } from '../teacher-model/teacher-model';

export interface TeacherSchoolsModel {
    teacher: TeacherModel;
    school: SchoolModel;
    situation: string;
    dateSituation: Date;
    creationAt: Date;
}