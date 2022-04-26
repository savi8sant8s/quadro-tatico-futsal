import { Component } from '@angular/core';

import { TeamId } from '../../enums';
import { PlayerThemeService } from '../../services';
import { Theme } from '../../types';

@Component({
  selector: 'app-player-theme',
  templateUrl: './player-theme.component.html',
  styleUrls: ['./player-theme.component.scss'],
})
export class PlayerThemeComponent {
  playerThemeTeamA: Theme;
  playerThemeTeamB: Theme;
  playerThemes: Theme[] = new Array<Theme>();

  constructor(private playerThemeService: PlayerThemeService) {}

  async ionViewWillEnter(): Promise<void> {
    this.playerThemes = this.playerThemeService.getPlayerThemes();
    this.playerThemeTeamA = await this.playerThemeService.getPlayerThemePreferences(TeamId.a);
    this.playerThemeTeamB = await this.playerThemeService.getPlayerThemePreferences(TeamId.b);
  }

  onSelect(team: string, playerTheme: Theme): void {
    let teamId: TeamId;
    if (team === 'a') {
      if (this.playerThemeTeamB.cssClass !== playerTheme.cssClass) {
        this.playerThemeTeamA = playerTheme;
        teamId = TeamId.a;
      }
    } else if (team === 'b') {
      if (this.playerThemeTeamA.cssClass !== playerTheme.cssClass) {
        this.playerThemeTeamB = playerTheme;
        teamId = TeamId.b;
      }
    }
    this.playerThemeService.setPlayerThemePreferences(teamId, playerTheme);
  }
}
