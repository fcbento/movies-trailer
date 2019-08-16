import { Component, OnInit } from '@angular/core';
import { Actions } from 'src/app/models/actions';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public actions: Actions = new Actions();
  public people: any[];
  public p: any;

  constructor(public service: GenericService) { }

  ngOnInit() {
    this.service.getPopular(this.actions.People).subscribe(data => this.people = data['results']);
  }

}
