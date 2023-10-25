import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailpageComponent } from './product-detailpage.component';

describe('ProductDetailpageComponent', () => {
  let component: ProductDetailpageComponent;
  let fixture: ComponentFixture<ProductDetailpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailpageComponent]
    });
    fixture = TestBed.createComponent(ProductDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
