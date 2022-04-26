import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-back-modal',
  templateUrl: './back-modal.component.html',
  styleUrls: ['./back-modal.component.scss'],
})
export class BackModalComponent {
  constructor(private modalCtrl: ModalController) {}

  async onClose(): Promise<void> {
    await this.modalCtrl.dismiss();
  }
}
