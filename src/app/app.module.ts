import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HeadingComponent } from './components/heading/heading.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ScoreTableComponent } from './components/score-table/score-table.component';
import { ScoreChartComponent } from './components/score-chart/score-chart.component';
import { SearchComponent } from './components/search/search.component';
// PrimeNg module
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { DataViewComponent } from './components/data-view/data-view.component';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    CityCardComponent,
    ScoreTableComponent,
    ScoreChartComponent,
    SearchComponent,
    DataViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    MessagesModule,
    TableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
