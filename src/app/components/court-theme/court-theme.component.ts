import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CourtTheme } from 'src/app/types/court-theme.type';
import { CourtThemeService } from '../../services/court-theme/court-theme.service';

@Component({
  selector: 'app-court-theme',
  templateUrl: './court-theme.component.html',
  styleUrls: ['./court-theme.component.scss'],
})
export class CourtThemeComponent {
  courtThemes: Array<CourtTheme> = new Array<CourtTheme>();
  courtThemeSelected: CourtTheme;

  constructor(
    private courtThemeService: CourtThemeService,
    private modalCtrl: ModalController,
  ) {
   }

  async ionViewWillEnter() {
    this.courtThemes = this.courtThemeService.getThemes();
    this.courtThemeSelected = await this.courtThemeService.getThemePreferences();
  }

  async onClose(){
    await this.modalCtrl.dismiss();
  }

  onSelect(courtTheme: CourtTheme){
    this.courtThemeService.setThemePreferences(courtTheme);
    this.courtThemeSelected = courtTheme;
  }

}
