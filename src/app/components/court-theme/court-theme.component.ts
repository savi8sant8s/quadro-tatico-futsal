import { Component } from '@angular/core';

import { CourtThemeService } from '../../services';
import { Theme } from '../../types';

@Component({
  selector: 'app-court-theme',
  templateUrl: './court-theme.component.html',
  styleUrls: ['./court-theme.component.scss'],
})
export class CourtThemeComponent {
  courtThemes: Theme[] = new Array<Theme>();
  courtThemeSelected: Theme;

  constructor(private courtThemeService: CourtThemeService) {}

  async ionViewWillEnter(): Promise<void> {
    this.courtThemes = this.courtThemeService.getThemes();
    this.courtThemeSelected = await this.courtThemeService.getThemePreferences();
  }

  onSelect(courtTheme: Theme): void {
    this.courtThemeService.setThemePreferences(courtTheme);
    this.courtThemeSelected = courtTheme;
  }
}
