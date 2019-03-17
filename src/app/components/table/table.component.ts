import { Component } from '@angular/core';

/**
 * This is the main component of the application that is manages the main page of the application.
 * This is where everything gets loaded into.
 */
@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html'
})
export class TableComponent {
  rows = 2;
  cols = 3;

  /**
   * Add another Column
   */
  addColumn() {
    this.cols += 1;
  }

  /**
   * Add another Row.
   */
  addRow() {
    this.rows += 1;
  }

  /**
   * Remove another Column
   */
  removeColumn() {
    if (this.cols !== 1) {
      this.cols -= 1;
    }
  }

  /**
   * remove another Row.
   */
  removeRow() {
    if (this.rows !== 1) {
      this.rows -= 1;
    }
  }
}
