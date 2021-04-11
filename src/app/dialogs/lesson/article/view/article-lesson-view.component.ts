import { AfterViewInit, Component, ElementRef, Inject, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleModel } from 'src/app/models/article-model/article.model';
import { LessonModel } from 'src/app/models/lesson-model/lesson.model';
import { PostModel } from 'src/app/models/post-model/post.model';
import { ArticleService } from 'src/app/services/article-service/article.service';
import { PostService } from 'src/app/services/post-service/post.service';
import Delta from '../../../../../../node_modules/@types/quill/node_modules/quill-delta/dist/Delta';
import Quill from 'quill';

@Component({
  selector: 'app-article-lesson-view',
  templateUrl: './article-lesson-view.component.html',
  styleUrls: ['./article-lesson-view.component.scss']
})
export class ArticleLessonViewComponent implements OnInit, AfterViewInit {
  constructor(
    public dialogRef: MatDialogRef<ArticleLessonViewComponent>,
    private as: ArticleService,
    private ps: PostService,
    @Inject(MAT_DIALOG_DATA) public lesson: LessonModel) { }

  public article: ArticleModel;
  public post: PostModel;
  private _quill: Quill;

  @ViewChild('view', { static: true }) view: ElementRef<HTMLElement>;
  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  ngOnInit(): void {

  }

  async ngAfterViewInit() {
    await this.getArticle();
    await this.getPost();
    this.createView();
  }

  private async getArticle() {

    if (this.lesson?.articleId != null) {
      this.article = await this.as.get(this.lesson.articleId);
    }
  }

  private async getPost() {
    if (this.lesson?.postId != null) {
      this.post = await this.ps.get(this.lesson.postId);
    }
  }

  private createView() {
    if (this.lesson && this.article) {
      this._quill = new Quill(this.view.nativeElement, {
        readOnly: true,
        theme:'bubble'
      });

      let content: Delta = JSON.parse(this.article.delta);
      console.dir(content);
      this._quill.setContents(content);
    }
  }
}
