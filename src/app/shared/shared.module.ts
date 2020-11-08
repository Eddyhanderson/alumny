import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../material/material.module';
import { MatCarouselSlide, MatCarouselSlideComponent, MatCarouselModule } from '@ngmodule/material-carousel';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DataFormaterDirective } from './directives/data-formater.directive';


@NgModule({
  declarations: [VideoComponent, ProgressBarComponent, DataFormaterDirective],
  exports:[VideoComponent, ProgressBarComponent, DataFormaterDirective],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule
  ]
})
export class SharedModule { }
