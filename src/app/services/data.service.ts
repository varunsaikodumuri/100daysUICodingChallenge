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
      { name: 'Day 3 + 4 (Minesweeper)', path: '/day3', showHeader: true },
      { name: 'Day 5 + 6 (Image Slider)', path: '/day5', showHeader: true },
      { name: 'Day 7 (Image Carousel)', path: '/day7', showHeader: true },
      { name: 'Day 8 (Flex Box)', path: '/day8', showHeader: true },
      { name: 'Day 9 (Grid)', path: '/day9', showHeader: true },
      { name: 'Day 10 (Image Span)', path: '/day10', showHeader: true },
      { name: 'Day 11 (Social Media Accordion)', path: '/day11', showHeader: true },
      { name: 'Day 12 (Split Screen)', path: '/day12', showHeader: true },
      { name: 'Day 13 (Landing Page v1)', path: '/day13', showHeader: false },
      { name: 'Day 19 (User Inputs)', path: '/day19', showHeader: true }
    ]
  }

  getNavList() {
    return this.navList;
  }

}
