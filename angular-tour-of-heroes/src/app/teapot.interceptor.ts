import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, retry, catchError, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable()
export class TeapotInterceptor implements HttpInterceptor {
  public isDialogOpen: Boolean = false;

  constructor(private dialog: MatDialog) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('0');

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        console.log('1');
        console.log(event instanceof HttpResponse);
        console.log(event instanceof HttpErrorResponse);

        if (event instanceof HttpResponse) {
          console.log('2');
          if (event.status === 418) {
            console.log('open dialog');
            this.dialog.open(ErrorDialogComponent);
          } else if (event instanceof HttpErrorResponse) {
            if (event.status === 418) {
              this.dialog.open(ErrorDialogComponent);
            }
          }
        }
        return event;
      })
    );
  }
}
