import { Component } from '@angular/core';
import { TeamId } from '../enums/team-id.enum';
import { CourtThemeService } from '../services/court-theme/court-theme.service';
import { EventsService } from '../services/events/events.service';
import { PositionsService } from '../services/positions/positions.service';
import { FormationService } from '../services/formation/formation.service';
import { PlayerThemeService } from '../services/player-theme/player-theme.service';
import { FormationPositions } from '../types/formation-positions.type';
import { Theme } from '../types/theme.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teamA: FormationPositions = {name: null, positions: []};
  teamB: FormationPositions = {name: null, positions: []};
  playerThemeTeamA: Theme;
  playerThemeTeamB: Theme;
  courtTheme: Theme = {cssClass: 'bg-theme-1'};

  constructor(
    private courtThemeService: CourtThemeService,
    private positionsService: PositionsService,
    private formationService: FormationService,
    private playerThemeService: PlayerThemeService,
    private eventsService: EventsService,
  ) {}

  async ionViewWillEnter() {
    await this.getCourtTheme();
    await this.getPlayerThemes();
    await this.getTeamsPositions();
    this.eventsService.subscribe('court-theme:changed', () => {
      this.getCourtTheme();
    });
    this.eventsService.subscribe('formation:changed', async (data) => {
      await this.getTeamsPositions();
    });
    this.eventsService.subscribe('player-theme:changed', async (data) => {
      this.getPlayerThemes();
    });
  }

  async getTeamsPositions(){
    const teamAFormation = await this.formationService.getFormationPreferences(TeamId.a);
    this.teamA = this.positionsService.getPositions(teamAFormation.name, 'top');
    const teamBFormation = await this.formationService.getFormationPreferences(TeamId.b);
    this.teamB = this.positionsService.getPositions(teamBFormation.name, 'bottom');
  }

  async getCourtTheme(){
    this.courtTheme = await this.courtThemeService.getThemePreferences();
  }

  async getPlayerThemes(){
    this.playerThemeTeamA = await this.playerThemeService.getPlayerThemePreferences(TeamId.a);
    this.playerThemeTeamB = await this.playerThemeService.getPlayerThemePreferences(TeamId.b);
  }
}
