import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ArticlesComponent} from './articles.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ArticlesComponent, ConfirmationDialogComponent],
  exports: [ArticlesComponent],
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ConfirmationDialogComponent]
})
export class ArticlesModule { }
