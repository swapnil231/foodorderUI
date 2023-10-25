import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooduiComponent } from './foodui.component';

describe('FooduiComponent', () => {
  let component: FooduiComponent;
  let fixture: ComponentFixture<FooduiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooduiComponent]
    });
    fixture = TestBed.createComponent(FooduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
