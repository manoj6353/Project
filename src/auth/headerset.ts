import { HttpService } from '@nestjs/axios';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { LocalStorage } from 'node-localstorage';
global.localStorage = new LocalStorage('./scratch');

@Injectable()
export class HttpServiceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): any {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    const id = localStorage.getItem('id');
    console.log({ request });

    if (token) {
      // decode token
      // request.headers['authorization'] = `Bearer ${id}`;
    }

    return next.handle();
  }
  // constructor(private httpService: HttpService) {}
  // intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
  //   const ctx = context.switchToHttp();
  //   const token = localStorage.getItem('id');
  //   // const token = ctx.getRequest().headers['authorization'];
  //   console.log('========', token);
  //   if (ctx) {
  //     this.httpService.axiosRef.defaults.headers.common[
  //       'authorization'
  //     ] = `Bearer ${token}`;
  //   }
  //   return next.handle().pipe();
  // }
}
