import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnServerString } from 'src/app/services/urlmaker.service';

@Component({
  selector: 'app-detail-credits',
  templateUrl: './detail-credits.component.html',
  styleUrls: ['./detail-credits.component.scss']
})
export class DetailCreditsComponent implements OnInit {

  @Input() credit: any;
  @ViewChild('creditInfo') creditInfo: ElementRef;
  public posterImg: string;
  public server: ReturnServerString = new ReturnServerString();

  constructor(public router: Router) { }

  ngOnInit() {
    this.posterImg = this.server.photoUrl(this.credit.profile_path)
  }

  public onLoadCreditInfo(credit) {
    localStorage.setItem('creditId', JSON.stringify(credit.credit_id));
    this.router.navigateByUrl("main/credit");
  }

}
