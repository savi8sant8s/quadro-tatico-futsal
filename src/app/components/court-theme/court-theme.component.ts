import { Component } from '@angular/core';
import { Theme } from '../../types/theme.type';
import { CourtThemeService } from '../../services/court-theme/court-theme.service';

@Component({
  selector: 'app-court-theme',
  templateUrl: './court-theme.component.html',
  styleUrls: ['./court-theme.component.scss'],
})
export class CourtThemeComponent {
  courtThemes: Array<Theme> = new Array<Theme>();
  courtThemeSelected: Theme;

  constructor(
    private courtThemeService: CourtThemeService
  ) {
   }

  async ionViewWillEnter() {
    this.courtThemes = this.courtThemeService.getThemes();
    this.courtThemeSelected = await this.courtThemeService.getThemePreferences();
  }

  onSelect(courtTheme: Theme){
    this.courtThemeService.setThemePreferences(courtTheme);
    this.courtThemeSelected = courtTheme;
  }

}
