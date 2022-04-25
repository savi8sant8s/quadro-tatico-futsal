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
  @Input() goalkeeper = false;
  @Input() x = 0;
  @Input() y = 0;
  @Input() cssClass = 'player-theme-1';
  lastOnStart = 0;
  doubleClickTheshold = 500;
  focusPlayer = false;

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
      gestureName: 'player',
      onStart: (ev) => {
        const now = Date.now();
        if (Math.abs(now - this.lastOnStart) <= this.doubleClickTheshold) {
          this.focusPlayer = !this.focusPlayer;
          if (this.focusPlayer){
            this.player.nativeElement.style.setProperty('filter', 'brightness(80%)');
          } else {
            this.player.nativeElement.style.setProperty('filter', 'brightness(100%)');
          }
          this.lastOnStart = 0;
        } else {
          this.lastOnStart = now;
        }
      },
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
    if (x > width - 25) {
      x = width - 25;
    }
    if (y > height - 90) {
      y = height - 90;
    }
    return { x, y };
  }

  setNewPosition(x: number, y: number): void {
    this.player.nativeElement.style.transform = `translate(${x - 30}px, ${y - 30}px)`;
  }
}
