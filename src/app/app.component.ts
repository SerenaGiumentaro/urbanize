import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'urbanize';

  hasData: boolean = true;

  checkDataAfterSubmit(hasData: boolean) {
    this.hasData = hasData;
  }
}
