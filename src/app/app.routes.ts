import { Routes } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
    },
    {
        path: "landingpage",
        component: LandingPageComponent
    }
];
