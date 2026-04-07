import {Component, OnInit} from '@angular/core';
import {Table} from '../../../shared/component/table/table';
import {InboundFeedInterface} from './inbound-feed.model';
import {InboundFeedService} from './inbound-feed.service';

@Component({
  selector: 'app-inbound-feed',
    imports: [
        Table
    ],
  templateUrl: './inbound-feed.html',
  styleUrl: './inbound-feed.css',
})
export class InboundFeed implements OnInit {

    inboundData!: InboundFeedInterface[];

    constructor(private inboundFeedService: InboundFeedService) {}

    ngOnInit() {
        this.inboundData = this.inboundFeedService.getInboundFeed();
    }

}
