import { Component } from '@angular/core';

import { TeamId } from '../../enums';
import { FormationService } from '../../services';
import { Formation } from '../../types';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent {
  formationTeamA: Formation;
  formationTeamB: Formation;
  formations: Formation[] = new Array<Formation>();

  constructor(private formationService: FormationService) {}

  async ionViewWillEnter(): Promise<void> {
    this.formations = this.formationService.getFormations();
    this.formationTeamA = await this.formationService.getFormationPreferences(TeamId.a);
    this.formationTeamB = await this.formationService.getFormationPreferences(TeamId.b);
  }

  onSelect(team: string, formation: Formation): void {
    let teamId: TeamId;
    if (team === 'a') {
      this.formationTeamA = formation;
      teamId = TeamId.a;
    } else if (team === 'b') {
      this.formationTeamB = formation;
      teamId = TeamId.b;
    }
    this.formationService.setFormationPreferences(teamId, formation);
  }
}
