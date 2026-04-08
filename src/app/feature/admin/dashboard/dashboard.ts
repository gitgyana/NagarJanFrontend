import {Component, OnInit} from '@angular/core';
import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';
import {LabelCard} from '../../../shared/component/label-card/label-card';
import {DashboardService} from './dashboard.service';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';
import {ProgressCard} from '../../../shared/component/progress-card/progress-card';
import {Table} from '../../../shared/component/table/table';
import {ClassificationDataInterface, DashboardDataInterface} from './dashboard.model';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    imports: [LabelCard, ProgressCard, Table],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

    labelData!: LabelCardInterface[];
    progressData!: ProgressCardInterface[];
    classificationData!: ClassificationDataInterface[];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        const res: DashboardDataInterface = this.route.snapshot.data['dashboardData'];

        this.labelData = res.labels;
        this.progressData = res.categoryData;
        this.classificationData = res.classificationTable;
    }

}
