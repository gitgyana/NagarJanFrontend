import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-screen-ui',
    template: '<ng-content />',
    styleUrl: './screen-ui.css',
    encapsulation: ViewEncapsulation.None,
})
export class ScreenUI {}
