import { Injectable } from '@angular/core';
import { TeamId } from 'src/app/enums/team-id.enum';
import { Storage } from '@capacitor/storage';
import { EventsService } from '../events/events.service';
import { Theme } from 'src/app/types/theme.type';

@Injectable({
  providedIn: 'root'
})
export class PlayerThemeService {
  private playerThemes: Array<Theme> = new Array<Theme>();

  constructor(
    private eventsService: EventsService
  ) {
    this.playerThemes.push({color: 'blue',   borderColor: 'white'});
    this.playerThemes.push({color: 'red',   borderColor: 'orange'});
    this.playerThemes.push({color: 'yellow',   borderColor: 'black'});
    this.playerThemes.push({color: 'green',   borderColor: 'purple'});
  }

  getPlayerThemes(): Array<Theme> {
    return this.playerThemes;
  }

  async setPlayerThemePreferences(team: TeamId, playerTheme: Theme) {
    await Storage.set({
      key: this.getKeyName(team),
      value: JSON.stringify(playerTheme)
    });
    this.eventsService.publish('player-theme:changed', true);
  }

  async getPlayerThemePreferences(team: TeamId): Promise<Theme> {
    const playerTheme = await Storage.get({
      key: this.getKeyName(team)
    });
    return JSON.parse(playerTheme.value);
  }

  getKeyName(team: TeamId): string {
    return `${team}-player-theme`;
  }
}
