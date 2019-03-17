import { Component, ViewEncapsulation } from '@angular/core';
import { CanvasWhiteboardComponent, CanvasWhiteboardUpdate } from 'ng2-canvas-whiteboard';

/**
 * This is the main component of the application that is manages the main page of the application.
 * This is where everything gets loaded into.
 */
@Component({
  selector: 'app-freehand',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './freehand.component.html'
})
export class FreehandComponent {
  sendBatchUpdate(updates: CanvasWhiteboardUpdate[]) {
    console.log(updates);
  }
  onCanvasClear() {
    console.log('The canvas was cleared');
  }
  onCanvasUndo(updateUUID: string) {
    console.log(`UNDO with uuid: ${updateUUID}`);
  }
  onCanvasRedo(updateUUID: string) {
    console.log(`REDO with uuid: ${updateUUID}`);
  }


}
