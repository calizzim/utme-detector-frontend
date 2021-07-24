import { CurrencyLettersPipe } from '../../../reusable/pipes/currency-letters.pipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent implements OnInit {
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
