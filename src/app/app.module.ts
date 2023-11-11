import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importar modulos creados
import { HeroesModule } from './heroes/heroe.module';
import { ContadorModule } from './contadores/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Agrego modulos creados
    HeroesModule,
    ContadorModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
