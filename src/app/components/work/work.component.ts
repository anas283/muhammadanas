import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
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
