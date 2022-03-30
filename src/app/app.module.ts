import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainGaugeModule } from './gauge/main-gauge.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
