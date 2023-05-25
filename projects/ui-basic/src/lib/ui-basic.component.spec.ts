import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBasicComponent } from './ui-basic.component';

describe('UiBasicComponent', () => {
  let component: UiBasicComponent;
  let fixture: ComponentFixture<UiBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiBasicComponent]
    });
    fixture = TestBed.createComponent(UiBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
