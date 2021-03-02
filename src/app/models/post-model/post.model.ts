import { UserModel } from "../user-model/user-model";

export class PostModel{
    
    id:string;

    userId:string;

    postType:string;

    commentableId:string;

    createAt:Date;

    situation:string;
    
    user:UserModel;            
}