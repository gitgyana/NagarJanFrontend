import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    private baseUrl = environment.apiBaseUrl;

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.startsWith('http')) {
            return next.handle(req);
        }

        const apiReq = req.clone({
            url: `${this.baseUrl}${req.url}`,
            withCredentials: true,
        });

        return next.handle(apiReq);
    }
}
