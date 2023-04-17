import { Component, Input, OnInit } from '@angular/core';
import { CityDataService } from 'src/app/services/city-data.service';

@Component({
  selector: 'app-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss'],
})
export class ScoreChartComponent implements OnInit{
  constructor(private cityDataService: CityDataService){}
  hasData :boolean = false
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

    ngOnInit(): void {
      this.cityDataService.data$.subscribe({
        next: res => {
          this.categories = [...res.categories]
          if(this.categories.length > 2){
            this.hasData = true
          }else {
            this.hasData = false
          }
          this.chartData = {
            labels: this.categories.map((cat) => cat.name),
            datasets: [
              {
                label: 'Score',
                data: this.categories.map((cat) => cat.score_out_of_10),
                backgroundColor: this.categories.map((cat) => cat.color),
              },
            ],
          };
        }
      })


    }

}
