import { Injectable } from '@angular/core';
import { Formation } from '../../types/formation.type';
import { Theme } from '../../types/theme.type';
import { Storage } from '@capacitor/storage';
import { TranslateService} from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { LanguagesService } from '../languages/languages.service';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(
    private translateService: TranslateService,
    private modalCtrl: ModalController,
    private languagesService: LanguagesService
  ) { }

  async setDefaultPreferences() {
    const { value: hasDefaultPreferences } = await Storage.get({ key: 'hasDefaultPreferences' });
    const { value: acceptedUseTerms } = await Storage.get({key: 'acceptedTerms'});
    const { value: language } = await Storage.get({key: 'language'});

    await this.languagesService.setCurrentLanguage(language ? language : 'pt-br');

    if (!acceptedUseTerms){
      this.showWelcomeModal();
    }

    if (!hasDefaultPreferences) {
      await this.setDefaultFormations();
      await this.setDefaultThemes();
      await Storage.set({key: 'hasDefaultPreferences', value: 'true'});
    }

    this.translateService.addLangs(this.languagesService.getLanguagesCodes());
  }

  async showWelcomeModal(){
    const modal = await this.modalCtrl.create({
      component: WelcomeComponent,
      cssClass: 'welcome-modal',
      backdropDismiss: false,
    });
    modal.present();
  };

  async setDefaultFormations(){
    const teamAFormation: Formation = {
      name: '1-2-2',
      imageUrl: 'assets/formation/1-2-2.svg',
    };
    await Storage.set({key: 'team-a-formation', value: JSON.stringify(teamAFormation)});
    const teamBFormation: Formation = {
      name: '1-2-2',
      imageUrl: 'assets/formation/1-2-2.svg',
    };
    await Storage.set({key: 'team-b-formation', value: JSON.stringify(teamBFormation)});
  }

  async setDefaultThemes(){
    const teamAPlayerTheme: Theme = {
      cssClass: 'player-theme-2',
    };
    await Storage.set({key: 'team-a-player-theme', value: JSON.stringify(teamAPlayerTheme)});
    const teamBPlayerTheme: Theme = {
      cssClass: 'player-theme-3',
    };
    await Storage.set({key: 'team-b-player-theme', value: JSON.stringify(teamBPlayerTheme)});
    const courtTheme: Theme = {
      cssClass: 'bg-theme-1',
    };
    await Storage.set({key: 'court-theme', value: JSON.stringify(courtTheme)});
  }
}
