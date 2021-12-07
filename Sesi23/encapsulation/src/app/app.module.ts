import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmulatedEncapsulationComponent } from './components/emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './components/no-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/shadow-dom-encapsulation/shadow-dom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
