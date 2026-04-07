import {Injectable} from '@angular/core';
import {InboundFeedInterface} from './inbound-feed.model';

@Injectable({
    providedIn: 'root',
})
export class InboundFeedService {
    private inboundData: InboundFeedInterface[] = [
        { dataId: '1', source: 'app', grievanceId: 'GR-82910', timestamp: '14:02:11', rawContent: 'The streetlight at the corner of Oak & 5th has been flickering...', deduplication: 'UNIQUE', category: 'Street Lighting', action: 'View Original' },
        { dataId: '2', source: 'email', grievanceId: 'GR-82911', timestamp: '14:03:45', rawContent: 'Fwd: Broken pipe reported near the community center. Water is...', deduplication: 'DUPLICATE OF #712', category: 'Water Supply', action: 'Manual Review' },
        { dataId: '3', source: 'social', grievanceId: 'GR-82912', timestamp: '14:05:01', rawContent: '@CitySpringfield pothole on Main St is getting dangerous. Please fix!', deduplication: 'MERGED', category: 'Road Maintenance', action: 'View Original' },
        { dataId: '4', source: 'call', grievanceId: 'GR-82913', timestamp: '14:07:22', rawContent: 'Caller reporting missed trash pickup for the entire block at...', deduplication: 'UNIQUE', category: 'Waste Management', action: 'View Original' },
        { dataId: '5', source: 'email', grievanceId: 'GR-82914', timestamp: '14:10:59', rawContent: 'Urgent: Traffic signal at Westend is stuck on red for 10 mins...', deduplication: 'HIGH CONFLICT', category: 'Traffic Signal', action: 'Force Manual' }
    ];

    getInboundFeed(): InboundFeedInterface[] {
        return this.inboundData;
    }
}
