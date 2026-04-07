import {Component, OnInit} from '@angular/core';
import {Table} from '../../../shared/component/table/table';
import {InboundFeedInterface} from './inbound-feed.model';
import {InboundFeedService} from './inbound-feed.service';
import {ProgressCardInterface} from '../../../shared/component/progress-card/progress-card.model';
import {ProgressCard} from '../../../shared/component/progress-card/progress-card';

@Component({
  selector: 'app-inbound-feed',
    imports: [
        Table,
        ProgressCard
    ],
  templateUrl: './inbound-feed.html',
  styleUrl: './inbound-feed.css',
})
export class InboundFeed implements OnInit {

    inboundFeeds!: InboundFeedInterface[];
    ingestData!: ProgressCardInterface[];

    constructor(private inboundFeedService: InboundFeedService) {}

    ngOnInit() {
        this.inboundFeeds = this.inboundFeedService.getInboundFeed();
    }

    handleFeed(id: string) {
        this.ingestData = this.inboundFeedService.getIngestData(id);
    }

}
