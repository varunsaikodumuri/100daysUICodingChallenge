import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-split-screen',
  templateUrl: './split-screen.component.html',
  styleUrls: ['./split-screen.component.scss']
})
export class SplitScreenComponent implements OnInit {
  @ViewChild('wrapper', { static: false }) wrapper: ElementRef;

  constructor() { }


  ngOnInit() {
  }

  onMouseMove(e) {
    let topLayer = this.wrapper.nativeElement.querySelector('.top');
    let handle = this.wrapper.nativeElement.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (this.wrapper.nativeElement.className.indexOf('skewed') !== -1) {
      skew = 1000;
    }

    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width = e.clientX + skew + delta + 'px';
  }
}
