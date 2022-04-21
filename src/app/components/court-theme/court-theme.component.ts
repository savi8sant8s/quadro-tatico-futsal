import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IClose } from 'src/app/interfaces/close.interface';
import { ISelect } from 'src/app/interfaces/select.interface';
import { Theme } from 'src/app/types/theme.type';
import { CourtThemeService } from '../../services/court-theme/court-theme.service';

@Component({
  selector: 'app-court-theme',
  templateUrl: './court-theme.component.html',
  styleUrls: ['./court-theme.component.scss'],
})
export class CourtThemeComponent implements IClose, ISelect{
  courtThemes: Array<Theme> = new Array<Theme>();
  courtThemeSelected: Theme;

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

  onSelect(courtTheme: Theme){
    this.courtThemeService.setThemePreferences(courtTheme);
    this.courtThemeSelected = courtTheme;
  }

}
