import { McalizziFormComponent } from './../custom-components/mcalizzi-form/mcalizzi-form.component';
import { Directive, ElementRef, ViewChild, AfterContentInit, ContentChild, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[propogate]'
})
export class PropogateDirective implements AfterContentInit, AfterViewInit{
  constructor(private ref:ElementRef<any>) { }
  @ContentChild('hello') component
  @ViewChild('hello') component2
  ngAfterContentInit() {
    console.log(this.component)
    console.log(this.component2)
  }
  ngAfterViewInit() {
    console.log(this.component)
    console.log(this.component2)
  }
}
