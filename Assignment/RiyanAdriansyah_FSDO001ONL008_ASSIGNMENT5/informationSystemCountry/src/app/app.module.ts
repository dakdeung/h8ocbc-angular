import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CountryDetailComponentComponent } from './components/country-detail-component/country-detail-component.component';
import { AllCountriesComponentComponent } from './components/all-countries-component/all-countries-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CountryDetailComponentComponent,
    AllCountriesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
