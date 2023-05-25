import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKendoComponent } from './ui-kendo.component';

describe('UiKendoComponent', () => {
  let component: UiKendoComponent;
  let fixture: ComponentFixture<UiKendoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiKendoComponent]
    });
    fixture = TestBed.createComponent(UiKendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
