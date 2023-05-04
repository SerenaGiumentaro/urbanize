import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTableComponent } from './score-table.component';
import { TableModule } from 'primeng/table';

describe('ScoreTableComponent', () => {
  let component: ScoreTableComponent;
  let fixture: ComponentFixture<ScoreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreTableComponent ],
      imports: [
        TableModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
