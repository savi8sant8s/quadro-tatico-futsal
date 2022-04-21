import { TestBed } from '@angular/core/testing';
import { CourtThemeService } from './court-theme.service';

describe('CourtThemeService', () => {
  let service: CourtThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
