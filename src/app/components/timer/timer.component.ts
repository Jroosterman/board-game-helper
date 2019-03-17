import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

/**
 * This is the main component of the application that is manages the main page of the application.
 * This is where everything gets loaded into.
 */
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent {
  timers = [
    {
      name: 'Timer 1',
      seconds: 10,
      isOn: false,
      currentTime: 10,
      sub: null
    }
  ];

  /**
   * Add timer to list of timers.
   */
  addTimer() {
    const val = this.timers.length;
    const timer = {
      name: 'Timer ' + (val + 1),
      seconds: 10,
      isOn: false,
      currentTime: 10,
      sub: null
    };
    this.timers.push(timer);
  }

  /**
   * Update current time with the changes to the seconds.
   * @param timer TImer you are updating.
   */
  updateTime(timer) {
    timer.currentTime = timer.seconds;
  }

  /**
   * Remove timer from list of timers.
   */
  removeTimer() {
    const val = this.timers.length;
    this.timers.splice(val - 1, 1);
  }

  /**
   * start the timer.
   * @param timer timer to start
   */
  startTimer(timer) {
    timer.isOn = true;
    timer.sub = interval(1000).subscribe((val) => {
      if (timer.currentTime > 0) {
        timer.currentTime -= 1;
      }
      if (timer.currentTime === 0)  {
        const audio = new Audio();
        audio.src = './../../assets/sfx/bell.mp3';
        audio.load();
        audio.play();
        timer.sub.unsubscribe();
      }
    });
  }

  /**
   * Stop the given timer.
   * @param timer timer to stop.
   */
  stopTimer(timer) {
    timer.isOn = false;
    timer.sub.unsubscribe();
  }
}
