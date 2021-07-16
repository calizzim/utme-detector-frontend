import { CurrencyLettersPipe } from './../../pipes/currency-letters.pipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  @Output() formSubmitted:EventEmitter<any> = new EventEmitter()
  constructor(public currencyLetters:CurrencyLettersPipe) { }

  ngOnInit(): void {
  }

  startAge
  endAge
  age

  c
  submitForm(data) {
    this.c = data
    this.startAge = this.c.dataOverTime.xvalues[1]
    this.endAge = this.c.dataOverTime.xvalues.slice(-1)[0]
    this.age = this.startAge
    this.formSubmitted.emit()
  }
}
