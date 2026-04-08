import { Routes } from '@angular/router';
import {Admin} from './admin';
import {Dashboard} from './dashboard/dashboard';
import {WorkOrders} from './work-orders/work-orders';
import {InboundFeed} from './inbound-feed/inbound-feed';
import {DashboardResolver} from './dashboard/dashboard.resolver';

export const ADMIN_ROUTES: Routes = [
    {
        'path': '',
        component: Admin,
        data: { title: 'Admin Dashboard' },

        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                resolve: {
                    dashboardData: DashboardResolver,
                },
                data: { title: 'Dashboard' },
            },

            {
                path: 'inbound-feed',
                component: InboundFeed,
                data: { title: 'Inbound Feed' },
            },

            {
                path: 'work-orders',
                component: WorkOrders,
                data: { title: 'Work Orders' },
            },

            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },
]
