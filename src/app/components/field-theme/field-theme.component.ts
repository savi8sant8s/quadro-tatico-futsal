import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FieldThemeService } from 'src/app/services/field-theme/field-theme.service';
import { Theme } from 'src/app/types/theme.type';

@Component({
  selector: 'app-field-theme',
  templateUrl: './field-theme.component.html',
  styleUrls: ['./field-theme.component.scss'],
})
export class FieldThemeComponent {
  fieldThemes: Array<Theme> = new Array<Theme>();
  fieldThemeSelected: Theme;

  constructor(
    private fieldThemeService: FieldThemeService,
    private modalCtrl: ModalController,
  ) {
   }

  async ionViewWillEnter() {
    this.fieldThemes = this.fieldThemeService.getThemes();
    this.fieldThemeSelected = await this.fieldThemeService.getThemePreferences();
  }

  async onClose(){
    await this.modalCtrl.dismiss();
  }

  onSelect(fieldTheme){
    this.fieldThemeService.setThemePreferences(fieldTheme);
    this.fieldThemeSelected = fieldTheme;
  }

}
