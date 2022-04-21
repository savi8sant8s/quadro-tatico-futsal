import { TestBed } from '@angular/core/testing';

import { PlayerThemeService } from './player-theme.service';

describe('PlayerThemeService', () => {
  let service: PlayerThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
