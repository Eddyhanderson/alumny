import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TopicChoiceDialogComponent } from 'src/app/dialogs/topic-choice-dialog/topic-choice-dialog.component';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { DisciplineTopicModel } from 'src/app/models/discipline-topic-model/discipline-topic.model';
import { LessonModel } from 'src/app/models/lesson-model/lesson.model';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query';
import { LessonService } from 'src/app/services/lesson-service/lesson.service';
import { LessonQuery } from 'src/app/interfaces/lesson-query/lesson.query';
import { DisciplineModel } from 'src/app/models/discipline-model/discipline.model';
import { LessonGroupedModel } from 'src/app/models/lessons-grouped.model/lessons-grouped';

@Component({
  selector: 'app-teacher-place-lessons',
  templateUrl: './teacher-place-lessons.component.html',
  styleUrls: ['./teacher-place-lessons.component.scss']
})
export class TeacherPlaceLessonsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ls: LessonService) { }

  // To present data  
  public lessonsGrouped: LessonGroupedModel[];
  // Model
  private lessons: LessonModel[];
  
  teacherPlaceId: string;

  ngOnInit(): void {
    this.getParam();
    this.getAllLessons();
  }
  

  private async getAllLessons() {

    if(this.teacherPlaceId == null) return null;
    
    let pQuery = new PaginationQuery(1, 100);
    let lessonQuery: LessonQuery = {
      teacherPlaceId: this.teacherPlaceId
    }
    this.lessons = (await this.ls.getAll(pQuery, lessonQuery).toPromise()).data;

    this.groupLesson();
        
  }

  private groupLesson() {
    this.lessons.forEach((lesson, i) => {
      if (i == 0) {
        this.lessonsGrouped = [this.createLessonGrouped(lesson)]
      } else {
        let topicExists = false;

        this.lessonsGrouped.forEach((group, i) => {
          if (group.disciplineTopic.id == lesson.discpilineTopicId) {
            topicExists = true;                        
            this.lessonsGrouped[i].lessons.push(lesson)            
          }
        })

        if (!topicExists) {
          this.lessonsGrouped.push(this.createLessonGrouped(lesson));
        }
      }
    })

    this.sortLessonGrouped();
  }

  private createLessonGrouped(lesson: LessonModel): LessonGroupedModel {
    return {
      disciplineTopic: {
        id: lesson.discpilineTopicId,
        name: lesson.disciplineTopicName
      },
      lessons: [lesson]
    }
  }

  private sortLessonGrouped(){
    this.lessonsGrouped.forEach((grouped) => {
      grouped.lessons.sort((a,b) => a.sequence - b.sequence)
    })
  }

  private getParam(){
    this.teacherPlaceId = this.route.parent.snapshot.paramMap.get('id');
  }
}
