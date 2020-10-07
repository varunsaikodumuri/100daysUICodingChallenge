import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, NavigationEnd } from '@angular/router';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'UICodingChallenge';
  showHeader = true;
  constructor(private router: Router) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        const stateData = this.router.getCurrentNavigation().extras.state;
        if (stateData && Object.keys(stateData).indexOf('showHeader') !== -1) {
          this.showHeader = stateData.showHeader;
        } else {
          this.showHeader = true;
        }
      }
    })
  }
  changeInRoutes(event) {
  }

  prepareRoute(o) {
    return o.isActivated ? o.activatedRoute.url._value[0].path : '';
  }
}
