import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Routes } from 'src/app/shared/utils/routing-constants';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  public upload(file: File):Observable<any> {
    var formData = new FormData();
    formData.append('file', file);

    return this.http.post(Routes.VIDEO_UPLOAD, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
