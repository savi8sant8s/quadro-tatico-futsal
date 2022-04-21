import { Injectable } from '@angular/core';
import { TeamId } from 'src/app/enums/team-id.enum';
import { Theme } from 'src/app/types/theme.type';
import { Storage } from '@capacitor/storage';
import { EventsService } from '../events/events.service';

@Injectable({
  providedIn: 'root'
})
export class FieldThemeService {
  private fieldThemes: Array<Theme> = new Array<Theme>();

  constructor(
    private eventsService: EventsService
  ) {
    this.fieldThemes.push({color: 'blue',   borderColor: 'white'});
    this.fieldThemes.push({color: 'red',   borderColor: 'orange'});
    this.fieldThemes.push({color: 'yellow',   borderColor: 'black'});
    this.fieldThemes.push({color: 'green',   borderColor: 'purple'});
  }

  getThemes(): Array<Theme> {
    return this.fieldThemes;
  }

  async setThemePreferences(fieldTheme: Theme) {
    await Storage.set({
      key: 'field-theme',
      value: JSON.stringify(fieldTheme)
    });
    this.eventsService.publish('field-theme:changed', true);
  }

  async getThemePreferences(): Promise<Theme> {
    const fieldTheme = await Storage.get({
      key: 'field-theme'
    });
    return JSON.parse(fieldTheme.value);
  }
}
