import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList = [];
  isMenuOpen = false;
  @Input() showHeader = true;
  @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  constructor(private renderer: Renderer2, private dataService: DataService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.toggleButton && !this.toggleButton.nativeElement.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });

  }

  ngOnInit() {
    this.menuList = this.dataService.getNavList()
  }

  toggleMenu(flag) {
    this.isMenuOpen = flag;
  }
}
