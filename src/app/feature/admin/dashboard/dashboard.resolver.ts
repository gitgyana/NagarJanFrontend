import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {DashboardDataInterface} from './dashboard.model';
import {Observable} from 'rxjs';
import {DashboardService} from './dashboard.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardResolver implements Resolve<DashboardDataInterface>{

    constructor(private dashboardService: DashboardService) {}

    resolve(): Observable<DashboardDataInterface> {
        return this.dashboardService.getDashboardStream();
    }

}
