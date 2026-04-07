import {Injectable} from '@angular/core';
import {InboundFeedInterface} from './inbound-feed.model';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';

@Injectable({
    providedIn: 'root',
})
export class InboundFeedService {
    private inboundData: InboundFeedInterface[] = [
        { dataId: '1', source: 'app', grievanceId: 'GR-82910', timestamp: '14:02:11', rawContent: 'The streetlight at the corner of Oak & 5th has been flickering...', status: 'PENDING', category: 'Street Lighting', action: 'View Original' },
        { dataId: '2', source: 'email', grievanceId: 'GR-82911', timestamp: '14:03:45', rawContent: 'Fwd: Broken pipe reported near the community center. Water is...', status: 'RESOLVED', category: 'Water Supply', action: 'Manual Review' },
        { dataId: '3', source: 'social', grievanceId: 'GR-82912', timestamp: '14:05:01', rawContent: '@CitySpringfield pothole on Main St is getting dangerous. Please fix!', status: 'RESOLVED', category: 'Road Maintenance', action: 'View Original' },
        { dataId: '4', source: 'call', grievanceId: 'GR-82913', timestamp: '14:07:22', rawContent: 'Caller reporting missed trash pickup for the entire block at...', status: 'PENDING', category: 'Waste Management', action: 'View Original' },
        { dataId: '5', source: 'email', grievanceId: 'GR-82914', timestamp: '14:10:59', rawContent: 'Urgent: Traffic signal at Westend is stuck on red for 10 mins...', status: 'IN PROGRESS', category: 'Traffic Signal', action: 'Force Manual' }
    ];

    private ingestData: ProgressCardInterface[] = [
        { label: 'Transcription', labelValue: 82, description: "Audio record: Voicemail_72.mp3" },
        { label: 'NLP Classification', labelValue: 45, description: "Ref: Email_Ingest_4412" },
        { label: 'Deduplication', labelValue: 15, description: "Ref: App_Post_9918" },
    ];

    getInboundFeed(): InboundFeedInterface[] {
        return this.inboundData;
    }

    getIngestData(id: string): ProgressCardInterface[] {
        return this.ingestData;
    }

}
