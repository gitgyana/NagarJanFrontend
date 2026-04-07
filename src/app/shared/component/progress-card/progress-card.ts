import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-progress-card',
    imports: [],
    templateUrl: './progress-card.html',
    styleUrl: './progress-card.css'
})
export class ProgressCard implements OnChanges {
    @Input({ required: true }) label!: string;
    @Input({ required: true }) labelValue!: number;
    @Input() target?: string;
    @Input() targetValue: number = 100;

    percentage: number = 0;

    ngOnChanges() {
        if (this.targetValue !== 0) {
            this.percentage = Math.round((this.labelValue / this.targetValue) * 100);
        }
    }
}
