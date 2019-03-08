import { Component } from '@angular/core';
import { PieceModalComponent } from './../../modals/piece.modal';
import { MatDialog } from '@angular/material';

/**
 * This is the component that controls the grid view of the application.
 * This view is for create a grid to show where pieces are X spaces away.
 */
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent {

  rows = 5;
  columns = 5;
  /**
   * Constructor initializes Dialogs.
   * @param dialog Dialog ability
   */
  constructor(public dialog: MatDialog) {}

  /**
   * Creates a list with Xnumbers.
   * @param num Number of objects in list.
   */
  createRange(num: number) {
    const items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }

  /**
   * Open a dialog modal 
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(PieceModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
