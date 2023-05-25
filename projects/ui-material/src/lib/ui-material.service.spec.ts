import { TestBed } from '@angular/core/testing';

import { UiMaterialService } from './ui-material.service';

describe('UiMaterialService', () => {
  let service: UiMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
