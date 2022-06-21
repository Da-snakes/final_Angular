import { TestBed } from '@angular/core/testing';

import { ProjetGuard } from './projet.guard';

describe('ProjetGuard', () => {
  let guard: ProjetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProjetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
