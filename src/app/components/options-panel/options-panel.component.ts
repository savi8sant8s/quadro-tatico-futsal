import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionsType } from '../../types/options.type';
import { FormationComponent } from '../formation/formation.component';
import { SettingsComponent } from '../settings/settings.component';
import { SubstitutionComponent } from '../substitution/substitution.component';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss'],
})
export class OptionsPanelComponent {
  options: Array<OptionsType> = new Array<OptionsType>();

  constructor(
    private modalCtrl: ModalController
  ) {
    this.options.push({imageUrl: 'assets/formacao.svg', component: FormationComponent});
    this.options.push({imageUrl: 'assets/substituicao.svg', component: SubstitutionComponent});
    this.options.push({imageUrl: 'assets/ajustes.svg', component: SettingsComponent});
   }

   async openModal(component: any) {
     const modal = await this.modalCtrl.create({
        component,
     });
      modal.present();
   }
}
