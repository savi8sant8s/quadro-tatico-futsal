import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionType } from '../../types/option.type';
import { FormationComponent } from '../formation/formation.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss'],
})
export class OptionsPanelComponent implements OnInit{
  @Input() playerOptions = false;
  options: Array<OptionType> = new Array<OptionType>();

  constructor(
    private modalCtrl: ModalController
  ) {
  }

   ngOnInit() {
    if (this.playerOptions) {
      this.options.push({imageUrl: 'assets/formacao.svg', component: FormationComponent});
      this.options.push({imageUrl: 'assets/ajustes.svg', component: SettingsComponent});
    } else {
      this.options.push({imageUrl: 'assets/salvar.svg', component: null});
      this.options.push({imageUrl: 'assets/mais.svg', component: null});
    }
   }

   async openModal(component: any) {
     const modal = await this.modalCtrl.create({
        component,
     });
      modal.present();
   }
}
