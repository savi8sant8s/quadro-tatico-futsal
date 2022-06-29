import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CourtThemeComponent, FormationComponent, MoreComponent, PlayerThemeComponent } from '../../components';
import { Option } from '../../types';
import html2canvas from 'html2canvas';
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
    this.options.push({ name: 'person-outline', component: PlayerThemeComponent });
    this.options.push({ name: 'color-palette-outline', component: CourtThemeComponent });
    this.options.push({ name: 'save-outline', component: 'save-image' });
    this.options.push({ name: 'ellipsis-horizontal-circle-outline', component: MoreComponent });
  }

  async onOpenModal(component: any): Promise<void> {
    if (component === 'save-image'){
      this.saveImage();
    } else {
      const modal = await this.modalCtrl.create({
        component,
      });
      modal.present();
    }
  }

  saveImage(): void {
    const court = document.getElementById('court');
    html2canvas(court).then((canvas)=> {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'quadro-tático-de-futsal.png';
        link.click();
      });
    });
  }
}
