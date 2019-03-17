import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * Modal to add diece to our list of chosen die.
 */
@Component({
  selector: 'app-dice-modal',
  templateUrl: 'add.dice.modal.html',
})
export class AddDiceModalComponent {

  chosenDice = null;
  constructor(public dialogRef: MatDialogRef<AddDiceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  /**
   * When you click on the create button, set the data to the result and return the new background color.
   */
  addDie(): void {
    this.dialogRef.close(this.chosenDice);
  }

  /**
   * Click the cancel button and close the dialog.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
