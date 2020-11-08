import { SchoolModel } from '../school-model/school.model';
import { UserModel } from '../user-model/user-model';

export interface ManagerModel {
    id?: string,
    user:UserModel,
    school: SchoolModel;
}