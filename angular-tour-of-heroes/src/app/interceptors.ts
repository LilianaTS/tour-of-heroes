import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TeapotInterceptor } from './teapot.interceptor';
/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TeapotInterceptor, multi: true },
];
