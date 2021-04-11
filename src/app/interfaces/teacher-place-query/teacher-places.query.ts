export class TeacherPlaceQuery {
    constructor(teacherId?:string, schoolId?:string, opened?:boolean){
        this.opened = opened ?? true;
        this.teacherId = teacherId ?? '';
        this.schoolId = schoolId ?? '';        
    }

    teacherId?: string;
    schoolId?: string;   
    opened?:boolean; 
}