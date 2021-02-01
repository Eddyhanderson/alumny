import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,  } from 'rxjs/operators';
import { PageResponse } from '../../models/page-response/page-response';
import { PaginationQuery } from '../../interfaces/pagination-query/pagination-query';
import { TeacherPlaceModel } from '../../models/teacher-place-model/teacher-place.model';
import { TeacherPlaceQuery } from '../../interfaces/teacher-place-query/teacher-places.query';

import { Routes } from '../../shared/utils/routing-constants';
import { CreationResult } from '../../models/creation-result/creation-result';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TeacherPlaceService {

  constructor(private http: HttpClient) { }

  /**
   * Create a giving teacher place 
   * @param teacherPlace the teacher place data to be created
   */
  public create(teacherPlace: TeacherPlaceModel): Promise<CreationResult<TeacherPlaceModel>> {

    if (teacherPlace == null) return null;

    try {
      return this.http.post<CreationResult<TeacherPlaceModel>>(Routes.TEACHER_PLACE_CREATE_ROUTE, teacherPlace).toPromise();
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Get all teacher place in data base
   * @param pQuery to pagination concerne query params
   * @param param to customize the data fecth
   */
  public getAll(pQuery?: PaginationQuery, param?: TeacherPlaceQuery): Observable<PageResponse<TeacherPlaceModel>> {
    let queryParams = this.createQueryParams(pQuery, param);

    try {

      return this.http.get<PageResponse<TeacherPlaceModel>>(Routes.TEACHER_PLACE_GET_ALL_ROUTE, { params: queryParams });
    } catch (error) {
      console.log(error.message);
    }

  }


  private createQueryParams(query: PaginationQuery, params: TeacherPlaceQuery): HttpParams {
    return new HttpParams()
      .set('pageNumber', query?.pageNumber.toString())
      .set('pageSize', query?.pageSize.toString())
      .set('searchValue', query?.searchValue ?? '')
      .set('schoolId', params?.schoolId)
      .set('teacherId', params?.teacherId)
      .set('academicYear', params?.academicYear.toString());;
  }
}
