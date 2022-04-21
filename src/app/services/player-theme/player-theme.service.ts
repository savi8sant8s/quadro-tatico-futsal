import { Injectable } from '@angular/core';
import { TeamId } from 'src/app/enums/team-id.enum';
import { PlayerTheme } from 'src/app/types/player-theme.type';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class PlayerThemeService {
  private playerThemes: Array<PlayerTheme> = new Array<PlayerTheme>();

  constructor() {
    this.playerThemes.push({color: 'blue',   borderColor: 'white'});
    this.playerThemes.push({color: 'red',   borderColor: 'orange'});
    this.playerThemes.push({color: 'yellow',   borderColor: 'black'});
    this.playerThemes.push({color: 'green',   borderColor: 'purple'});
  }

  getPlayerThemes(): Array<PlayerTheme> {
    return this.playerThemes;
  }

  async setPlayerThemePreferences(team: TeamId, playerTheme: PlayerTheme) {
    await Storage.set({
      key: this.getKeyName(team),
      value: JSON.stringify(playerTheme)
    });
  }

  async getPlayerThemePreferences(team: TeamId): Promise<PlayerTheme> {
    const playerTheme = await Storage.get({
      key: this.getKeyName(team)
    });
    return JSON.parse(playerTheme.value);
  }

  getKeyName(team: TeamId): string {
    return `${team}-player-theme`;
  }
}
