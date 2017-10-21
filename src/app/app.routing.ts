import { RouterModule, Routes } from "@angular/router";

import { SplashComponent } from './splash/splash.component';
import { ViewerComponent } from './viewer/viewer.component';

const APP_ROUTES: Routes = [
	{ path: '', component: SplashComponent },
	{ path: 'story/:id', component: ViewerComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// EoF !
