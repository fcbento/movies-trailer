import { Component, OnInit, Input } from '@angular/core';
import * as util from '../../../shared/utils/utils';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  @Input() contentDetail: any;
  public year: string;

  constructor() { }

  ngOnInit() {
    this.verifyContentTitle();
    this.verifyContentYear();
  }

  public verifyContentTitle() {

    this.contentDetail.hasOwnProperty('original_title') ?
      this.contentDetail.title = this.contentDetail.original_title :
      this.contentDetail.title = this.contentDetail.name;
  }

  public verifyContentYear() {
    this.contentDetail.hasOwnProperty('release_date') ?
      this.year = util.getYearFromContent(this.contentDetail.release_date) :
      this.year = util.getYearFromContent(this.contentDetail.first_air_date);
  }

}
