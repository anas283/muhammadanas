import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

	scroll(el: HTMLElement) {
		el.scrollIntoView({ behavior: 'smooth' });
	}

	openWork() {
        this.router.navigate(['/work-details'], { queryParams: { work: 'preztel-dashboard' } });
	}

    openWorkDetails(work: any) {
		if(work == 'preztel') {
			this.router.navigate(['/work-details'], { queryParams: { work: 'preztel-dashboard' } });
		} else if(work == 'manage') {
			this.router.navigate(['/work-details'], { queryParams: { work: 'manage-landing-page' } });
		} else if(work == 'sales') {
			this.router.navigate(['/work-details'], { queryParams: { work: 'sales-dashboard' } });
		}
	}
}
