import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-piece-modal',
  templateUrl: 'piece.modal.html',
})
export class PieceModalComponent {

  constructor(public dialogRef: MatDialogRef<PieceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
