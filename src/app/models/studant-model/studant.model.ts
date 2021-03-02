import { CourseModel } from "../course-model/course.model";
import { UserModel } from "../user-model/user-model";

export class StudantModel {

    id: string;

    userId: string;

    studantCode: string;

    courseId: string;

    user: UserModel;

    course: CourseModel;
}