import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * Modal to add diece to our list of chosen die.
 */
@Component({
  selector: 'app-create-dice-modal',
  templateUrl: 'create.dice.modal.html',
})
export class CreateDiceModalComponent {

  createdDice =
    {
      name: 'New Dice',
      sides: 6,
      values: [1, 2, 3, 4, 5, 6],
      isUrl: false,
      isNumeric: true,
      selectedIndex: 0
    };

  constructor(public dialogRef: MatDialogRef<CreateDiceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  /**
   * When you click on the create button, set the data to the result and return the new background color.
   */
  createDice(): void {
    this.dialogRef.close(this.createdDice);
  }

  /**
   * Click the cancel button and close the dialog.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Updates the values if we now have a numeric list.
   */
  updateNumeric(): void {
    const newList = [];

    if (!this.createdDice.isNumeric) {
      for (const v of this.createdDice.values) {
        newList.push(v.toString());
      }
    } else {
      for (const v of this.createdDice.values) {
        newList.push(Number(v));
      }
    }

    this.createdDice.values = newList;
  }

  /**
   * Update the list with the new size.
   */
  updateList(): void {
    const items: any[] = [];
    for (let i = 0; i < this.createdDice.sides; i++) {
      if (this.createdDice.values[i] != null) {
        items.push(this.createdDice.values[i]);
      } else {
        items.push(i + 1);
      }
    }
    this.createdDice.values = items;
  }

}
