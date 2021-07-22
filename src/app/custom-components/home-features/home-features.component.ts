import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.css']
})
export class HomeFeaturesComponent implements OnInit {
  @Input('cr-features') features

  constructor() { }

  ngOnInit(): void {
  }

}
