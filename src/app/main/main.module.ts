import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MainRoutingModule } from './main.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DetailModule } from './detail/detail.module';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PeopleComponent } from './people/people.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [
    MenuComponent,
    SearchComponent,
    MoviesComponent, 
    SeriesComponent,
    SearchComponent,
    PeopleComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MainRoutingModule,
    FormsModule,
    DetailModule,
    NgxPaginationModule
  ],
  providers: [AuthGuardService]
})
export class MainModule { }
