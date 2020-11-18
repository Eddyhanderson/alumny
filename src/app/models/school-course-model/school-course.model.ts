import { CourseModel } from '../course-model/course.model';
import { SchoolModel } from '../school-model/school.model';

export class SchoolCourseModel {
    school?: SchoolModel;

    schoolId:string;

    course?: CourseModel;

    courseId:string;

    situation?: string;
}