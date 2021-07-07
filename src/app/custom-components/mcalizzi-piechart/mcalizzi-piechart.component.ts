import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart, Point } from "chart.js/dist/chart";

@Component({
  selector: 'mcalizzi-piechart',
  templateUrl: './mcalizzi-piechart.component.html',
  styleUrls: ['./mcalizzi-piechart.component.css']
})

export class McalizziPiechartComponent implements AfterViewInit {
  _data
  @Input('cr-data')
  set data(data) {
    this._data = data
    if(this.chart) {
      this.chart.data.labels = data.xvalues
      this.chart.data.datasets[0].data = data.yvalues 
      this.chart.update()
    } 
  }
  get data() {
    return this._data
  }

  @ViewChild('chart')
  private chartRef: ElementRef;
  private chart: Chart;

  private colors = ["#d9534f","#0275d8","#5cb85c","#5bc0de","#f0ad4e","#292b2c","#f7f7f7"]

  constructor() {
    console.log(this.data)
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "pie",
      data: {
        labels: this.data.xvalues,
        datasets: [{
          backgroundColor: this.colors,
          label: "money",
          data: this.data.yvalues,
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          },
          tooltip: {
            callbacks: {
              title: context => '',
              label: context => context.formattedValue + '%',
            }
          }
        }
      }
    });
  }
}