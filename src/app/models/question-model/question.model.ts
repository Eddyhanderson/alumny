import { LessonModel } from "../lesson-model/lesson.model";
import { PostModel } from "../post-model/post.model";
import { StudantModel } from "../studant-model/studant.model";

export class QuestionModel {
    postId: string;

    content: string;

    subject: string;

    id: string;

    lessonId: string;

    studantId: string;

    situation: string;

    studant: StudantModel;

    lessonBackgroundPhotoPath: string;

    lessonSequence: string;

    lessonTitle: string;

    lessonType: string;

    post: PostModel;
}