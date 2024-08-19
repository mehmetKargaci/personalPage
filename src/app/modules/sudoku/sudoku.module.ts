import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl } from '@angular/forms';

import { SudokuRoutingModule } from './sudoku-routing.module';
import { SudokuComponent } from './sudoku.component';
import { ReactiveFormsModule } from '@angular/forms';
import { validNumber } from './utility/valid-number.validator';

@NgModule({
  declarations: [
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    SudokuRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SudokuComponent]
})
export class SudokuModule { }
