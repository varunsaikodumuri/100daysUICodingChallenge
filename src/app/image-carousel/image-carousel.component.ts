import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  carouselImages = [];
  activeImage = 0;
  carouselTimer;
  constructor() { }

  ngOnInit() {
    this.carouselImages = Array(5).fill(null);
    this.setNewInterval();

  }

  navLeft() {
    if (this.activeImage !== 0) {
      this.activeImage--;
    } else {
      this.activeImage = this.carouselImages.length - 1;
    }
    this.resetInterval();
  }
  navRight() {
    if (this.activeImage !== this.carouselImages.length - 1) {
      this.activeImage++;
    } else {
      this.activeImage = 0;
    }
    this.resetInterval();
  }

  moveTo(i) {
    this.activeImage = i;
    this.resetInterval();
  }

  setNewInterval() {
    this.carouselTimer = setInterval(() => {
      if (this.activeImage !== this.carouselImages.length - 1) {
        this.activeImage++;
      } else {
        this.activeImage = 0;
      }
    }, 5000)
  }

  resetInterval() {
    clearInterval(this.carouselTimer);
    this.setNewInterval();
  }
}
