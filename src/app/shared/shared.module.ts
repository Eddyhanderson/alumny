import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from '../material/material.module';
import { MatCarouselSlide, MatCarouselSlideComponent, MatCarouselModule } from '@ngmodule/material-carousel';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DataFormaterDirective } from './directives/data-formater/data-formater.directive';
import { MessageCallBackDirective } from './directives/message-callBack/message-call-back.directive';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { LoadingItemComponent } from './components/loading-item/loading-item.component';


@NgModule({
  declarations: [VideoComponent, ProgressBarComponent, DataFormaterDirective, MessageCallBackDirective, LoadingPageComponent, LoadingItemComponent],
  exports:[VideoComponent, ProgressBarComponent, DataFormaterDirective, MessageCallBackDirective, LoadingPageComponent, LoadingItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule
  ]
})
export class SharedModule { }
