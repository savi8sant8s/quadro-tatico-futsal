import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PlayerPosition } from '../types/player-position.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  width: number;
  height: number;
  team1: Array<PlayerPosition> = new Array<PlayerPosition>();
  team2: Array<PlayerPosition> = new Array<PlayerPosition>();

  constructor(
    private platform: Platform,
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
}
