import { BackendRequestService } from '../../../reusable/services/backend-request.service';
import { CurrencyLettersPipe } from '../../../reusable/pipes/currency-letters.pipe';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor(
    public currencyLetters: CurrencyLettersPipe,
    private http: BackendRequestService
  ) {}

  startAge;
  endAge;
  age;
  c;
  loaded=false;

  async ngOnInit() {
    this.c = await this.http.get('forms/computed/summary');
    this.startAge = this.c.dataOverTime.xvalues[1];
    this.endAge = this.c.dataOverTime.xvalues.slice(-1)[0];
    this.age = this.startAge;
    this.loaded=true
  }
}
