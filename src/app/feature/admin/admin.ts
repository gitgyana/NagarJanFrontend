import {Component} from '@angular/core';
import {ScreenUI} from '../../shared/ui/screen-ui/screen-ui';
import {Sidebar} from '../../shared/component/sidebar/sidebar';
import {Header} from '../../shared/component/header/header';
import {RouterOutlet} from '@angular/router';
import {MainFrame} from '../../shared/ui/main-frame/main-frame';
import {SidebarMenuType} from '../../shared/component/sidebar/sidebar.model';

@Component({
    selector: 'app-admin',
    imports: [
        ScreenUI,
        Sidebar,
        Header,
        RouterOutlet,
        MainFrame
    ],
    templateUrl: './admin.html',
    styleUrl: './admin.css',
})
export class Admin {
    sidebarMenu: SidebarMenuType[] = [
        { label: "Dashboard", path: "dashboard" },
        { label: "Onboard", path: "onboard" },
        { label: "Analytics", path: "analytics" },
        { label: "Audit", path: "audit" },
        { label: "Recovery", path: "recovery" },
        { label: "Tickets", path: "tickets" },
        { label: "LogOut", action: "logout" },
    ];
}
