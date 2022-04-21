import { TestBed } from '@angular/core/testing';
import { FieldThemeService } from './field-theme.service';

describe('FieldThemeService', () => {
  let service: FieldThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
