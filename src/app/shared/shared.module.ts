import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from '../main/main.routing.module';
import { ShortenStringPipe } from './pipes/shorten-string.pipe';
import { ModalTrailerComponent } from './components/modal-trailer/modal-trailer.component';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardPeopleComponent } from './components/card-people/card-people.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CardComponent,
    ShortenStringPipe,
    ModalTrailerComponent,
    SpinnerComponent,
    CardPeopleComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxPaginationModule
  ],
  
  exports: [
    CardComponent,
    ModalTrailerComponent,
    SpinnerComponent,
    CardPeopleComponent
  ]
})
export class SharedModule { }
