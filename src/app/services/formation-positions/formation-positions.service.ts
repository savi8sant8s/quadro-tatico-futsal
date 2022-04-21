import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FormationPositions } from 'src/app/types/formation-positions.type';

@Injectable({
  providedIn: 'root'
})
export class FormationPositionsService {
  private formationPositions: Array<FormationPositions> = new Array<FormationPositions>();
  private formationPositionsReverse: Array<FormationPositions> = new Array<FormationPositions>();

  constructor(
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      const width = this.platform.width();
      const height = this.platform.height();
      this.createFormationPositions(width, height);
    });
  }

  createFormationPositions(width: number, height: number) {
    this.formationPositions.push(this.formation122(width, height));
    this.formationPositions.push(this.formation131(width, height));
    this.formationPositions.push(this.formation1112(width, height));
    this.formationPositions.push(this.formation1121(width, height));
    this.formationPositionsReverse.push(this.formation122Reverse(width, height));
    this.formationPositionsReverse.push(this.formation131Reverse(width, height));
    this.formationPositionsReverse.push(this.formation1112Reverse(width, height));
    this.formationPositionsReverse.push(this.formation1121Reverse(width, height));
  }

  formation122(width: number, height: number) {
    return {
      name: '1-2-2',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.25, y: height * 0.7 },
        { x: width * 0.75, y: height * 0.7 },
      ]
    };
  }

  formation122Reverse(width: number, height: number) {
    return {
      name: '1-2-2',
      positions: [
        { x: width * 0.5, y: height * 0.5 },
        { x: width * 0.25, y: height * 0.35 },
        { x: width * 0.75, y: height * 0.35},
        { x: width * 0.5, y: height * 0.4 },
        { x: width * 0.5, y: height * 0.2 },
      ]
    };
  }

  formation131(width: number, height: number) {
    return {
      name: '1-3-1',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.5, y: height * 0.7 },
        { x: width * 0.5, y: height * 0.6 },
      ]
    };
  }

  formation131Reverse(width: number, height: number) {
    return {
      name: '1-3-1',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.5, y: height * 0.7 },
        { x: width * 0.5, y: height * 0.6 },
      ]
    };
  }

  formation1112(width: number, height: number) {
    return {
      name: '1-1-1-2',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.25, y: height * 0.65 },
        { x: width * 0.75, y: height * 0.65 },
      ]
    };


  }

  formation1112Reverse(width: number, height: number) {
    return {
      name: '1-1-1-2',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.5, y: height * 0.7 },
        { x: width * 0.5, y: height * 0.6 },
      ]
    };


  }

  formation1121(width: number, height: number) {
    return {
      name: '1-1-2-1',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.5, y: height * 0.7 },
        { x: width * 0.5, y: height * 0.6 },
      ]
    };
  }

  formation1121Reverse(width: number, height: number) {
    return {
      name: '1-1-2-1',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.75 },
        { x: width * 0.75, y: height * 0.75},
        { x: width * 0.5, y: height * 0.7 },
        { x: width * 0.5, y: height * 0.6 },
      ]
    };
  }

  getFormationPositions(formationName: string, reverse = false) {
    if (reverse) {
      return this.formationPositionsReverse.find(fp => fp.name === formationName);
    }
    return this.formationPositions.find(fp => fp.name === formationName);
  }
}
