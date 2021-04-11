export class LessonModel {
    id?: string;

    title:string;

    teacherPlaceId: string;
    
    teacherPlaceName?:string;
 
    teacherPlacePhotoPath?:string;

    schoolId?:string;

    schoolName?:string;

    postId?: string;

    discpilineTopicId: string;

    disciplineTopicName?: string;

    disciplineId?: string;

    disciplineName?: string;

    backgroundPhotoPath?: string;

    description: string;

    sequence?: number;

    views?: number;

    lessonType:string;

    videoId?:string;

    manifestPath?:string;

    articleId?:string;

    date?:Date;

    public:boolean;

    duration?:string;
}