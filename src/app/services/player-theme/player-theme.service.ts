import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

import { TeamId } from '../../enums';
import { Theme } from '../../types';
import { EventsService } from '../events/events.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerThemeService {
  private playerThemes: Theme[] = new Array<Theme>();

  constructor(private eventsService: EventsService) {
    this.playerThemes.push({ cssClass: 'player-theme-1' });
    this.playerThemes.push({ cssClass: 'player-theme-2' });
    this.playerThemes.push({ cssClass: 'player-theme-3' });
    this.playerThemes.push({ cssClass: 'player-theme-4' });
  }

  getPlayerThemes(): Theme[] {
    return this.playerThemes;
  }

  async setPlayerThemePreferences(team: TeamId, playerTheme: Theme): Promise<void> {
    await Storage.set({
      key: this.getKeyName(team),
      value: JSON.stringify(playerTheme),
    });
    this.eventsService.publish('player-theme:changed', true);
  }

  async getPlayerThemePreferences(team: TeamId): Promise<Theme> {
    const playerTheme = await Storage.get({
      key: this.getKeyName(team),
    });
    return JSON.parse(playerTheme.value);
  }

  getKeyName(team: TeamId): string {
    return `${team}-player-theme`;
  }
}
