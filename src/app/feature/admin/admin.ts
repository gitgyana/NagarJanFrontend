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
        { label: "Inbound Feed", path: "inbound-feed" },
        { label: "Classification", path: "classification" },
        { label: "Work Orders", path: "work-orders" },
        { label: "LogOut", action: "logout" },
    ];
}
