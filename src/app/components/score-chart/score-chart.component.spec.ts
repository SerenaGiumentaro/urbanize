import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreChartComponent } from './score-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartModule } from 'primeng/chart';

describe('ScoreChartComponent', () => {
  let component: ScoreChartComponent;
  let fixture: ComponentFixture<ScoreChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreChartComponent ],
      imports: [
        HttpClientTestingModule,
        ChartModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
