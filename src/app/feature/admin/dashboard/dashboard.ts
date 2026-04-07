import {Component, OnInit} from '@angular/core';
import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';
import {LabelCard} from '../../../shared/component/label-card/label-card';
import {DashboardService} from './dashboard.service';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';
import {ProgressCard} from '../../../shared/component/progress-card/progress-card';
import {Table} from '../../../shared/component/table/table';

@Component({
    selector: 'app-dashboard',
    imports: [LabelCard, ProgressCard, Table],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

    labelData!: LabelCardInterface[];
    progressData!: ProgressCardInterface[];

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.labelData = this.dashboardService.getExecutiveSummary();
        this.progressData = this.dashboardService.getCategoricalInbound();
    }

}
