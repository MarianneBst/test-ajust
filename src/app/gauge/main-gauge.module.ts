import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGaugeComponent } from './main-gauge.component';
import { GaugeModule } from 'angular-gauge';
import { ReactiveFormsModule } from '@angular/forms';
import { GaugeService } from './services/gauge.service';



@NgModule({
  declarations: [
    MainGaugeComponent
  ],
  imports: [
    CommonModule,
    GaugeModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    MainGaugeComponent
  ],
  providers: [
    GaugeService
  ]
})
export class MainGaugeModule { }
