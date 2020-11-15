import { AcademyModel } from '../academy-model/academy.model';
import { CourseModel } from '../course-model/course.model';
import { UserModel } from '../user-model/user-model';
import { AcademicLevelModel } from '../academic-level-model/academic-level.model';

export class TeacherModel {

    id?: string;

    user: UserModel;

    academy?: AcademyModel;
    
    course?: CourseModel;
    
    teacherCode?: string;

    academicLevel?: AcademicLevelModel;
}
