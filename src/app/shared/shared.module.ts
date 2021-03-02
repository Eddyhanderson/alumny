import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { MaterialModule } from '../modules/material/material.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DataFormaterDirective } from './directives/data-formater/data-formater.directive';
import { MessageCallBackDirective } from './directives/message-callBack/message-call-back.directive';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { LoadingItemComponent } from './components/loading-item/loading-item.component';
import { LoadingDeterminateComponent } from './components/loading-determinate/loading-determinate.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { ElapsedTimePipe } from './pipes/elapsed-time';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [
    VideoComponent, 
    ProgressBarComponent, 
    DataFormaterDirective, 
    MessageCallBackDirective, 
    LoadingPageComponent, 
    LoadingItemComponent, 
    LoadingDeterminateComponent, 
    TextEditorComponent,
    ElapsedTimePipe,
    BottomSheetComponent],
  exports:[
    TextEditorComponent,
    VideoComponent, 
    ProgressBarComponent, 
    DataFormaterDirective, 
    MessageCallBackDirective, 
    LoadingPageComponent,     
    LoadingItemComponent,
    LoadingDeterminateComponent,
    ElapsedTimePipe,
    BottomSheetComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatCarouselModule,
    MatBottomSheetModule    
  ]
})
export class SharedModule { }
