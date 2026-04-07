import { Injectable } from '@angular/core';
import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

    private labels: LabelCardInterface[] = [
        { label: 'Total Inbound (Today)', value: '1402', type: "data"},
        { label: 'Auto-classified', value: '94.2%', type: "classification"},
        { label: 'AI Confidence Score', value: '0.98', type: "ai"},
        { label: 'Pending Work-Orders', value: '247', type: "pending"},
    ];

    private progressData: ProgressCardInterface[] = [
        { label: 'Water Supply', labelValue: 42 },
        { label: 'Sanitation', labelValue: 28 },
        { label: 'Roads & Transit', labelValue: 15 },
        { label: 'Electricity', labelValue: 15 },
    ]

    getExecutiveSummary(): LabelCardInterface[] {
        return this.labels;
    }

    getCategoricalInbound(): ProgressCardInterface[] {
        return this.progressData;
    }

}
