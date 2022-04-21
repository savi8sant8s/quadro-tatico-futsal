import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamId } from 'src/app/enums/team-id.enum';
import { IClose } from 'src/app/interfaces/close.interface';
import { ISelect } from 'src/app/interfaces/select.interface';
import { Theme } from 'src/app/types/theme.type';
import { PlayerThemeService } from '../../services/player-theme/player-theme.service';

@Component({
  selector: 'app-player-theme',
  templateUrl: './player-theme.component.html',
  styleUrls: ['./player-theme.component.scss'],
})
export class PlayerThemeComponent implements IClose, ISelect{
  playerThemeTeamA: Theme;
  playerThemeTeamB: Theme;
  playerThemes: Array<Theme> = new Array<Theme>();

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
