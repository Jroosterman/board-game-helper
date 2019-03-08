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
  MatButtonModule
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
    PieceModalComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PieceModalComponent]
})
export class AppModule { }
