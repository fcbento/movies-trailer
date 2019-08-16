import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from 'src/app/models/actions';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  public actions: Actions = new Actions();
  public url: string;
  public people: any[];
  public media: any[];
  public displayPeople: boolean = false;
  public displayMedia: boolean = false;
  public displayAll: boolean = false;
  
  constructor(public router: Router, public service: GenericService) { }

  ngOnInit() {

    this.router.url === '/main/trendingall' ? this.url = this.actions.TrendingAll : "";
    this.router.url === '/main/trendingmovies' ? this.url = this.actions.TrendingMovie : "";
    this.router.url === '/main/trendingseries' ? this.url = this.actions.TrendingSerie : "";
    this.router.url === '/main/trendingpeople' ? this.url = this.actions.TrendingPeople : "";

    this.getTrending(this.url);
  }

  public getTrending(url) {

    this.service.getTrending(url, '/day').subscribe((data) => {

      if (this.router.url === '/main/trendingmovies' || this.router.url === '/main/trendingseries') {
        this.media = data['results'];
        this.displayMedia = true;
      }

      if (this.router.url === '/main/trendingpeople') {
        this.people = data['results'];
        this.displayPeople = true;
      }

      if (this.router.url === '/main/trendingall') {
        this.displayAll = true;
      }

    });
  }

}
