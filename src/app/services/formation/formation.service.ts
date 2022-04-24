import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

import { TeamId } from '../../enums';
import { Formation } from '../../types';
import { EventsService } from '../events/events.service';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private formations: Formation[] = new Array<Formation>();

  constructor(private eventsService: EventsService) {
    this.formations.push({ name: '1-2-2', imageUrl: 'assets/formation/1-2-2.svg' });
    this.formations.push({ name: '1-3-1', imageUrl: 'assets/formation/1-3-1.svg' });
    this.formations.push({ name: '1-1-2-1', imageUrl: 'assets/formation/1-1-2-1.svg' });
    this.formations.push({ name: '1-1-1-2', imageUrl: 'assets/formation/1-1-1-2.svg' });
  }

  getFormations(): Formation[] {
    return this.formations;
  }

  async setFormationPreferences(team: TeamId, formation: Formation): Promise<void> {
    await Storage.set({
      key: this.getKeyName(team),
      value: JSON.stringify(formation),
    });
    this.eventsService.publish('formation:changed', true);
  }

  async getFormationPreferences(team: TeamId): Promise<Formation> {
    const formation = await Storage.get({
      key: this.getKeyName(team),
    });
    return JSON.parse(formation.value);
  }

  getKeyName(team: TeamId): string {
    return `${team}-formation`;
  }
}
