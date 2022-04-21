import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomController, GestureController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-futsal-player',
  templateUrl: './futsal-player.component.html',
  styleUrls: ['./futsal-player.component.scss'],
})
export class FutsalPlayerComponent implements AfterViewInit, OnInit{
  @ViewChild('player', { read: ElementRef }) player: ElementRef;

  @Input() x = 0;
  @Input() y = 0;
  @Input() theme = 0;

  themeClass = 'color-1';

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

  ngOnInit(){
    this.themeClass = `color-${this.theme}`;
  }

  setupGesture(width, height) {
    if (this.x !== 0 && this.y !== 0){
      const { x, y } = this.getValidPosition(width, height, this.x, this.y);
      this.setNewPosition(x, y);
    }
    const moveGesture = this.gestureCtrl.create({
      el: this.player.nativeElement,
      threshold: 0,
      gestureName: 'move',
      onMove: ev => {
        const { x, y } = this.getValidPosition(width, height, ev.currentX, ev.currentY);
        this.setNewPosition(x, y);
      },
    });
    moveGesture.enable(true);
  }

  getValidPosition(width, height, x, y) {
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
    return { x, y };
  }

  setNewPosition(x, y) {
    this.player.nativeElement.style.transform = `
      translate(${x-30}px, ${y-110}px)
    `;
  }
}

