import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ]
})
export class CalculatorComponent implements OnInit {

  inputControl = new FormControl('');
  buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '%','/']
  errormessage = false;

  result: number = 0;
  results: { operation: string, result: number }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  pressNum(num: string) {
    const value = this.inputControl.value;
    this.inputControl.setValue(value + num);
  }

  deleteAll() {
    this.inputControl.setValue('');
    this.results = [];
    this.errormessage = false;
  }

  clear() {
    this.inputControl.setValue('');
  }

  calculate() {
    const value = this.inputControl.value;
    const operators = ['+', '-', '*', '/', '%'];

    // Find operator
    for (const operator of operators) {
      const index = value?.indexOf(operator) || -1;
      if (index > -1) {
        const firstNumber = value?.slice(0, index) || '';
        const secondNumber = value?.slice(index + 1) || '';
        console.log(firstNumber, operator, secondNumber);
        //add operator
        if (isNaN(Number(firstNumber)) || isNaN(+secondNumber) && (operator !== '+' || '-' || '*' || '/' || '%')) {
          this.errormessage = true;
        } else {
          this.errormessage = false;
          if (operator === '+') {
            this.result = parseFloat(firstNumber) + parseFloat(secondNumber);
          }
          //substructure operator
          if (operator === '-') {
            this.result = parseFloat(firstNumber) - parseFloat(secondNumber);
          }
          //multiple operator
          if (operator === '*') {
            this.result = parseFloat(firstNumber) * parseFloat(secondNumber);
          }
          //divide operator
          if (operator === '/') {
            this.result = parseFloat(firstNumber) / parseFloat(secondNumber);
          }
          //percentage operator
          if (operator === '%') {
            this.result = parseFloat(firstNumber) / 100;
          }
          this.results.push({ operation: value || '', result: this.result });
          this.inputControl.setValue(this.result.toString())
        }
        // console.log(this.results)
        break;
      }
    }

    // First value
    // Second value
    // Validation
    // Result
  }
}








