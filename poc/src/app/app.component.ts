import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc';

  constructor(private translateService : TranslateService) {
    this.translateService.setDefaultLang('en')
    this.translateService.use(localStorage.getItem('lang') || 'en')
  }
}
