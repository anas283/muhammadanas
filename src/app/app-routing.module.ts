import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'work', component: WorkComponent },
	{ path: 'work-details', component: WorkDetailsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: HomeComponent }
];

@NgModule({
  	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled'
		})
	],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
