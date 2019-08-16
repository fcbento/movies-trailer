import { Component, OnInit, Output, Input, ɵConsole } from "@angular/core";
import { Actions } from "src/app/models/actions";
import * as util from '../../shared/utils/utils';
import { GenericService } from "src/app/services/generic.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {


  public movies: any[];
  public showSpinner: boolean = false;
  public actions: Actions = new Actions();
  public p: number;

  constructor(public service: GenericService) { }

  ngOnInit() {

    this.loadSpinner();
    
    this.service.getPopular(this.actions.PopularMovies).subscribe(data => {
        this.movies = data["results"];
    });
  }

  public loadSpinner(){
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner = false
    }, 1000);
  }
  
}
