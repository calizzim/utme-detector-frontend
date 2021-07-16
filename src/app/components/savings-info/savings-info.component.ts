import { CurrencyLettersPipe } from './../../pipes/currency-letters.pipe';
import { BackendRequestService } from './../../services/backend-request.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'savings-info',
  templateUrl: './savings-info.component.html',
  styleUrls: ['./savings-info.component.css']
})

export class SavingsInfoComponent {
  constructor(
    private http:BackendRequestService,
    public currencyLetters: CurrencyLettersPipe) { }
  @Output() formSubmitted:EventEmitter<any> = new EventEmitter()

  collapsed = true
  templateName = 'salaryInfo'
  dataCalculated = false
  c
  startAge
  endAge
  age

  submitForm(data) {
    this.c = data
    this.startAge = this.c.netWorthChart.xvalues[1]
    this.endAge = this.c.netWorthChart.xvalues.slice(-1)[0]
    this.age = this.startAge
    this.formSubmitted.emit()
    this.dataCalculated = true
  }
}

