import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TeacherModel } from '../../models/teacher-model/teacher-model';
import { Response } from '../../models/response/response';
import { CreationResult } from '../../models/creation-result/creation-result';
import { Routes } from '../../shared/utils/routing-constants';
import { BehaviorSubject, Observable, Subject, } from 'rxjs';

export interface TeacherRequest {
    id: string,
    userId: string,
    courseId: string,
    academyId: string,
    academicLevelId: string
};

@Injectable(
    { providedIn: "root" }
)
export class TeacherService {

    constructor(private http: HttpClient) { }

    private teacherReq: TeacherRequest;

    private teacherLoged = new BehaviorSubject<TeacherModel>(null);

    /**
     * Registration of teacher
     * @param teacherModel the teacher who will be persisted
     */
    public create(teacherModel: TeacherModel): Promise<TeacherModel> {
        this.teacherReq = {
            id: teacherModel.id,
            academicLevelId: teacherModel.academicLevelId,
            academyId: teacherModel.academy.id,
            courseId: teacherModel.course.id,
            userId: teacherModel.user.id
        };
        let creationResult = this.http.post<CreationResult<TeacherModel>>(Routes.TEACHER_CREATE_ROUTE, this.teacherReq)
            .toPromise()
            .then(creationResult => {
                if (creationResult.succeded) {
                    this.teacherLoged.next(creationResult.data);
                }
            })
            .catch(r => { console.log(r.message); return r });;

        if (creationResult instanceof (CreationResult)) {
            if (creationResult.succeded)
                return creationResult.data;
        }

        return null;
    }

    /**
     * Get the data of the teacher 
     * @param teacherId the id of the teacher
     * @returns the teacher data
     */
    public async get(teacherId: string): Promise<TeacherModel> {

        let response = await this.http
            .get<Response<TeacherModel>>(Routes.TEACHER_GET_ROUTE.replace('{teacherId}', teacherId))
            .toPromise()
            .catch(r => { return console.log(r.message) });

        if (response instanceof (Response)) {
            return response.data;
        }

        return null;
    }

    /**
     * To persist in local storage the information about teacher by user id
     * @param userId the user of the teacher
     */
    public async setTeacherData(userId: string): Promise<boolean> {

        if (localStorage['teacher'] !== undefined) return true;

        try {
            let response = await this.http
                .get<Response<TeacherModel>>(Routes.TEACHER_GET_BY_USER_ROUTE.replace('{userId}', userId))
                .toPromise();

            if (response) {
                this.persistTeacherData(response.data);
                return true;
            }

            return false;
        } catch (error) {
            console.log("ERROR LOG: " + error.message)
        }
    }

    persistTeacherData(teacher: TeacherModel) {
        localStorage.teacher = JSON.stringify(teacher);
    }
}
