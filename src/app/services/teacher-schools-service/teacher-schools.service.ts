import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { PaginationQuery } from 'src/app/models/pagination-query/pagination-query';
import { PageResponse } from '../../models/page-response/page-response';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';

import { Routes } from 'src/app/shared/utils/routing-constants';
import { TeacherSchoolsModel } from '../../models/teacher-schools-model/teacher-schools.model';
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { Observable } from 'rxjs';

export interface TeacherSchoolSRequest {
    teacherId: string,
    schoolId: string
}

@Injectable({
    providedIn: "root"
})
export class TeacherSchoolsService {
    constructor(private http: HttpClient) { }

    private teacherSchoolReq: TeacherSchoolSRequest;

    /**
     * Send the data to be persisted
     * @param data contain the data about the teacher request to make part 
     * @returns the state of the creation
     */
    async create(data: TeacherSchoolSRequest): Promise<any> {
       
        if(data == null) return null; 
        
        try {
            let response = await this.http.post<any>(Routes.TEACHER_SCHOOLS_CREATE_ROUTE, data).toPromise();
            
            if (response.succeded) {
                return response.data;
            } else return null;

        } catch (error) {
            console.log(error.message)
        }        
    }

    /**
     * Get all teacher schools by schoolId with status pending
     * @param schoolId the key to search the teacher schools that not are confirmed
     * @returns the list of teacher schools that aren't confirmed
     */
    async getAllPendingTeacherSchoolBySchool(schoolId: string): Promise<any> {
        let response = await this.http
            .get(Routes.TEACHER_SCHOOLS_GET_ALL_PENDING_BY_SCHOOL_ROUTE.replace('{schoolId}', schoolId))
            .toPromise()
            .catch(r => { console.log(r.message); return null; });

        if (response.data != null) {
            return response.data;
        } else return null;
    }

    /**
     * Get all teacher schools by teacherId with status pending
     * @param teacherId the key to search the teacher schools that not are confirmed
     * @returns the list of teacher schools that aren't confirmed
     */
    public getAllPendingTeacherSchoolByTeacher(teacherId: string): Observable<TeacherSchoolsModel[]> {
        try {            
            return this.http.get<PageResponse<TeacherSchoolsModel>>(Routes.TEACHER_SCHOOLS_GET_ALL_PENDING_BY_TEACHER_ROUTE.replace('{teacherId}', teacherId))
                .pipe(map(result => result.data));
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * Get all the teacher schools from this teacher
     * @param teacherId the key to search the teachers who are confirmed
     */
    public getAllNormalTeacherSchoolByTeacher(teacherId: string): Observable<TeacherSchoolsModel[]> {

        try {
            return this.http
                .get<PageResponse<TeacherSchoolsModel>>(Routes.TEACHER_SCHOOLS_GET_ALL_NORMAL_BY_TEACHER_ROUTE.replace('{teacherId}', teacherId))
                .pipe(map(result => result.data));            
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * Get all the teacher from this school
     * @param teacherId the key to searching for teachers that is part of
     */
    async getAllNormalTeacherSchoolBySchool(schoolId: string): Promise<any> {
        let response = await this.http
            .get(Routes.TEACHER_SCHOOLS_GET_ALL_NORMAL_BY_SCHOOL_ROUTE.replace('{schoolId}', schoolId)).toPromise()
            .catch(r => { console.log(r.message); return null; });

        if (response.data != null) {
            return response.data;
        } else return null;
    }

    /**
     * Get all the school that he is not the part of
     * @param teacherId the key to searching for teachers who are not confirmed
     */
    public getAllNotContainedTeacherSchool(query: PaginationQuery, teacherId: string): Observable<SchoolModel[]> {

        try {
            return this.http.
                get<PageResponse<SchoolModel>>(Routes.TEACHER_SCHOOLS_GET_ALL_NOTCONTAINED_ROUTE.replace('{teacherId}', teacherId), 
                {
                    params: {
                        pageNumber: query.pageNumber.toString(),
                        pageSize: query.pageSize.toString(),
                        searchValue: query.searchValue,
                        role: query.role
                    }
                }).pipe(
                    map((pageResponse) => pageResponse.data)
                );

        } catch (error) {
            console.log(error.message);
        }



    }
}