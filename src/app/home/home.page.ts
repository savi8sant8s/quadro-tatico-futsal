import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { FormationComponent } from '../components/formation/formation.component';
import { PlayerType } from '../types/player.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  width: number;
  height: number;
  team1: Array<PlayerType> = new Array<PlayerType>();
  team2: Array<PlayerType> = new Array<PlayerType>();

  constructor(
    private platform: Platform,
    private modal: ModalController
  ) {
    this.platform.ready().then(() => {
      this.width = this.platform.width();
      this.height = this.platform.height();
      this.setTeams();
    });
  }

  setTeams() {
    this.team1.push({ x: this.width * 0.5, y: this.height * 0.8 });
    this.team1.push({ x: this.width * 0.25, y: this.height * 0.75 });
    this.team1.push({ x: this.width * 0.75, y: this.height * 0.75});
    this.team1.push({ x: this.width * 0.5, y: this.height * 0.7 });
    this.team1.push({ x: this.width * 0.5, y: this.height * 0.6 });
    this.team2.push({ x: this.width * 0.5, y: this.height * 0.2 });
    this.team2.push({ x: this.width * 0.25, y: this.height * 0.35 });
    this.team2.push({ x: this.width * 0.75, y: this.height * 0.35});
    this.team2.push({ x: this.width * 0.5, y: this.height * 0.3 });
    this.team2.push({ x: this.width * 0.5, y: this.height * 0.4 });
  }

  async ionViewWillEnter(){
    const modal = await this.modal.create({
      component: FormationComponent,
    });
    modal.present();
  }
}
