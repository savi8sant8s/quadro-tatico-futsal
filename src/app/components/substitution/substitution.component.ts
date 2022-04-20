import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlayerType } from 'src/app/types/player.type';

@Component({
  selector: 'app-substitution',
  templateUrl: './substitution.component.html',
  styleUrls: ['./substitution.component.scss'],
})
export class SubstitutionComponent implements OnInit {
  players: Array<PlayerType> = new Array<PlayerType>();

  constructor(
    private modal: ModalController
  ) {
    this.players.push({name: 'Jogador 1'});
    this.players.push({name: 'Jogador 2'});
    this.players.push({name: 'Jogador 3'});
    this.players.push({name: 'Jogador 4'});
    this.players.push({name: 'Jogador 5'});
    this.players.push({name: 'Jogador 6'});
    this.players.push({name: 'Jogador 7'});
    this.players.push({name: 'Jogador 8'});
    this.players.push({name: 'Jogador 9'});
    this.players.push({name: 'Jogador 10'});
    this.players.push({name: 'Jogador 11'});
    this.players.push({name: 'Jogador 12'});
  }

  ngOnInit() {}

  async closeModal(){
    await this.modal.dismiss();
  }
  async confirmOption(){
    await this.modal.dismiss();
  }

  soccerEscalation(position){
    return position < 5 ? 'Titular': 'Reserva';
  }
}
