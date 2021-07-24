import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.css']
})
export class OtherInfoComponent implements OnInit {
  @Output() formSubmitted:EventEmitter<any> = new EventEmitter()
  constructor() { }
  ngOnInit(): void {
  }
  submitForm(data) {
    this.formSubmitted.emit()
  }

}
