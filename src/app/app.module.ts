import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

import {MaterialModule} from './material/material.module';
import { QuillModule } from 'ngx-quill'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,    
  ],
  imports: [
    BrowserModule,
    MaterialModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
