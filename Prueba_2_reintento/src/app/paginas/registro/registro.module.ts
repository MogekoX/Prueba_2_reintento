import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { DirectivasService } from 'src/app/servicios/directivas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPage],

  providers: [DirectivasService]
})
export class RegistroPageModule {}
