import { MeuPrimeiro2Service } from './meu-primeiro2/meu-primeiro2.service';
import { MeuPrimeiroComponent, MeuSegundoComponent } from './meu-primeiro/meu-primeiro.componente';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    MeuPrimeiro2Component,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MeuPrimeiro2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
