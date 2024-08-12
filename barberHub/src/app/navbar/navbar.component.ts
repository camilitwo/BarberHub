import {Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private renderer: Renderer2, private el: ElementRef) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.renderer.listen('window', 'scroll', () => {
        this.fixNav();
      });
    }
  }

  fixNav() {
    const nav = this.el.nativeElement.querySelector('.nav') as HTMLElement;
    if (window.scrollY > nav.offsetHeight + 150) {
      this.renderer.addClass(nav, 'active');
    } else {
      this.renderer.removeClass(nav, 'active');
    }
  }
}
