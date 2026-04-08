import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboardDataInterface} from './dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

    constructor(private http: HttpClient) {}

    getDashboardStream(): Observable<DashboardDataInterface> {
        return this.http.get<DashboardDataInterface>('/api/dashboard', { withCredentials: true });
    }

}
