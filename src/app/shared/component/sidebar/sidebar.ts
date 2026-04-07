import { Component, Input } from "@angular/core";
import { Router, RouterLink, RouterLinkActive, ActivatedRoute } from "@angular/router";

import { type SidebarMenuType } from "./sidebar.model";

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
})
export class Sidebar {

    @Input({ required: true }) menu!: SidebarMenuType[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    handleClick(item: any) {
        if(item.action === 'logout') {
            // TODO: Logout Logic
        } else {
            this.router.navigate([item.path], {
                relativeTo: this.route
            });
        }
    }
}
