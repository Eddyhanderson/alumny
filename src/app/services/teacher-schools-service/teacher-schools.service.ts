import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { PaginationQuery } from '../../interfaces/pagination-query/pagination-query';
import { PageResponse } from '../../models/page-response/page-response';
import { Response } from '../../models/response/response';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';

import { Routes } from 'src/app/shared/utils/routing-constants';
import { TeacherSchoolsModel } from '../../models/teacher-schools-model/teacher-schools.model';
import { TeacherSchoolQuery } from '../../interfaces/teacher-schools-query/teacher-school.query';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class TeacherSchoolsService {
    constructor(private http: HttpClient) { }

    /**
     * Send the data to be persisted
     * @param data contain the data about the teacher request to make part 
     * @returns the state of the creation
     */
    async create(data: TeacherSchoolsModel): Promise<any> {

        if (data == null) return null;

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
     * Send the data to be persisted
     * @param data contain the data about the teacher request to make part 
     * @returns the state of the creation
     */
    public async update(teacherId: string, schoolId: string, teacherSchool: TeacherSchoolsModel): Promise<boolean> {

        if (teacherId == null || schoolId == null) return null;

        if (teacherId !== teacherSchool.teacher.id || schoolId !== teacherSchool.school.id)
            return null;

        try {
            return await this.http.put<boolean>(
                Routes.TEACHER_SCHOOLS_UPDATE_ROUTE.replace("{teacherId}", teacherId)
                    .replace("{schoolId}", schoolId), teacherSchool).toPromise();

        } catch (error) {
            console.log(error.message)
        }
    }


    /**
     * Get all teacher schools 
     * @param pQuery query parameters of pagination
     * @param tsQuery query parameters of teacher school
     * @returns a page response with data necessary to create pagination
     */
    public getAll(pQuery: PaginationQuery, tsQuery: TeacherSchoolQuery): Observable<PageResponse<TeacherSchoolsModel>> {
        let queryParams = this.createQueryParams(pQuery, tsQuery);

        try {
            return this.http
                .get<PageResponse<TeacherSchoolsModel>>(Routes.TEACHER_SCHOOLS_GET_ALL_ROUTE, { params: queryParams });
        } catch (error) {
            console.log(error.message);
        }
    }

    /**
     * Check if the teacher is in any school
     * @param teacherId the teacher being researched
     */
    public async checkTeacherHasSchool(teacherId: string): Promise<boolean> {
        try {
            var response = await this.http.
                get<Response<boolean>>(Routes.TEACHER_SCHOOLS_CHECK_TEACHER_HAS_SCHOOL_ROUTE.replace('{teacherId}', teacherId)).toPromise();

            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    private createQueryParams(query: PaginationQuery, params: TeacherSchoolQuery): HttpParams {
        return new HttpParams()
            .set('pageNumber', query.pageNumber.toString() ?? '')
            .set('pageSize', query.pageSize.toString() ?? '')
            .set('searchValue', query.searchValue ?? '')
            .set('schoolId', params.schoolId ?? '')
            .set('teacherId', params.teacherId ?? '')
            .set('situation', params.situation ?? '');
    }
}
