import {Component, OnInit} from '@angular/core';
import {WorkOrdersService} from './work-orders.service';
import {GrievanceRecordInterface, TopCriticalDensityInterface} from './work-orders.model';
import {Table} from '../../../shared/component/table/table';

@Component({
  selector: 'app-work-orders',
    imports: [
        Table
    ],
  templateUrl: './work-orders.html',
  styleUrl: './work-orders.css',
})
export class WorkOrders implements OnInit {

    topCriticalDensity!: TopCriticalDensityInterface;
    grievanceRecords!: GrievanceRecordInterface[];

    constructor(private workOrdersService: WorkOrdersService) {}

    ngOnInit() {
        this.topCriticalDensity = this.workOrdersService.getTopCriticalDensity();
        this.grievanceRecords = this.workOrdersService.getGrievanceRecords();
    }

}
