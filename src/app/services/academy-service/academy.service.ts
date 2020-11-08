import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {AcademyModel} from '../../models/academy-model/academy.model';
import { Routes } from 'src/app/shared/utils/routing-constants';

@Injectable({ providedIn: "root" })
export class AcademyService {
    public constructor(private http: HttpClient) { }    
 
    /**
     * This method make request to server for get academy by unique name
     * @param name the name of academy that are shearching
     * @returns the Observable containing the academy object if exists and null if no
     */
    getByName(name: string): Promise<any> {
        return this.http.get(Routes.ACADEMY_GET_BY_NAME_ROUTE.replace("{name}", name)).toPromise();
    }

    /**
     * This method make request to server for create academy 
     * @param newAcademy the data related of the user academy
     * @returns the Observable containing the academy object
     */
    create(newAcademy: AcademyModel): Promise<any> {        
        return this.http.post(Routes.ACADEMY_CREATE_ROUTE, newAcademy).toPromise();
    }
}