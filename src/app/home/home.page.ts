import { Component } from '@angular/core';
import { TeamId } from '../enums/team-id.enum';
import { CourtThemeService } from '../services/court-theme/court-theme.service';
import { EventsService } from '../services/events/events.service';
import { FormationPositionsService } from '../services/formation-positions/formation-positions.service';
import { FormationService } from '../services/formation/formation.service';
import { CourtTheme } from '../types/court-theme.type';
import { FormationPositions } from '../types/formation-positions.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teamA: FormationPositions = {name: null, positions: []};
  teamB: FormationPositions = {name: null, positions: []};
  courtTheme: CourtTheme = {cssClass: 'court-theme-1'};

  constructor(
    private courtThemeService: CourtThemeService,
    private formationPositionsService: FormationPositionsService,
    private formationService: FormationService,
    private eventsService: EventsService,
  ) {}

  async ionViewWillEnter() {
    this.getCourtTheme();
    await this.setTeamsPositions();
    this.eventsService.subscribe('court-theme:changed', () => {
      this.getCourtTheme();
    });
    this.eventsService.subscribe('formation:changed', async (data) => {
      await this.setTeamsPositions();
    });
    this.eventsService.subscribe('player-theme:changed', async (data) => {
      console.log('alterado cor do jogador');
    });

    this.eventsService.subscribe('field-theme:changed', async (data) => {
      console.log('alterado cor da quadra');
    });
  }

  async setTeamsPositions(){
    const teamAFormation = await this.formationService.getFormationPreferences(TeamId.a);
    this.teamA = this.formationPositionsService.getFormationPositions(teamAFormation.name);
    const teamBFormation = await this.formationService.getFormationPreferences(TeamId.b);
    this.teamB = this.formationPositionsService.getFormationPositions(teamBFormation.name, true);
  }

  async getCourtTheme(){
    this.courtTheme = await this.courtThemeService.getThemePreferences();
  }
}
