import { Component, OnInit, Input } from '@angular/core';
import { ReturnServerString } from 'src/app/services/urlmaker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-people',
  templateUrl: './card-people.component.html',
  styleUrls: ['./card-people.component.scss']
})
export class CardPeopleComponent implements OnInit {
  
  @Input() content;
  public posterImg: string;
  public server: ReturnServerString = new ReturnServerString();
  public showModal: boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
    this.posterImg = this.server.photoUrl(this.content['profile_path'])
  } 

  public onLoadInfo(content) {
    this.showModal = true;
  }

  public close() {
    this.showModal = false;
  }

}
