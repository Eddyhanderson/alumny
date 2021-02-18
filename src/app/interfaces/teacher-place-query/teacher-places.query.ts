export class TeacherPlaceQuery {
    constructor(teacherId?:string, schoolId?:string){
        this.teacherId = teacherId ?? '';
        this.schoolId = schoolId ?? '';        
    }

    teacherId?: string;
    schoolId?: string;    
}