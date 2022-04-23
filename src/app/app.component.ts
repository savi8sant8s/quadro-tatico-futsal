import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { PreferencesService } from './services/preferences/preferences.service';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private preferences: PreferencesService,
    private modalCtrl: ModalController

  ) {
    this.platform.ready().then(async () => {
      SplashScreen.hide({fadeOutDuration: 0});
      await this.preferences.setDefaultPreferences();
      this.backButtonEvent();
    });
  }

  backButtonEvent() {
    App.addListener('backButton', async () => {
      const openedModal = await this.modalCtrl.getTop();
      if (!openedModal) {
        App.exitApp();
      }
    });
  }
}
