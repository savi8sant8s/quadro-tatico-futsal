import { Injectable } from '@angular/core';
import { TeamId } from 'src/app/enums/team-id.enum';
import { Formation } from 'src/app/types/formation.type';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formations: Array<Formation> = new Array<Formation>();

  constructor() {
    this.formations.push({name: '1-2-2',   imageUrl: 'assets/1-2-2.svg'});
    this.formations.push({name: '1-3-1',   imageUrl: 'assets/1-3-1.svg'});
    this.formations.push({name: '1-1-2-1',   imageUrl: 'assets/1-1-2-1.svg'});
    this.formations.push({name: '1-1-1-2',   imageUrl: 'assets/1-1-1-2.svg'});
  }

  getFormations(): Array<Formation> {
    return this.formations;
  }

  async setFormationPreferences(team: TeamId, formation: Formation) {
    await Storage.set({
      key: this.getKeyName(team),
      value: JSON.stringify(formation)
    });
  }

  async getFormationPreferences(team: TeamId): Promise<Formation> {
    const formation = await Storage.get({
      key: this.getKeyName(team)
    });
    return JSON.parse(formation.value);
  }

  getKeyName(team: TeamId): string {
    return `${team}-formation`;
  }
}
