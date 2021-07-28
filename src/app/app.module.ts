import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { SubtotalComponent } from './subtotal/subtotal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SubtotalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ItemsComponent,
    SubtotalComponent
  ]
})
export class AppModule { }
