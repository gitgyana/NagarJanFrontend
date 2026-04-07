import {Component, OnInit} from '@angular/core';
import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';
import {LabelCard} from '../../../shared/component/label-card/label-card';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
    imports: [
        LabelCard
    ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

    labelData!: LabelCardInterface[];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.labelData = this.dashboardService.getExecutiveSummary();
    }

}
