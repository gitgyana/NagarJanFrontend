import { Injectable } from '@angular/core';
import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';
import {ClassificationDataInterface} from './dashboard.model';

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
    ];

    private classificationData: ClassificationDataInterface[] = [
        { source: 'Mobile App', grievanceId: '#GRV-98210', category: 'Water Supply', confidence: 98, status: 'Auto-Verified', action: 'Verify' },
        { source: 'IVR Service', grievanceId: '#GRV-98211', category: 'Roads & Transit', confidence: 62, status: 'Pending Review', action: 'Re-classify' },
        { source: 'Web Portal', grievanceId: '#GRV-98212', category: 'Sanitation', confidence: 94, status: 'Auto-Verified', action: 'Verify' },
        { source: 'Support Email', grievanceId: '#GRV-98213', category: 'Electricity', confidence: 99, status: 'Auto-Verified', action: 'Verify' },
    ];

    getExecutiveSummary(): LabelCardInterface[] {
        return this.labels;
    }

    getCategoricalInbound(): ProgressCardInterface[] {
        return this.progressData;
    }

    getClassificationData(): ClassificationDataInterface[] {
        return this.classificationData;
    }

}
