import { TestBed } from '@angular/core/testing';

import { GlobalVariationsService } from './global-variations.service';

describe('GlobalVariationsService', () => {
  let service: GlobalVariationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVariationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
