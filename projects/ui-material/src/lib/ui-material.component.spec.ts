import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMaterialComponent } from './ui-material.component';

describe('UiMaterialComponent', () => {
  let component: UiMaterialComponent;
  let fixture: ComponentFixture<UiMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiMaterialComponent]
    });
    fixture = TestBed.createComponent(UiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
