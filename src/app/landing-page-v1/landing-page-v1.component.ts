import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-landing-page-v1',
  templateUrl: './landing-page-v1.component.html',
  styleUrls: ['./landing-page-v1.component.scss']
})
export class LandingPageV1Component implements OnInit, AfterViewInit {
  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const faders = this.elem.nativeElement.querySelectorAll('.fade-in');
    const products = this.elem.nativeElement.querySelectorAll('.product');
    const appearOptions = {
      rootMargin: "0px 0px -300px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }

      })
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    products.forEach(product => {
      appearOnScroll.observe(product);
    });
}

}
