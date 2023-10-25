import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-foodui',
  templateUrl: './foodui.component.html',
  styleUrls: ['./foodui.component.scss'],
})
export class FooduiComponent {
  ngOnInit(): void {
    this.BannerCounterManupulation();
  }

  ngAfterViewInit(): void {
    console.log('iam firedddddddd');
    this.closeBurgerMenuOnLinkClick();
  }

  //  make navbarSticky///////////////////////////////////
  @HostListener('window:scroll', [])
  onWindowScroll(event: Event) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector('.nevigation-wrap')?.classList.add('onscroll');
    } else {
      document.querySelector('.nevigation-wrap')?.classList.remove('onscroll');
    }
  }

  // closeBurgerMenuOnLinkClick////////////////////////////////////

  closeBurgerMenuOnLinkClick() {
    let allnavLinks = document.querySelectorAll('.nav-link');
    let navBarCollapse = document.querySelector('.navbar-collapse.collapse');
    allnavLinks.forEach((e) =>
      e.addEventListener('click', (onclick) =>
        navBarCollapse?.classList.remove('show')
      )
    );
  }

  BannerCounterManupulation() {
    document.addEventListener('DOMContentLoaded', () => {
      function counter(id: any, start: any, end: any, duration: any) {
        let obj = document.getElementById(id) as HTMLElement;
        let current = start;
        let range = end - start;
        let incriment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {
          current += incriment;
          obj.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
      }
      counter('count1', 0, 1287, 3000);
      counter('count2', 100, 5786, 2000);
      counter('count3', 0, 1440, 3000);
      counter('count4', 0, 7100, 3000);
    });
  }
}
