import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamId } from 'src/app/enums/team-id.enum';
import { PlayerTheme } from 'src/app/types/player-theme.type';
import { PlayerThemeService } from '../../services/player-theme/player-theme.service';

@Component({
  selector: 'app-player-theme',
  templateUrl: './player-theme.component.html',
  styleUrls: ['./player-theme.component.scss'],
})
export class PlayerThemeComponent {
  playerThemeTeamA: PlayerTheme;
  playerThemeTeamB: PlayerTheme;
  playerThemes: Array<PlayerTheme> = new Array<PlayerTheme>();

  constructor(
    private playerThemeService: PlayerThemeService,
    private modalCtrl: ModalController,
  ) {
   }

  async ionViewWillEnter() {
    this.playerThemes = this.playerThemeService.getPlayerThemes();
    this.playerThemeTeamA = await this.playerThemeService.getPlayerThemePreferences(TeamId.a);
    this.playerThemeTeamB = await this.playerThemeService.getPlayerThemePreferences(TeamId.b);
  }

  async onClose(){
    await this.modalCtrl.dismiss();
  }

  onSelect(team, playerTheme){
    if (team === 'a'){
      this.playerThemeTeamA = playerTheme;
      team = TeamId.a;
    }
    else if (team === 'b'){
      this.playerThemeTeamB = playerTheme;
      team = TeamId.b;
    }
    this.playerThemeService.setPlayerThemePreferences(team, playerTheme);
  }

}
