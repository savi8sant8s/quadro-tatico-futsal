import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Option } from '../../types/option.type';
import { FormationComponent } from '../formation/formation.component';
import { PlayerThemeComponent } from '../player-theme/player-theme.component';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss'],
})
export class OptionsPanelComponent implements OnInit{
  @Input() playerOptions = false;
  options: Array<Option> = new Array<Option>();

  constructor(
    private modalCtrl: ModalController
  ) {
  }

   ngOnInit() {
    if (this.playerOptions) {
      this.options.push({imageUrl: 'assets/formacao.svg', component: FormationComponent});
      this.options.push({imageUrl: 'assets/ajustes.svg', component: PlayerThemeComponent});
    } else {
      this.options.push({imageUrl: 'assets/quadra.svg', component: null});
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
