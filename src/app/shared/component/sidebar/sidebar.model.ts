export type SidebarMenuType =
| {
    label: string;
    path: string;
    action?: never;
} | {
    label: string;
    action: 'logout';
    path?: never;
};