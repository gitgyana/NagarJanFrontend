import { Component } from '@angular/core';

@Component({
    selector: 'app-main-frame',
    imports: [],
    template: '<div class="section-frame"><ng-content></ng-content></div>',
    styleUrl: './main-frame.css',
})
export class MainFrame {}
