import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { PaginationQuery } from 'src/app/models/pagination-query/pagination-query';
import { Routes } from 'src/app/shared/utils/routing-constants';

@Injectable({
    providedIn: "root"
})
export class SchoolService {

    constructor(private http: HttpClient) { }

    /**
     * Allow registration of the certain school
     * @param school the data that will be persisted about the school
     */
    create(school: SchoolModel): Promise<any> {
        return this.http.post(Routes.SCHOOL_CREATE_ROUTE, school).toPromise();
    }

    /**
     * Get all the schools in the database
     * @param query the data with specification of page number and size
     */
    async getAll(query: PaginationQuery) {
        var response = await this.http.get(Routes.SCHOOL_GET_ALL_ROUTE, {
            params: {
                pageNumber: query.pageNumber.toString(),
                pageSize: query.pageSize.toString(),
                searchValue: query.searchValue,
                role: query.role
            }}).toPromise().catch(r => { console.log(r.message); return null; });

        return response;
    }
} 