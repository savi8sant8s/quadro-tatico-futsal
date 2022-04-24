import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomController, GestureController, Platform } from '@ionic/angular';

import { Position } from '../../types';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('player', { read: ElementRef }) player: ElementRef;

  @Input() x = 0;
  @Input() y = 0;
  @Input() cssClass = 'player-theme-1';

  constructor(private gestureCtrl: GestureController, private domCtrl: DomController, private platform: Platform) {}

  async ngAfterViewInit(): Promise<void> {
    await this.domCtrl.read(() => {
      this.platform.ready().then(() => {
        this.setupGesture(this.platform.width(), this.platform.height());
      });
    });
  }

  setupGesture(width: number, height: number): void {
    if (this.x !== 0 && this.y !== 0) {
      const { x, y } = this.getValidPosition(width, height, this.x, this.y);
      this.setNewPosition(x, y);
    }
    const moveGesture = this.gestureCtrl.create({
      el: this.player.nativeElement,
      threshold: 0,
      gestureName: 'move',
      onMove: (ev) => {
        const { x, y } = this.getValidPosition(width, height, ev.currentX, ev.currentY);
        this.setNewPosition(x, y);
      },
    });
    moveGesture.enable(true);
  }

  getValidPosition(width: number, height: number, x: number, y: number): Position {
    if (x < 30) {
      x = 30;
    }
    if (y < 30) {
      y = 30;
    }
    if (x > width - 35) {
      x = width - 35;
    }
    if (y > height - 120) {
      y = height - 120;
    }
    return { x, y };
  }

  setNewPosition(x: number, y: number): void {
    this.player.nativeElement.style.transform = `translate(${x - 30}px, ${y - 30}px)`;
  }
}
