import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HackerNewsComponent} from './hacker-news.component';
import {BrowserModule} from '@angular/platform-browser';
import {ArticlesModule} from '../../components/articles/articles.module';
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from "./datePipe";



@NgModule({
  declarations: [HackerNewsComponent, DatePipe],
  exports: [HackerNewsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ArticlesModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HackerNewsModule { }
