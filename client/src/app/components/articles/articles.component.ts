import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {HackerNewsService} from '../../services/hacker-news.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  constructor(private matDialog: MatDialog,
              private hackerNewsService: HackerNewsService,
              public snackBar: MatSnackBar) {}
  @Input() article: any;
  @Output() deleteItemEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  itemIdSelected;

  clickEvent(storyUrl: string): void {
    if (storyUrl) {
      window.open(storyUrl, '_blank');
    }else {
      this.openSnackBar('Article without story URL', '');
    }
  }

  openDialog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Delete post',
      content: 'Are you sure you want to delete this?'
    };
    const dialogRef = this.matDialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.deleteItem();
        }
      }
    );
  }

  setDeleteItem(itemId): void{
    this.itemIdSelected = itemId;
    this.openDialog();
  }

  getTextToolTip(text: string): string {
    const html = text;
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  deleteItem() {
      const items = this.hackerNewsService.getDeleteItems();
      console.log('this.itemIdSelected ', this.itemIdSelected);
      if (items && !items.find(item => item === this.itemIdSelected)) {
        items.push(this.itemIdSelected);
        this.hackerNewsService.setDeleteItems(items);
      }
      this.deleteItemEventEmitter.emit(true);
      console.log(JSON.stringify(items));
      this.itemIdSelected = null;
      this.openSnackBar('Post deleted', 'Success');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
