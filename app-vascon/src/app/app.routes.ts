import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { AppPage } from './app-page/app-page';

export const routes: Routes = [
    {
        path: '' , 
        component: Home
    },

    {
        path: 'sobre',
        component: About
    }
    ,
    {
        path: 'pagina',
        component: AppPage
    }
];


