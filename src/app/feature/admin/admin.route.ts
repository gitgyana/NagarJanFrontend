import { Routes } from '@angular/router';
import {Admin} from './admin';
import {Dashboard} from './dashboard/dashboard';
import {WorkOrders} from './work-orders/work-orders';
import {InboundFeed} from './inbound-feed/inbound-feed';

export const ADMIN_ROUTES: Routes = [
    {
        'path': '',
        component: Admin,
        data: { title: 'Admin Dashboard' },

        children: [
            {
                path: 'dashboard',
                component: Dashboard,
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
