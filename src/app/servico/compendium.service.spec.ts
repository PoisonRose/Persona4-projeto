import { TestBed } from '@angular/core/testing';

import { CompendiumService } from './compendium.service';

describe('CompendiumService', () => {
  let service: CompendiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompendiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
