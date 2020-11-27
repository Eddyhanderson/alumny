import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Routes } from 'src/app/shared/utils/routing-constants';
import { CourseModel } from 'src/app/models/course-model/course.model';
import { Observable } from 'rxjs';
import { PageResponse } from 'src/app/models/page-response/page-response';
import { map } from 'rxjs/operators';
import { CreationResult } from 'src/app/models/creation-result/creation-result';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query';

@Injectable({ providedIn: "root" })
export class CourseService {
    public constructor(private http: HttpClient) { }

    /**
     * This method make request to server for get course by unique name
     * @param name the name of course that are searching
     * @returns the response containing the course object if exists and null if no
     */
    getByName(name: string): Promise<any> {
        return this.http.get(Routes.COURSE_GET_BY_NAME_ROUTE.replace("{name}", name)).toPromise();
    }

    /**
     * This method make request to server for create course 
     * @param newCourse the data related of the user course
     * @returns the response containing the course object
     */
    create(newCourse: CourseModel): Promise<CreationResult<CourseModel>> {
        return this.http.post<CreationResult<CourseModel>>(Routes.COURSE_CREATE_ROUTE, newCourse).toPromise();
    }

    /**
     * Get all courses of school
     * @param query the data with specification of page number and size
     */
    public getAll(query: PaginationQuery): Observable<CourseModel[]> {
        try {
            let params = new HttpParams()
                .set('pageNumber', query.pageNumber.toString())
                .set('pageSize', query.pageSize.toString())
                .set('searchValue', query.searchValue.toString());

            return this.http.get<PageResponse<CourseModel>>(Routes.COURSE_GET_ALL_ROUTE, {
                params
            }).pipe(map(pr => pr.data));
        } catch (error) {

        }
    }
}