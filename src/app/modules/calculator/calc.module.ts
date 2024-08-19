import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorComponent} from "./calculator.component";
import {ReactiveFormsModule} from "@angular/forms";
import { CalculatorRoutingModule } from './calculator-routing.module';




@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalculatorRoutingModule

  ]
})
export class CalcModule { }
