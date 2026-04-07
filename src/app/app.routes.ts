import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./feature/admin/admin.route").then((m) => m.ADMIN_ROUTES),
    }
];
