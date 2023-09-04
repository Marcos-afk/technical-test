import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';

import { UnauthorizedError } from '../types/unauthorized-request-error';

import { catchError, Observable } from 'rxjs';

@Injectable()
export class UnauthorizedRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof UnauthorizedError) {
          throw new UnauthorizedException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
