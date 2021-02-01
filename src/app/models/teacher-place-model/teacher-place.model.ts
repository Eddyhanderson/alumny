export class TeacherPlaceModel {

    constructor(teacherId: string, schoolId: string, courseId: string, disciplineId: string, name: string, description: string) {
        this.teacherId = teacherId;
        this.schoolId = schoolId;
        this.courseId = courseId;
        this.disciplineId = disciplineId;
        this.name = name;
        this.description = description;
    }
    
    id?: string;

    teacherId: string;

    teacherFirstName: string;

    teacherLastName: string;

    description: string;

    teacherPictureProfilePath: string;

    disciplineId: string;

    displineName: string;

    courseId: string;

    courseName: string;

    schoolId: string;

    schoolName: string;

    schoolShortName: string;

    schoolPictureProfilePath: string;

    situation?: string;

    teacherPlaceCode: string;

    name: string;

    profilePhotoPath?: string;

    acedmicYear?: number;
}