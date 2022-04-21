import { Injectable } from '@angular/core';
import { Formation } from '../../types/formation.type';
import { Theme } from '../../types/theme.type';
import { Storage } from '@capacitor/storage';
import { CourtTheme } from 'src/app/types/court-theme.type';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor() { }

  async setDefaultPreferences() {
    const { value: hasDefaultPreferences } = await Storage.get({ key: 'hasDefaultPreferences' });
    if (!hasDefaultPreferences) {
      const teamAFormation: Formation = {
        name: '1-2-2',
        imageUrl: 'assets/1-2-2.svg',
      };
      await Storage.set({key: 'team-a-formation', value: JSON.stringify(teamAFormation)});
      const teamBFormation: Formation = {
        name: '1-2-2',
        imageUrl: 'assets/1-2-2.svg',
      };
      await Storage.set({key: 'team-b-formation', value: JSON.stringify(teamBFormation)});
      const teamAPlayerTheme: Theme = {
        color: 'blue',
        borderColor: 'white'
      };
      await Storage.set({key: 'team-a-player-theme', value: JSON.stringify(teamAPlayerTheme)});
      const teamBPlayerTheme: Theme = {
        color: 'red',
        borderColor: 'orange'
      };
      await Storage.set({key: 'team-b-player-theme', value: JSON.stringify(teamBPlayerTheme)});
      const courtTheme: CourtTheme = {
        cssClass: 'court-theme-1',
      };
      await Storage.set({key: 'court-theme', value: JSON.stringify(courtTheme)});
      await Storage.set({key: 'hasDefaultPreferences', value: 'true'});
    }
  }
}
