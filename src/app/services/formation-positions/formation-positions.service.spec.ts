import { TestBed } from '@angular/core/testing';

import { FormationPositionsService } from './formation-positions.service';

describe('FormationPositionsService', () => {
  let service: FormationPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
