import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ManagerModel } from 'src/app/models/manager-model/manager.model';
import { Routes } from '../../shared/utils/routing-constants';

export interface ManagerRequest {
    id: string,
    userId: string,
    schoolId: string
};

@Injectable({
    providedIn: "root"
})
export class ManagerService {

    private managerRequest: ManagerRequest;

    constructor(private http: HttpClient) { }

    /**
     * Allow registration of the certain manager
     * @param manager the data that will be persisted about the school
     */
    create(manager: ManagerModel): Promise<any> {
        this.managerRequest = {
            id: manager.id,
            userId: manager.user.id,
            schoolId: manager.school.id
        };

        return this.http.post(Routes.MANAGER_CREATE_ROUTE, this.managerRequest).toPromise();
    }

}