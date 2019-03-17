import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDiceModalComponent } from '../../modals/add.dice.modal';
import { CreateDiceModalComponent } from '../../modals/create.dice.modal';

export interface Dice {
  name: string;
  sides: number;
  values: any[];
  isUrl: boolean;
  isNumeric: boolean;
  selectedIndex: number;
}

/**
 * This is the main component of the application that is manages the main page of the application.
 * This is where everything gets loaded into.
 */
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html'
})
export class DiceComponent {
  sum = '0';
  doubles = 'No';
  straight = 0;

  /**
   * constructor for setting stuff up.
   * @param dialog Allow us to use dialogs.
   */
  constructor(public dialog: MatDialog) { }

  /**
   * Set up data for stored Dice.
   */
  dice = [
    {
      name: '6 sided Die',
      sides: 6,
      values: [1, 2, 3, 4, 5, 6],
      isUrl: false,
      isNumeric: true,
      selectedIndex: 0
    }
  ];

  /**
   * Chosen Dice are the dice we are currently using.
   */
  chosenDice = [this.dice[0]];

  /**
   * Open a dialog modal for adding diece
   */
  addDice($event): void {
    const dialogRef = this.dialog.open(AddDiceModalComponent, {
      width: '600px',
      data: { dice: this.dice },
    });

    /**
     * Add the chosen die from the modal.
     */
    dialogRef.afterClosed().subscribe(result => {
      const copy = (JSON.parse(JSON.stringify(result)));
      this.chosenDice.push(copy);
    });
  }

  /**
   * Open a dialog modal for adding diece
   */
  createDice($event): void {
    const dialogRef = this.dialog.open(CreateDiceModalComponent, {
      width: '600px',
      height: '600px',
      data: { dice: this.dice },
    });

    /**
     * Add the chosen die from the modal.
     */
    dialogRef.afterClosed().subscribe(result => {
      const copy = (JSON.parse(JSON.stringify(result)));
      this.dice.push(copy);
    });
  }

  /**
   * Remove die from the list of chosen dice.
   * @param die die to remove
   */
  removeDice(index) {
    this.chosenDice.splice(index, 1);
  }

  /**
   * Roll all of the die.
   */
  roll() {
    for (const d of this.chosenDice) {
      const index = Math.floor(Math.random() * d.sides);
      d.selectedIndex = index;
      const audio = new Audio();
      audio.src = './../../assets/sfx/diceRoll.mp3';
      audio.load();
      audio.play();
    }
  }

  /**
   * Calculate the sum of the numeric dice.
   */
  sumOfDice(): number {
    let sum = 0;
    for (const d of this.chosenDice) {
      if (d.isNumeric) {
        sum += d.values[d.selectedIndex];
      }
    }
    return sum;
  }

  /**
   * Check if there are doubles in the set of dice.
   */
  areThereDoubles(): boolean {
    const dubs = [];
    for (const d of this.chosenDice) {
      const v = d.values[d.selectedIndex];
      if (dubs.includes(v)) {
        return true;
      }
      dubs.push(v);
    }

    return false;
  }
}
