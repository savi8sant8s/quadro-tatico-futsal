import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CourtThemeComponent, FormationComponent, MoreComponent, PlayerThemeComponent } from '../../components';
import { Option } from '../../types';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() playerOptions = false;
  options: Option[] = new Array<Option>();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.options.push({ imageUrl: 'assets/options/formation.svg', component: FormationComponent });
    this.options.push({ imageUrl: 'assets/options/player.svg', component: PlayerThemeComponent });
    this.options.push({ imageUrl: 'assets/options/court.svg', component: CourtThemeComponent });
    this.options.push({ imageUrl: 'assets/options/more.svg', component: MoreComponent });
  }

  async onOpenModal(component: any): Promise<void> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass: 'panel-modal',
    });
    modal.present();
  }
}
