import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageResponse } from 'src/app/models/page-response/page-response';
import { PaginationQuery } from '../../interfaces/pagination-query/pagination-query';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { TeacherPlaceQuery } from 'src/app/interfaces/teacher-place-query/teacher-places.query';

import { Routes } from 'src/app/shared/utils/routing-constants';

@Injectable({
  providedIn: 'root'
})
export class TeacherPlaceService {

  constructor(private http: HttpClient) { }


  public getAll(pQuery: PaginationQuery, param: TeacherPlaceQuery):Observable<TeacherPlaceModel[]> {
    let queryParams = this.createQueryParams(pQuery, param);

    return this.http.get<PageResponse<TeacherPlaceModel>>(Routes.TEACHER_PLACE_GET_ALL_ROUTE, { params: queryParams })
      .pipe(map(response => response.data));
  }


  private createQueryParams(query: PaginationQuery, params: TeacherPlaceQuery): HttpParams {
    return new HttpParams()
      .set('pageNumber', query.pageNumber.toString())
      .set('pageSize', query.pageSize.toString())
      .set('searchValue', query.searchValue)
      .set('schoolId', params.schoolId)
      .set('teacherId', params.teacherId)
      .set('academicYear', params.academicYear);;
  }
}
