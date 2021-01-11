import { TestBed } from '@angular/core/testing';

import { MakepollService } from './makepoll.service';

describe('MakepollService', () => {
  let service: MakepollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakepollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
