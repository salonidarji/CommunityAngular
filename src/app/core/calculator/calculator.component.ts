import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  no1 ;
  no2 ;
  ans;
  arr: Calculator[] = [

    new Calculator(1, 1, 2),
    new Calculator(2, 2, 4)
  ];
  constructor() { }

  ngOnInit() {

  }

  onClick() {
 this.ans  = this.no1 + this.no2;
 this.arr.push(new Calculator(this.no1 ,this.no2 , this.ans));
 this.no1 = '';
 this.no2 = '';
 this.ans = '';
  }

  onDelete(item) {
    this.arr.splice(this.arr.indexOf(item), 1);
  }
}
