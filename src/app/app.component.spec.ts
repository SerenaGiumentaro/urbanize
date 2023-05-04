import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { SearchComponent } from './components/search/search.component';
import { DataViewComponent } from './components/data-view/data-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeadingComponent, SearchComponent, DataViewComponent
      ],
      imports: [
        HttpClientTestingModule,
        AutoCompleteModule,
        ButtonModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
