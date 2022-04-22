import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PreferencesService } from './services/preferences/preferences.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private preferences: PreferencesService,

  ) {
    this.platform.ready().then(async () => {
      await this.preferences.setDefaultPreferences();
    });
  }
}
