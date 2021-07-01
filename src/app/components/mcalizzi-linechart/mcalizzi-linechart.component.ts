import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart, Point } from "chart.js/dist/chart";

@Component({
  selector: 'mcalizzi-linechart',
  templateUrl: './mcalizzi-linechart.component.html',
  styleUrls: ['./mcalizzi-linechart.component.css']
})

export class McalizziLinechartComponent implements AfterViewInit {
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

  private colors = ["#0275d8","#5cb85c","#5bc0de","#f0ad4e","#d9534f","#292b2c","#f7f7f7"]

  constructor() {
    console.log(this.data)
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      mainColor: this.colors[0],
      type: "line",
      data: {
        labels: this.data.xvalues,
        datasets: [{
          label: "money",
          data: this.data.yvalues,
          borderColor: this.colors[0],
          fill: true,
          pointHoverRadius: 0,
          pointRadius: 0,
          pointHitRadius: 500,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: context => '',
              label: context => '$' + context.formattedValue,
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'your age (years)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'total wealth (dollars)'
            },
            ticks: {
              callback: function(value, index, values) {
                return '$' + value
              }
            }
          }
        }
      }
    });
  }
}