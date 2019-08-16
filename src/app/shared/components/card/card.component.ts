import { Component, OnInit, Input, ɵConsole, ContentChildren } from "@angular/core";
import * as util from "../../utils/utils";
import { Router } from "@angular/router";
import { ReturnServerString } from "src/app/services/urlmaker.service";


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss", "../../../shared/css/card.scss"]
})
export class CardComponent implements OnInit {

  @Input() content;

  public server: ReturnServerString = new ReturnServerString();
  public posterImg: string;
  public year: number;
  public showModal: boolean = false;
  public showSpinner: boolean = false;
  public stringLength: number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.loadImage();
    this.verifyContentTitle();
    this.verifyContentYear();

    window.innerWidth < 600 
      ? this.stringLength = 100
      : this.stringLength = 420;

  }

  public verifyContentTitle() {

    this.content.hasOwnProperty('original_title') ?
      this.content.title = this.content.original_title :
      this.content.title = this.content.name;
  }

  public verifyContentYear() {
    this.content.hasOwnProperty('release_date')
      ? this.year = util.getYearFromContent(this.content.release_date)
      : this.year = util.getYearFromContent(this.content.first_air_date);

  }

  public onGoToDetail(content) {
    content.url = this.router.url;
    localStorage.setItem("content", JSON.stringify(content));
    this.router.navigate(["/main/detail"]);
  }

  public onWatchTrailer() {
    this.showModal = true;
  }

  public close() {
    this.showModal = false;
  }

  public loadImage(){

    this.posterImg = this.server.photoSpinner();
    setTimeout(() => {
      this.posterImg = this.server.photoUrl(this.content.poster_path);
    }, 1100)
  }
}
