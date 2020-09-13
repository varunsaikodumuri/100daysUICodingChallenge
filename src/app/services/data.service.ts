import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private navList = [];
  constructor() {
    this.navList = [
      { name: 'Day 1 + 2 (Image Gallery)', path: '/day1', showHeader: true },
      { name: 'Day 3 + 4 (Minesweeper)', path: '/day3',  showHeader: true },
      { name: 'Day 5 + 6 (Image Slider)', path: '/day5', showHeader: true },
      { name: 'Day 7 (Image Carousel)', path: '/day7', showHeader: true },
      { name: 'Day 8 (Flex Box)', path: '/day8', showHeader: true },
      { name: 'Day 9 (Grid)', path: '/day9', showHeader: true },
      { name: 'Day 10 (Image Span)', path: '/day10', showHeader: true }
    ]
  }

  getNavList() {
    return this.navList;
  }

}
