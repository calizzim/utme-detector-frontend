import { BackendRequestService } from './../../services/backend-request.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-budget-tool',
  templateUrl: './budget-tool.component.html',
  styleUrls: ['./budget-tool.component.css']
})
export class BudgetToolComponent implements AfterViewInit {
  @ViewChild('chart') chartRef:ElementRef
  private chart:Chart
  constructor(private http:BackendRequestService) { }
  templateName = 'salaryInfo'
  template = this.http.templates[this.templateName]
  computedData
  ngAfterViewInit():void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
    console.log(this.chart)
  }
  async submitForm(data) {
    this.computedData = await this.http.uploadForm(data,this.templateName)
  }
}
