import { TestBed } from '@angular/core/testing';

import { TeapotInterceptor } from './teapot.interceptor';

describe('TeapotInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TeapotInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TeapotInterceptor = TestBed.inject(TeapotInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
