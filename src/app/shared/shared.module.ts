import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from '../material/material.module';
import { MatCarouselSlide, MatCarouselSlideComponent, MatCarouselModule } from '@ngmodule/material-carousel';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DataFormaterDirective } from './directives/data-formater/data-formater.directive';
import { MessageFallBackDirective } from './directives/message-fallBack/message-fall-back.directive';


@NgModule({
  declarations: [VideoComponent, ProgressBarComponent, DataFormaterDirective, MessageFallBackDirective],
  exports:[VideoComponent, ProgressBarComponent, DataFormaterDirective, MessageFallBackDirective],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule
  ]
})
export class SharedModule { }
