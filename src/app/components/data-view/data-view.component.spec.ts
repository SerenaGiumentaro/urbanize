import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataViewComponent } from './data-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CityCardComponent } from '../city-card/city-card.component';
import { ScoreChartComponent } from '../score-chart/score-chart.component';
import { ScoreTableComponent } from '../score-table/score-table.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

describe('DataViewComponent', () => {
  let component: DataViewComponent;
  let fixture: ComponentFixture<DataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataViewComponent, CityCardComponent, ScoreChartComponent, ScoreTableComponent],
      imports: [
        HttpClientTestingModule,
        TableModule,
        ChartModule,
        CardModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
