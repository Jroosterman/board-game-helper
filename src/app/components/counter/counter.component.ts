import { Component } from '@angular/core';

/**
 * This is the main component of the application that is manages the main page of the application.
 * This is where everything gets loaded into.
 */
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  data = [
    {
      player: 'Player 1',
      counters: 1,
    }
  ];

  /**
   * Add to given counter.
   * @param counter Counter to add to.
   */
  addCounter(d) {
    d.counters += 1;
  }

  /**
   * Add to given counter.
   * @param counter Counter to add to.
   */
  removeCounter(d) {
    if (d.counters === 1) {
      return;
    }
    d.counters -= 1;
  }

  /**
   * Add a new Player
   */
  addPlayer() {
    const val = this.data.length;
    const newPlayer = {
      player: 'Player ' + val,
      counters: 1,
    };
    this.data.push(newPlayer);
  }
}
