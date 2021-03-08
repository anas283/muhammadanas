import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'work-details', component: WorkDetailsComponent },
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
