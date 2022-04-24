import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';

import { Formation, Theme } from '../../types';
import { LanguagesService } from '../languages/languages.service';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  constructor(private translateService: TranslateService, private languagesService: LanguagesService) {}

  async setDefaultPreferences(): Promise<void> {
    const { value: firstAccess } = await Storage.get({ key: 'first-access' });
    const { value: language } = await Storage.get({ key: 'language' });

    await this.languagesService.setCurrentLanguage(language ? language : 'pt-br');

    if (!firstAccess) {
      await this.setDefaultFormations();
      await this.setDefaultThemes();
      await Storage.set({ key: 'first-access', value: 'true' });
    }

    this.translateService.addLangs(this.languagesService.getLanguagesCodes());
  }

  async setDefaultFormations(): Promise<void> {
    const teamAFormation: Formation = {
      name: '1-2-2',
      imageUrl: 'assets/formation/1-2-2.svg',
    };
    await Storage.set({ key: 'team-a-formation', value: JSON.stringify(teamAFormation) });
    const teamBFormation: Formation = {
      name: '1-2-2',
      imageUrl: 'assets/formation/1-2-2.svg',
    };
    await Storage.set({ key: 'team-b-formation', value: JSON.stringify(teamBFormation) });
  }

  async setDefaultThemes(): Promise<void> {
    const teamAPlayerTheme: Theme = {
      cssClass: 'player-theme-2',
    };
    await Storage.set({ key: 'team-a-player-theme', value: JSON.stringify(teamAPlayerTheme) });
    const teamBPlayerTheme: Theme = {
      cssClass: 'player-theme-3',
    };
    await Storage.set({ key: 'team-b-player-theme', value: JSON.stringify(teamBPlayerTheme) });
    const courtTheme: Theme = {
      cssClass: 'bg-theme-1',
    };
    await Storage.set({ key: 'court-theme', value: JSON.stringify(courtTheme) });
  }
}
