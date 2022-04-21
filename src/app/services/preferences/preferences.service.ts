import { Injectable } from '@angular/core';
import { Formation } from '../../types/formation.type';
import { Theme } from '../../types/theme.type';
import { Storage } from '@capacitor/storage';
import { TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(
    private translateService: TranslateService
  ) { }

  async setDefaultPreferences() {
    const { value: hasDefaultPreferences } = await Storage.get({ key: 'hasDefaultPreferences' });
    if (!hasDefaultPreferences) {
      await this.setDefaultFormations();
      await this.setDefaultThemes();

      this.translateService.addLangs(['pt-br', 'en', 'es']);

      await Storage.set({key: 'hasDefaultPreferences', value: 'true'});
    }
  }

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
      cssClass: 'player-theme-1',
    };
    await Storage.set({key: 'team-a-player-theme', value: JSON.stringify(teamAPlayerTheme)});
    const teamBPlayerTheme: Theme = {
      cssClass: 'player-theme-2',
    };
    await Storage.set({key: 'team-b-player-theme', value: JSON.stringify(teamBPlayerTheme)});
    const courtTheme: Theme = {
      cssClass: 'bg-theme-1',
    };
    await Storage.set({key: 'court-theme', value: JSON.stringify(courtTheme)});
  }
}
