import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label, Colors } from 'ng2-charts';
import { ChartOptions, ChartAnimationOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: SingleDataSet = [350, 450, 100];
  public backgroundColor: Colors[] = [{
    backgroundColor: [
      '#01a3ff',
      '#33b5ff',
      '#66c7ff',
      '#99daff',
      '#ccecff',
      '#ffffff']
  }];
  public options: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 2000
    },
    onClick: (event, active) => { this.chartClicked({ event, active }); }
  };

  constructor() {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  ngOnInit(): void {
  }
}
