// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';

import { HomeDetailsComponent } from './homePageComponents/home-details/home-details.component'
import { ReimagineComponent } from './portfolioProjects/reimagine/reimagine/reimagine.component'

const routes: Routes = [
    {
        path: '',
        component: HomeDetailsComponent,
    },
    {
        path: 'reimagine',
        component: ReimagineComponent,
    },
    // {
    //     path: 'books',
    //     component: BooksComponent
    // },
    // {
    //     path: 'movies',
    //     component: MoviesComponent
    // },
    // {
    //     path: 'dining',
    //     component: DiningComponent
    // },
    // {
    //     path: 'rides',
    //     component: RidesComponent
    // },
    // {
    //     path: 'shops',
    //     component: ShopsComponent
    // },
    // {
    //     path: 'shows',
    //     component: ShowsComponent
    // },

    // // REMOVE WHEN CLEAR
    // {
    //     path: 'quotes',
    //     component: QuotesComponent
    // },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);