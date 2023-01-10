import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, retry, catchError, map, throwError } from 'rxjs';
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
      catchError((error: HttpErrorResponse) => {
        if (error.status === 418) {
          this.dialog.open(ErrorDialogComponent);
        }
        return throwError(error);
      })
    );
  }
}
