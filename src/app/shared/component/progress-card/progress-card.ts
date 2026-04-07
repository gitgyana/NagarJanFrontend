import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-progress-card',
    imports: [],
    templateUrl: './progress-card.html',
    styleUrl: './progress-card.css'
})
export class ProgressCard implements OnInit {
    @Input({ required: true }) label!: string;
    @Input({ required: true }) labelValue!: number;
    @Input() description?: string;

    targetValue: number = 100;
    percentage: number = 0;

    ngOnInit() {
        this.percentage = Math.round((this.labelValue / this.targetValue) * 100);
    }
}
