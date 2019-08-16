import { Component, OnInit } from '@angular/core';
import { Actions } from 'src/app/models/actions';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  public series: any[];
  public actions: Actions = new Actions();
  public p: number;
  public showSpinner: boolean = false;

  constructor(public service: GenericService) { }

  ngOnInit() {

    this.loadSpinner();

    this.service.getPopular(this.actions.PopularSeries).subscribe(data => {
      this.series = data['results'];
    });
  }

  public loadSpinner(){
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner = false
    }, 1500);
  }

}
