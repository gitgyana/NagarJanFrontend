import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-table',
    imports: [],
    template: '<ng-content></ng-content>',
    styleUrl: './table.css',
    encapsulation: ViewEncapsulation.None
})
export class Table {

}
