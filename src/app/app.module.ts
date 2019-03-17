import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatGridListModule,
  MatDialogModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatTableModule,
  MatListModule,
  MatBadgeModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/cards/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { DiceComponent } from './components/dice/dice.component';
import { FreehandComponent } from './components/freehand/freehand.component';
import { GridComponent } from './components/grid/grid.component';
import { TableComponent } from './components/table/table.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';
import { PieceModalComponent } from './modals/piece.modal';
import { AddDiceModalComponent } from './modals/add.dice.modal';
import { CreateDiceModalComponent } from './modals/create.dice.modal';
import { RangePipe } from './services/utils.components';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';

/**
 * This is the main module that is ues to load in all of the components used by the applicaiton into the right spot.
 */
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CounterComponent,
    DiceComponent,
    FreehandComponent,
    GridComponent,
    TableComponent,
    TimerComponent,
    PieceModalComponent,
    AddDiceModalComponent,
    CreateDiceModalComponent,
    RangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatTableModule,
    CanvasWhiteboardModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PieceModalComponent, AddDiceModalComponent, CreateDiceModalComponent]
})
export class AppModule { }
