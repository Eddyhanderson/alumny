import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

import {MaterialModule} from './material/material.module';



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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
