import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detailpage',
  templateUrl: './product-detailpage.component.html',
  styleUrls: ['./product-detailpage.component.scss'],
})
export class ProductDetailpageComponent {
  imageSelect() {
    const imgs = Array.from(document.querySelectorAll('.img-select a'));
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem: any) => {
      imgItem.addEventListener('click', (event: any) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImag();
      });
    });

    let slideImag = () => {
      const displayWidth = document.querySelector(
        '.img-showcase img:first-child'
      ) as HTMLElement;
      const displayWidthClientwidth = displayWidth.clientWidth;

      const imgshowcase = document.querySelector(
        '.img-showcase'
      ) as HTMLElement;

      imgshowcase.style.transform = `translateX(${
        -(imgId - 1) * displayWidthClientwidth
      }px)`;
    };

    window.addEventListener('resize', slideImag);
  }
}
