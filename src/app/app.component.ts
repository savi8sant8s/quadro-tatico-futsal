import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';
import { ModalController, Platform } from '@ionic/angular';
import { PreferencesService } from './services';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private preferences: PreferencesService, private modalCtrl: ModalController) {
    this.platform.ready().then(async () => {
      await this.preferences.setDefaultPreferences();
      SplashScreen.hide({ fadeOutDuration: 0 });
      this.backButtonEvent();
      window.screen.orientation.lock('portrait');
    });
  }

  backButtonEvent(): void {
    App.addListener('backButton', async () => {
      const openedModal = await this.modalCtrl.getTop();
      if (!openedModal) {
        App.exitApp();
      }
    });
  }
}
