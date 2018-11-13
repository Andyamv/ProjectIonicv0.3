import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalizacionPage } from './localizacion';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    LocalizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalizacionPage),
  ],
  providers: [
    Geolocation 
  ]
})
export class LocalizacionPageModule {}
