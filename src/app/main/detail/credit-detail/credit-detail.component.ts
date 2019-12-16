import { Component, OnInit, Input } from '@angular/core';
import { ReturnServerString } from 'src/app/services/urlmaker.service';
import { Actions } from 'src/app/models/actions';
import * as util from "../../../shared/utils/utils";
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.scss']
})
export class CreditDetailComponent implements OnInit {

  public creditId: string = JSON.parse(localStorage.getItem('creditId'));
  public person = <any>{};
  public showSpinner: boolean = false;
  public posterImg: string;
  public server: ReturnServerString = new ReturnServerString();
  public actions: Actions = new Actions();
  public bio: string = '';

  constructor(public service: GenericService) { }

  ngOnInit() {
    this.loadSpinner();
    this.service.getSingleCredit(this.creditId, this.actions.Credit).subscribe((data) => {
      this.person = data['person'];

      this.posterImg = this.server.photoUrl(this.person.profile_path);

      this.service.getPerson(this.person.id, this.actions.Person).subscribe(data => {
        this.person.bio = data;
        this.bio = this.person.bio.biography;
        console.log(this.bio)
      });
    });
  }

  public loadSpinner() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 1500);
  }
}
