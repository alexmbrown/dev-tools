import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    // material
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
