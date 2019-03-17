import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-piece-modal',
  templateUrl: 'piece.modal.html',
})
export class PieceModalComponent {

  colors = ['red', 'green', 'blue', 'yellow', 'white', 'black'];
  color = '';
  url = '';

  constructor(public dialogRef: MatDialogRef<PieceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  /**
   * When you click on the create button, set the data to the result and return the new background color.
   */
  changeBackground(): void {
    if (this.url !== '') {
      this.data.background = 'url( ' + this.url + ')';
    } else if (this.color !== '') {
      this.data.background = this.color;
    }
    this.dialogRef.close(this.data);
  }

  /**
   * Click the cancel button and close the dialog.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Clear the space.
   */
  clear(): void {
    this.dialogRef.close(this.data);
  }

}
