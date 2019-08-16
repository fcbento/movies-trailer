import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from 'src/app/models/actions';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public displaySearchedItems: boolean = false;
  public displaySearchedPeople: boolean = false;
  public contents: any[];
  public urlName: string;
  public searchType: string;
  public actions: Actions = new Actions();
  public p: number;

  constructor(public service: GenericService, public router: Router) { }

  ngOnInit() {
    this.router.url === '/main/searchmovies' ? this.searchType = 'movies' : '';
    this.router.url === '/main/searchseries' ? this.searchType = 'series' : '';
    this.router.url === '/main/searchpeople' ? this.searchType = 'people' : '';
  }

  public onSearch(event: any) {

    this.router.url === '/main/searchmovies' ? this.urlName = this.actions.SearchMovie : '';
    this.router.url === '/main/searchseries' ? this.urlName = this.actions.SearchSerie : '';
    this.router.url === '/main/searchpeople' ? this.urlName = this.actions.SearchPeople : '';

    this.service.searchItem(event.target.value, this.urlName).subscribe(data => {

      if (this.router.url === '/main/searchmovies' || this.router.url === '/main/searchseries') {

        this.contents = data['results'];
        this.displaySearchedItems = true;
      }

      if (this.router.url === '/main/searchpeople') {
        this.contents = data['results'];
        this.displaySearchedPeople = true;
      }

    });
  }

}
