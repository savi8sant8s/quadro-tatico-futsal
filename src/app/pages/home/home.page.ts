import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonHeader } from '@ionic/angular';

import { TeamId } from '../../enums';
import {
  CourtThemeService,
  EventsService,
  FormationService,
  PlayerThemeService,
  PositionsService,
} from '../../services';
import { FormationPositions, Theme } from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teamA: FormationPositions = { name: null, positions: [] };
  teamB: FormationPositions = { name: null, positions: [] };
  playerThemeTeamA: Theme;
  playerThemeTeamB: Theme;
  courtTheme: Theme = { cssClass: 'bg-theme-1' };

  constructor(
    private courtThemeService: CourtThemeService,
    private positionsService: PositionsService,
    private formationService: FormationService,
    private playerThemeService: PlayerThemeService,
    private eventsService: EventsService
  ) {}

  async ionViewWillEnter(): Promise<void> {
    await this.getCourtTheme();
    await this.getPlayerThemes();
    await this.getTeamsPositions();
    this.eventsService.subscribe('court-theme:changed', async () => {
      await this.getCourtTheme();
    });
    this.eventsService.subscribe('formation:changed', async () => {
      await this.getTeamsPositions();
    });
    this.eventsService.subscribe('player-theme:changed', async () => {
      await this.getPlayerThemes();
    });
  }

  async getTeamsPositions(): Promise<void> {
    const teamAFormation = await this.formationService.getFormationPreferences(TeamId.a);
    this.teamA = this.positionsService.getPositions(teamAFormation.name, 'top');
    const teamBFormation = await this.formationService.getFormationPreferences(TeamId.b);
    this.teamB = this.positionsService.getPositions(teamBFormation.name, 'bottom');
  }

  async getCourtTheme(): Promise<void> {
    this.courtTheme = await this.courtThemeService.getThemePreferences();
  }

  async getPlayerThemes(): Promise<void> {
    this.playerThemeTeamA = await this.playerThemeService.getPlayerThemePreferences(TeamId.a);
    this.playerThemeTeamB = await this.playerThemeService.getPlayerThemePreferences(TeamId.b);
  }
}
