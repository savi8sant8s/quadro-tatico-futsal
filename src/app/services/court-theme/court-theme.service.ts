import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { EventsService } from '../events/events.service';
import { CourtTheme } from '../../types/court-theme.type';

@Injectable({
  providedIn: 'root'
})
export class CourtThemeService {
  private courtTheme: Array<CourtTheme> = new Array<CourtTheme>();

  constructor(
    private eventsService: EventsService
  ) {
    this.courtTheme.push({cssClass: 'court-theme-1'});
    this.courtTheme.push({cssClass: 'court-theme-2'});
    this.courtTheme.push({cssClass: 'court-theme-3'});
    this.courtTheme.push({cssClass: 'court-theme-4'});
  }

  getThemes(): Array<CourtTheme> {
    return this.courtTheme;
  }

  async setThemePreferences(courtTheme: CourtTheme) {
    await Storage.set({
      key: 'court-theme',
      value: JSON.stringify(courtTheme)
    });
    this.eventsService.publish('court-theme:changed', true);
  }

  async getThemePreferences(): Promise<CourtTheme> {
    const courtTheme = await Storage.get({
      key: 'court-theme'
    });
    return JSON.parse(courtTheme.value);
  }
}
