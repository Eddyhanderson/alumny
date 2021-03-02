import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener, OnDestroy, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LessonGroupedModel } from 'src/app/models/lessons-grouped.model/lessons-grouped';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { DisciplineTopicModel } from 'src/app/models/discipline-topic-model/discipline-topic.model';
import { DisciplineModel } from 'src/app/models/discipline-model/discipline.model';
import { LessonModel } from 'src/app/models/lesson-model/lesson.model';
import { LessonService } from 'src/app/services/lesson-service/lesson.service';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query';
import { LessonQuery } from 'src/app/interfaces/lesson-query/lesson.query';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import {  map } from 'rxjs/operators';

@Component({
  selector: 'app-video-lesson-watch',
  templateUrl: './video-lesson-watch.component.html',
  styleUrls: ['./video-lesson-watch.component.scss'],
})
export class VideoLessonViewComponent implements OnInit {

  private _reloadStrategy: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ls: LessonService) { }

  //Models
  lesson: LessonModel;
  lessons: LessonModel[];
  lessonsContainer: LessonModel[];
  discipline: DisciplineModel;
  teacherPlace: TeacherPlaceModel;
  disciplineTopic: DisciplineTopicModel;
  totalLesson: number;
  manifestPath$ = new BehaviorSubject<string>('');
  role:string = localStorage.userRole;

  ngOnInit(): void {
    this.getData();
    this.setStrategyToReloadPage();
  }

  public nextLesson(lessonId: string) {

    this.router.navigate([], {
      queryParams: { 'lesson': lessonId },
      relativeTo: this.route, queryParamsHandling: 'merge'
    })
  }

  // TODO: Load more lessons by scroll event
  // TODO: Development in the server side of pagedResponse with totalElements
  private async getData() {
    let lessonId = this.getQueryParam();

    this.lesson = await this.ls.get(lessonId);

    this.teacherPlace = {
      id: this.lesson.teacherPlaceId,
      name: this.lesson.teacherPlaceName,
      profilePhotoPath: this.lesson.teacherPlacePhotoPath
    }

    this.disciplineTopic = {
      id: this.lesson.discpilineTopicId,
      name: this.lesson.disciplineTopicName
    }

    this.discipline = {
      id: this.lesson.disciplineId,
      name: this.lesson.disciplineName
    }

    let lessonQuery: LessonQuery = {
      disciplineTopicId: this.lesson.discpilineTopicId
    }

    let param = new PaginationQuery();

    this.lessons = await this.ls.getAll(param, lessonQuery).pipe(
      map(response => response.data.sort((a, b) => a.sequence - b.sequence)),
      map(data => { this.totalLesson = data.length; return data; })
    ).toPromise();
  }

  private setStrategyToReloadPage() {
    this._reloadStrategy = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let lessonId = this.getQueryParam();
        this.lesson = this.lessons.find(l => l.id == lessonId);
      }
    })
  }

  private getQueryParam(): string {
    return this.route.snapshot.queryParamMap.get('lesson');
  }
  
}
