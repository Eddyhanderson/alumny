import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {AcademyModel} from '../../models/academy-model/academy.model';
import { Routes } from 'src/app/shared/utils/routing-constants';

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
    create(newCourse: AcademyModel): Promise<any> {        
        return this.http.post(Routes.COURSE_CREATE_ROUTE, newCourse).toPromise();
    }
}