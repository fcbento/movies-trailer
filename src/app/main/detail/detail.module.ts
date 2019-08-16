import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './detail.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { CreditDetailComponent } from './credit-detail/credit-detail.component';
import { DetailCreditsComponent } from './detail-credits/detail-credits.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DetailComponent,
    DetailInfoComponent,
    CreditDetailComponent,
    DetailCreditsComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule
    
  ]

})
export class DetailModule { }
