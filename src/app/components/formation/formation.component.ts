import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IClose } from 'src/app/interfaces/close.interface';
import { ISelect } from 'src/app/interfaces/select.interface';
import { TeamId } from '../../enums/team-id.enum';
import { FormationService } from '../../services/formation/formation.service';
import { Formation } from '../../types/formation.type';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements IClose, ISelect{
  formationTeamA: Formation;
  formationTeamB: Formation;
  formations: Array<Formation> = new Array<Formation>();

  constructor(
    private formationService: FormationService,
    private modalCtrl: ModalController,
  ) {
   }

  async ionViewWillEnter() {
    this.formations = this.formationService.getFormations();
    this.formationTeamA = await this.formationService.getFormationPreferences(TeamId.a);
    this.formationTeamB = await this.formationService.getFormationPreferences(TeamId.b);
  }

  async onClose(){
    await this.modalCtrl.dismiss();
  }

  onSelect(team, formation){
    if (team === 'a'){
      this.formationTeamA = formation;
      team = TeamId.a;
    }
    else if (team === 'b'){
      this.formationTeamB = formation;
      team = TeamId.b;
    }
    this.formationService.setFormationPreferences(team, formation);
  }
}
