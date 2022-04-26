import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CourtThemeComponent, FormationComponent, MoreComponent, PlayerThemeComponent } from '../../components';
import { Option } from '../../types';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  options: Option[] = new Array<Option>();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.options.push({ name: 'easel-outline', component: FormationComponent });
    this.options.push({ name: 'football-outline', component: PlayerThemeComponent });
    this.options.push({ name: 'color-palette-outline', component: CourtThemeComponent });
    this.options.push({ name: 'ellipsis-horizontal-circle-outline', component: MoreComponent });
  }

  async onOpenModal(component: any): Promise<void> {
    const modal = await this.modalCtrl.create({
      component,
    });
    modal.present();
  }
}
