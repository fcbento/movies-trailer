import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthGuardService } from '../services/auth-guard.service';

import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { DetailComponent } from './detail/detail.component';
import { CreditDetailComponent } from './detail/credit-detail/credit-detail.component';
import { SearchComponent } from './search/search.component';
import { PeopleComponent } from './people/people.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {
    path: 'main', component: MenuComponent, /*canActivate: [AuthGuardService],*/
    children: [
        { path: 'movies', component: MoviesComponent, /*canActivate: [AuthGuardService]*/ },
        { path: 'detail', component: DetailComponent},
        { path: 'credit', component: CreditDetailComponent},
        { path: 'series', component: SeriesComponent},
        { path: 'searchmovies', component: SearchComponent},
        { path: 'searchseries', component: SearchComponent},
        { path: 'searchpeople', component: SearchComponent},
        { path: 'people', component: PeopleComponent},
        { path: 'trendingall', component: TrendingComponent},
        { path: 'trendingmovies', component: TrendingComponent},
        { path: 'trendingseries', component: TrendingComponent},
        { path: 'trendingpeople', component: TrendingComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
