import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent {
  @Input() categories!: [
    {
      color: string;
      name: string;
      score_out_of_10: number;
    }
  ];

  cols: string[] = ['Categories', 'Score'];
}
