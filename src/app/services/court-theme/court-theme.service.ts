import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Theme } from '../../types/theme.type';
import { EventsService } from '../events/events.service';

@Injectable({
  providedIn: 'root'
})
export class CourtThemeService {
  private courtTheme: Array<Theme> = new Array<Theme>();

  constructor(
    private eventsService: EventsService
  ) {
    this.courtTheme.push({cssClass: 'bg-theme-1'});
    this.courtTheme.push({cssClass: 'bg-theme-2'});
    this.courtTheme.push({cssClass: 'bg-theme-3'});
    this.courtTheme.push({cssClass: 'bg-theme-4'});
  }

  getThemes(): Array<Theme> {
    return this.courtTheme;
  }

  async setThemePreferences(courtTheme: Theme) {
    await Storage.set({
      key: 'court-theme',
      value: JSON.stringify(courtTheme)
    });
    this.eventsService.publish('court-theme:changed', true);
  }

  async getThemePreferences(): Promise<Theme> {
    const courtTheme = await Storage.get({
      key: 'court-theme'
    });
    return JSON.parse(courtTheme.value);
  }
}
