import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-work-details',
	templateUrl: './work-details.component.html',
	styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

	title: any;
	image: any;
	description: any;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private _location: Location
	) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			if(params['work'] === 'preztel-dashboard') {
				this.title = "Preztel Dashboard";
				this.image = ".././../../assets/images/works/new_dashboard.png"
				this.description = "This is my first web design in 2021, it took me 2 days to find inspiration and design this."
			} 
			else if(params['work'] === 'manage-landing-page') {
				this.title = "Manage Landing Page";
				this.image = ".././../../assets/images/works/manage-landing-page.png"
				this.description = "Disclaimer: This is not my design. Design are provided by Frontend Mentor. I build this for fun to improve my skills"
			} 
			else if(params['work'] === 'sales-dashboard') {
				this.title = "Sales Dashboard";
				this.image = ".././../../assets/images/works/old_dashboard.png"
				this.description = "Sales dashboard are one of my design in 2020, I'm still learning web design at that time."
			}
		})
	}

	visitWork() {
		if(this.title == "Preztel Dashboard") {
			// wip
		}
		else if(this.title == "Manage Landing Page") {
			window.open("https://manage-landing-page-master-plum.vercel.app/", "_blank")
		}
		else if(this.title == "Sales Dashboard") {
			window.open("https://sales-dashboard.netlify.app/", "_blank")
		}
	}

	openAbout() {
		this.router.navigateByUrl('/about');
	}

	goBack() {
		this._location.back();
	}

}
