import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../material/material.module';
import { MatCarouselSlide, MatCarouselSlideComponent, MatCarouselModule } from '@ngmodule/material-carousel';



@NgModule({
  declarations: [VideoComponent],
  exports:[VideoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule
  ]
})
export class SharedModule { }
