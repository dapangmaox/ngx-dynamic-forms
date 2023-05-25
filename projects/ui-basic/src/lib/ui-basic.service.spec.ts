import { TestBed } from '@angular/core/testing';

import { UiBasicService } from './ui-basic.service';

describe('UiBasicService', () => {
  let service: UiBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
