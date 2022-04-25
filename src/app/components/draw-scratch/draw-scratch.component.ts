import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-draw-scratch',
  templateUrl: './draw-scratch.component.html',
  styleUrls: ['./draw-scratch.component.scss'],
})
export class DrawScratchComponent implements AfterViewInit {
  @ViewChild('drawScratch') canvas: any;
  canvasElement: any;
  lastX: number;
  lastY: number;
  color = 'white';
  brushSize = 5;

  constructor(private platform: Platform, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setAttribute(this.canvasElement, 'height', this.platform.height() + '');
  }

  handleStart(ev) {
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev) {
    const ctx = this.canvasElement.getContext('2d');
    const currentX = ev.touches[0].pageX;
    const currentY = ev.touches[0].pageY;
    ctx.beginPath();
    ctx.setLineDash([5, 20]);
    ctx.lineJoin = 'round';
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();
    this.lastX = currentX;
    this.lastY = currentY;
  }
}
