import { TestBed } from '@angular/core/testing';

import { UiKendoService } from './ui-kendo.service';

describe('UiKendoService', () => {
  let service: UiKendoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiKendoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
