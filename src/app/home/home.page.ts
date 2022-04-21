import { Component } from '@angular/core';
import { TeamId } from '../enums/team-id.enum';
import { EventsService } from '../services/events/events.service';
import { FormationPositionsService } from '../services/formation-positions/formation-positions.service';
import { FormationService } from '../services/formation/formation.service';
import { FormationPositions } from '../types/formation-positions.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teamA: FormationPositions = {name: null, positions: []};
  teamB: FormationPositions = {name: null, positions: []};

  constructor(
    private formationPositionsService: FormationPositionsService,
    private formationService: FormationService,
    private eventsService: EventsService,
  ) {}

  async ionViewWillEnter() {
    await this.setTeamsPositions();
    this.eventsService.subscribe('formation:changed', async (data) => {
      await this.setTeamsPositions();
    });
  }

  async setTeamsPositions(){
    const teamAFormation = await this.formationService.getFormationPreferences(TeamId.a);
    this.teamA = this.formationPositionsService.getFormationPositions(teamAFormation.name);
    const teamBFormation = await this.formationService.getFormationPreferences(TeamId.b);
    this.teamB = this.formationPositionsService.getFormationPositions(teamBFormation.name, true);
  }
}
