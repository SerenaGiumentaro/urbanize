import { Component, OnInit } from '@angular/core';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss'],
})
export class ScoreChartComponent implements OnInit {
  constructor(private cityDataService: CityDataService) {}
  hasData: boolean = false;
  categories: [
    {
      color: string;
      name: string;
      score_out_of_10: number;
    }
  ] = [
    {
      name: '',
      color: '',
      score_out_of_10: 0,
    },
  ];
  chartData!: any;
  options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: .5,
    plugins: {
        legend: {
            labels: {
              usePointStyle: true,
                color: '#353535'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#353535',
                font: {
                    weight: 500
                }
            },
            grid: {
                color: '#656565',
                drawBorder: false
            }
        },
        y: {
            ticks: {
                color: '#353535'
            },
            grid: {
                color: '#656565',
                drawBorder: false
            }
        }
    }
};


  ngOnInit(): void {
    this.cityDataService.data$.subscribe({
      next: (res) => {
        this.categories = [...res.categories];
        this.chartData = {
          labels: this.categories.map((cat) => cat.name),
          datasets: [
            {
              label: 'City Score',
              data: this.categories.map((cat) => cat.score_out_of_10),
              backgroundColor: this.categories.map((cat) => cat.color),
            },
          ],
        };
      },
    });
  }
}




