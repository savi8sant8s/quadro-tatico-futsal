import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Option } from '../../types/option.type';
import { CourtThemeComponent } from '../court-theme/court-theme.component';
import { FormationComponent } from '../formation/formation.component';
import { MoreComponent } from '../more/more.component';
import { PlayerThemeComponent } from '../player-theme/player-theme.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit{
  @Input() playerOptions = false;
  options: Array<Option> = new Array<Option>();

  constructor(
    private modalCtrl: ModalController
  ) {
  }

   ngOnInit() {
      this.options.push({imageUrl: 'assets/options/formation.png', component: FormationComponent});
      this.options.push({imageUrl: 'assets/options/player.png', component: PlayerThemeComponent});
      this.options.push({imageUrl: 'assets/options/court.png', component: CourtThemeComponent});
      this.options.push({imageUrl: 'assets/options/more.png', component: MoreComponent});
   }

   async onOpenModal(component: any) {
     const modal = await this.modalCtrl.create({
        component,
     });
      modal.present();
   }
}
