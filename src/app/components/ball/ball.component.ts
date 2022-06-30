import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomController, GestureController, Platform } from '@ionic/angular';
import { Position } from '../../types';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements AfterViewInit {
  @ViewChild('ball', { read: ElementRef }) ball: ElementRef;
  x = 0;
  y = 0;

  constructor(private gestureCtrl: GestureController, private domCtrl: DomController, private platform: Platform) {}

  async ngAfterViewInit(): Promise<void> {
    await this.domCtrl.read(() => {
      this.platform.ready().then(() => {
        this.x = this.platform.width() / 2;
        this.y = this.platform.height() / 2 -30;
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
      el: this.ball.nativeElement,
      threshold: 0,
      gestureName: 'player',
      onMove: (ev) => {
        const { x, y } = this.getValidPosition(width, height, ev.currentX, ev.currentY);
        this.setNewPosition(x, y);
      },
    });
    moveGesture.enable(true);
  }

  getValidPosition(width: number, height: number, x: number, y: number): Position {
    if (x < 20) {
      x = 20;
    }
    if (y < 20) {
      y = 20;
    }
    if (x > width - 20) {
      x = width - 20;
    }
    if (y > height - 80) {
      y = height - 80;
    }
    return { x, y };
  }

  setNewPosition(x: number, y: number): void {
    this.ball.nativeElement.style.transform = `translate(${x-20}px, ${y - 20}px)`;
  }
}
