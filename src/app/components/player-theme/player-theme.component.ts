import { Component } from '@angular/core';
import { TeamId } from '../../enums/team-id.enum';
import { Theme } from '../../types/theme.type';
import { PlayerThemeService } from '../../services/player-theme/player-theme.service';

@Component({
  selector: 'app-player-theme',
  templateUrl: './player-theme.component.html',
  styleUrls: ['./player-theme.component.scss'],
})
export class PlayerThemeComponent{
  playerThemeTeamA: Theme;
  playerThemeTeamB: Theme;
  playerThemes: Array<Theme> = new Array<Theme>();

  constructor(
    private playerThemeService: PlayerThemeService
  ) {
   }

  async ionViewWillEnter() {
    this.playerThemes = this.playerThemeService.getPlayerThemes();
    this.playerThemeTeamA = await this.playerThemeService.getPlayerThemePreferences(TeamId.a);
    this.playerThemeTeamB = await this.playerThemeService.getPlayerThemePreferences(TeamId.b);
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
