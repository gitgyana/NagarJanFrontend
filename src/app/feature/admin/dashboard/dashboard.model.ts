import {LabelCardInterface} from '../../../shared/component/label-card/label-card.model';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';

export interface ClassificationDataInterface {
    dataId: string;
    source: string;
    grievanceId: string;
    category: string;
    confidence: number;
    status: string;
    action: string;
}

export interface DashboardDataInterface {
    labels: LabelCardInterface[];
    categoryData: ProgressCardInterface[];
    classificationTable: ClassificationDataInterface[];
}
