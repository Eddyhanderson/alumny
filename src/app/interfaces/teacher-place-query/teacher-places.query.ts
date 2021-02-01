export class TeacherPlaceQuery {
    constructor(teacherId?:string, schoolId?:string, academicYear?:number){
        this.teacherId = teacherId ?? '';
        this.schoolId = schoolId ?? '';
        this.academicYear = academicYear ?? 0;
    }

    teacherId?: string;
    schoolId?: string;
    academicYear?: number;
}