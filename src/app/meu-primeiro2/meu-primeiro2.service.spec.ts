import { TestBed } from '@angular/core/testing';

import { MeuPrimeiro2Service } from './meu-primeiro2.service';

describe('MeuPrimeiro2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeuPrimeiro2Service = TestBed.get(MeuPrimeiro2Service);
    expect(service).toBeTruthy();
  });
});
