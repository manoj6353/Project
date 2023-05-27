import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HttpServiceInterceptor implements NestInterceptor {
    private httpService;
    constructor(httpService: HttpService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
