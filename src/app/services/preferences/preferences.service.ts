import { Injectable } from '@angular/core';
import { Formation } from '../../types/formation.type';
import { PlayerTheme } from '../../types/player-theme.type';
import { Storage } from '@capacitor/storage';

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
      const teamAPlayerTheme: PlayerTheme = {
        color: 'blue',
        borderColor: 'white'
      };
      await Storage.set({key: 'team-a-player-theme', value: JSON.stringify(teamAPlayerTheme)});
      const teamBPlayerTheme: PlayerTheme = {
        color: 'red',
        borderColor: 'orange'
      };
      await Storage.set({key: 'team-b-player-theme', value: JSON.stringify(teamBPlayerTheme)});
      await Storage.set({key: 'hasDefaultPreferences', value: 'true'});
    }
  }
}
