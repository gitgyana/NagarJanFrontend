import { Injectable } from '@angular/core';
import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';

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

    getExecutiveSummary(): LabelCardInterface[] {
        return this.labels;
    }

}
