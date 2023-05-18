import { TestBed } from '@angular/core/testing';

import { GreetingCreatorService } from './greeting-creator.service';

describe('GreetingCreatorService', () => {
  let service: GreetingCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetingCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
