import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { LayoutComponent } from './layout/layout.component';
//import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent, HeaderComponent } from './layout';
//import { ContentComponent } from './layout/content/content.component';
import {PageLayoutModule} from "./layout/page-layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      PageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
