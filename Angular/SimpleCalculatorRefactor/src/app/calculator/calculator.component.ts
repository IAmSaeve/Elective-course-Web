import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  result: number;

  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
  }

  Add() { this.result = this.number1 + this.number2; }
  Sub() { this.result = this.number1 - this.number2; }
  Div() { this.result = this.number1 / this.number2; }
  Mul() { this.result = this.number1 * this.number2; }

  ngOnInit() {
  }

}
