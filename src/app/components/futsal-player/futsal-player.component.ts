import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomController, GestureController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-futsal-player',
  templateUrl: './futsal-player.component.html',
  styleUrls: ['./futsal-player.component.scss'],
})
export class FutsalPlayerComponent implements AfterViewInit{

  @ViewChild('player', { read: ElementRef }) player: ElementRef;

  constructor(
    private gestureCtrl: GestureController,
    private domCtrl: DomController,
    private platform: Platform) { }

  async ngAfterViewInit() {
    await this.domCtrl.read(() => {
      this.platform.ready().then(() => {
      this.setupGesture(this.platform.width(), this.platform.height());
      });
    });
  }

  setupGesture(width, height) {
    const moveGesture = this.gestureCtrl.create({
      el: this.player.nativeElement,
      threshold: 0,
      gestureName: 'move',
      onMove: ev => {
        let x = ev.currentX;
        let y = ev.currentY;
        if (x < 30) {
          x = 30;
        }
        if (y < 110) {
          y = 110;
        }
        if (x > width - 30) {
          x = width - 30;
        }
        if (y > height - 110) {
          y = height - 110;
        }
        this.player.nativeElement.style.transform = `
          translate(${x-30}px, ${y-110}px)
        `;
      },
    });
    moveGesture.enable(true);
  }

}

