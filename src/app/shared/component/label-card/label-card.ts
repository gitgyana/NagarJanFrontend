import {Component, Input } from '@angular/core';
import {LABEL_CARD_TYPE_STRING} from './label-card.model';

@Component({
  selector: 'app-label-card',
  imports: [],
  templateUrl: './label-card.html',
  styleUrl: './label-card.css',
})
export class LabelCard {
    @Input({ required: true }) label!: string;
    @Input({ required: true }) value!: string;
    @Input({ required: true }) type!: LABEL_CARD_TYPE_STRING

    private iconMap: Record<LABEL_CARD_TYPE_STRING, string> = {
        data: '/icons/icon-data.svg',
        ai: '/icons/icon-ai.svg',
        classification: '/icons/icon-classification.svg',
        pending: '/icons/icon-pending.svg',
    };

    get getImageSrc() {
        return this.iconMap[this.type];
    }
}
