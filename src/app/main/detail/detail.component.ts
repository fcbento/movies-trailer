import { Component, OnInit } from "@angular/core";
import * as util from '../../shared/utils/utils';
import { Actions } from "src/app/models/actions";
import { ReturnServerString } from '../../services/urlmaker.service';
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {

  public movie = {};
  public posterImg: string;
  public posterCredit: string;
  public date: string;
  public credits: any[];
  public showModal: boolean = false;
  public data = [];
  public showSpinner: boolean = false;
  public p: number;
  public actions: Actions = new Actions();
  public url: string;
  public server: ReturnServerString = new ReturnServerString();

  constructor(public service: GenericService) { }

  ngOnInit() {

    let content = JSON.parse(localStorage.getItem("content"));
    this.getDetail(content);
    this.getCredits(content);
    this.loadSpinner();
  }

  public getDetail(content) {

    this.service.getDetail(content, this.getActionDetail(content.url)).subscribe(data => {

      this.data = [{ data }];
      this.movie = data;
      this.posterImg = this.server.photoUrl(this.movie['poster_path']);
    });
  }

  public getCredits(content) {
    this.service.getAllCredits(content, this.getActionCredits(content.url)).subscribe(data => {
      this.credits = data['cast'];
    });
  }

  public showTrailer() {
    this.showModal = true;
  }

  public close() {
    this.showModal = false;
  }

  public loadSpinner() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 1500);
  }

  public getActionDetail(url) {
    switch (url) {
      case "/main/series":
        return this.actions.DetailSerie;
      case "/main/searchseries":
        return this.actions.DetailSerie;
      case "/main/trendingseries":
        return this.actions.DetailSerie;
      case "/main/movies":
        return this.actions.DetailMovie;
      case "/main/searchmovies":
        return this.actions.DetailMovie;
      case "/main/trendingmovies":
        return this.actions.DetailMovie;
      case "/main/people":
        return this.actions.DetailMovie;
      case "/main/trendingpeople":
        return this.actions.DetailMovie;
    }

  }

  public getActionCredits(url) {

    switch (url) {
      case "/main/series":
        return this.actions.SerieCredits;
      case "/main/searchseries":
        return this.actions.SerieCredits;
      case "/main/trendingseries":
        return this.actions.SerieCredits;
      case "/main/movies":
        return this.actions.MovieCredits;
      case "/main/searchmovies":
        return this.actions.MovieCredits;
      case "/main/trendingmovies":
        return this.actions.MovieCredits;
      case "/main/people":
        return this.actions.MovieCredits;
      case "/main/trendingpeople":
        return this.actions.MovieCredits;
    }

  }
}
