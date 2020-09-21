import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  imagesList = [];
  hideLeft = true;
  hideRight = false;
  @ViewChild('imageSlideList', { static: false }) imageSlideList: ElementRef;
  @ViewChildren('imageSlide') imageSlideChildList: QueryList<ElementRef>;
  constructor() { }

  ngOnInit() {
    this.imagesList = Array(10).fill(null)
  }

  imageContainerScrolled(event) {
    if (this.imageSlideList) {
      this.hideLeft = true;
      if (this.imageSlideList && this.imageSlideList.nativeElement.scrollLeft !== 0) {
        this.hideLeft = false;
      }

      this.hideRight = true;
      let scrollPosition = Math.ceil(this.imageSlideList ? this.imageSlideList.nativeElement.scrollLeft : 0);
      let scrollWidth = this.imageSlideList ? this.imageSlideList.nativeElement.scrollWidth : 0;
      if (scrollWidth - window.innerWidth != scrollPosition) {
        this.hideRight = false;
      }
    }
  }

  navLeft() {
    this.imageSlideList.nativeElement.scrollTo({
      left: this.imageSlideList.nativeElement.scrollLeft - (window.innerWidth) + 150,
      behavior: 'smooth'
    });
  }

  navRight() {
    this.imageSlideList.nativeElement.scrollTo({
      left: this.imageSlideList.nativeElement.scrollLeft + (window.innerWidth) - 150,
      behavior: 'smooth'
    });
  }

  mouseOver(i) {
    const parentLeftPosition = this.imageSlideChildList['_results'][i]['nativeElement']['offsetLeft'] - this.imageSlideList.nativeElement.scrollLeft;
    const hoverElement = this.imageSlideChildList['_results'][i].nativeElement.querySelector('.hover-container');
    hoverElement.style.left = `${parentLeftPosition}px`;
  }
}
