import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  exports: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainLayoutModule { }
