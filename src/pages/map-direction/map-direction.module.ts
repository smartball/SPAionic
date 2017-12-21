import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapDirectionPage } from './map-direction';

@NgModule({
  declarations: [
    MapDirectionPage,
  ],
  imports: [
    IonicPageModule.forChild(MapDirectionPage),
  ],
})
export class MapDirectionPageModule {}
