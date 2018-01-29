import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimatePage } from './estimate';

@NgModule({
  declarations: [
    EstimatePage,
  ],
  imports: [
    IonicPageModule.forChild(EstimatePage),
  ],
})
export class EstimatePageModule {}
