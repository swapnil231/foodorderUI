import { Component } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss'],
})
export class AddtocartComponent {
  ShowCartTab() {
    console.log('jjjjjjjjjjjjj');
    const carttab = document.querySelector('.cartTab') as HTMLElement;
    const container = document.querySelector('.container') as HTMLElement;
    if (carttab.classList.contains('cartTabShow')) {
      carttab.classList.remove('cartTabShow');
      container.classList.remove('containerslide');
      // return
    } else {
      carttab.classList.add('cartTabShow');
      container.classList.add('containerslide');
    }
  }

  closeCartTab() {
    const carttab = document.querySelector('.cartTab') as HTMLElement;
    const container = document.querySelector('.container') as HTMLElement;
    if (carttab.classList.contains('cartTabShow')) {
      carttab.classList.remove('cartTabShow');
      container.classList.remove('containerslide');
    } else {
      return;
    }
  }
}
