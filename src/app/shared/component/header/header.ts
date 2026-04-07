import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import {SetupInterface} from '../../../code/models/setup.model';


@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
    @Input() organisationLogo?: string;

    breadcrumb: string = '';
    currentTab: string = '';

    userData!: SetupInterface;

    private destroy$ = new Subject<void>();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.userData = {
            status: true,
            data: {
                firstName: 'to NagarJan',
                profileImage: 'https://placehold.co/50x50',
                initialSetup: true,
            }
        } // TODO: this.route.snapshot.data['initialSetupData'];

        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.processUrl(this.router.url);
                this.updateRouteTitle();
            });

        this.processUrl(this.router.url);
        this.updateRouteTitle();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private processUrl(url: string): void {
        const segments = url
            .split('/')
            .filter(Boolean)
            .map((seg) => this.capitalize(seg.replace('-', ' ')));

        this.breadcrumb = segments.join(' > ');
    }

    private updateRouteTitle(): void {
        let route = this.route;

        while (route.firstChild) {
            route = route.firstChild;
        }

        route.data.subscribe((data) => {
            this.currentTab = data?.['title'] || '';
        });
    }

    private capitalize(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    get userName(): string {
        return this.userData.data.firstName || 'User';
    }

    get profileImage(): string {
        return this.userData.data.profileImage || 'https://placehold.co/50x50';
    }
}
