import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { FormationPositions } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private positionsTop: FormationPositions[] = new Array<FormationPositions>();
  private positionsBottom: FormationPositions[] = new Array<FormationPositions>();

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      const width = this.platform.width();
      const height = this.platform.height();
      this.createPositions(width, height);
    });
  }

  createPositions(width: number, height: number): void {
    this.positionsTop.push(this.top122(width, height));
    this.positionsTop.push(this.top131(width, height));
    this.positionsTop.push(this.top1112(width, height));
    this.positionsTop.push(this.top1121(width, height));
    this.positionsBottom.push(this.bottom122(width, height));
    this.positionsBottom.push(this.bottom131(width, height));
    this.positionsBottom.push(this.bottom1112(width, height));
    this.positionsBottom.push(this.bottom1121(width, height));
  }

  top122(width: number, height: number): FormationPositions {
    return {
      name: '1-2-2',
      positions: [
        { x: width * 0.5, y: height * 0.1 },
        { x: width * 0.25, y: height * 0.2 },
        { x: width * 0.75, y: height * 0.2 },
        { x: width * 0.25, y: height * 0.35 },
        { x: width * 0.75, y: height * 0.35 },
      ],
    };
  }

  bottom122(width: number, height: number): FormationPositions {
    return {
      name: '1-2-2',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.7 },
        { x: width * 0.75, y: height * 0.7 },
        { x: width * 0.25, y: height * 0.55 },
        { x: width * 0.75, y: height * 0.55 },
      ],
    };
  }

  top131(width: number, height: number): FormationPositions {
    return {
      name: '1-3-1',
      positions: [
        { x: width * 0.5, y: height * 0.1 },
        { x: width * 0.25, y: height * 0.2 },
        { x: width * 0.5, y: height * 0.2 },
        { x: width * 0.75, y: height * 0.2 },
        { x: width * 0.5, y: height * 0.35 },
      ],
    };
  }

  bottom131(width: number, height: number): FormationPositions {
    return {
      name: '1-3-1',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.25, y: height * 0.65 },
        { x: width * 0.5, y: height * 0.65 },
        { x: width * 0.75, y: height * 0.65 },
        { x: width * 0.5, y: height * 0.55 },
      ],
    };
  }

  top1112(width: number, height: number): FormationPositions {
    return {
      name: '1-1-1-2',
      positions: [
        { x: width * 0.5, y: height * 0.1 },
        { x: width * 0.5, y: height * 0.2 },
        { x: width * 0.5, y: height * 0.3 },
        { x: width * 0.25, y: height * 0.37 },
        { x: width * 0.75, y: height * 0.37 },
      ],
    };
  }

  bottom1112(width: number, height: number): FormationPositions {
    return {
      name: '1-1-1-2',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.5, y: height * 0.67 },
        { x: width * 0.5, y: height * 0.57 },
        { x: width * 0.25, y: height * 0.5 },
        { x: width * 0.75, y: height * 0.5 },
      ],
    };
  }

  top1121(width: number, height: number): FormationPositions {
    return {
      name: '1-1-2-1',
      positions: [
        { x: width * 0.5, y: height * 0.1 },
        { x: width * 0.5, y: height * 0.2 },
        { x: width * 0.25, y: height * 0.25 },
        { x: width * 0.75, y: height * 0.25 },
        { x: width * 0.5, y: height * 0.35 },
      ],
    };
  }

  bottom1121(width: number, height: number): FormationPositions {
    return {
      name: '1-1-2-1',
      positions: [
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.5, y: height * 0.67 },
        { x: width * 0.25, y: height * 0.6 },
        { x: width * 0.75, y: height * 0.6 },
        { x: width * 0.5, y: height * 0.52 },
      ],
    };
  }

  getPositions(formationName: string, position: string): FormationPositions {
    if (position === 'top') {
      return this.positionsTop.find((fp) => fp.name === formationName);
    }
    return this.positionsBottom.find((fp) => fp.name === formationName);
  }
}
