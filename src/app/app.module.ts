import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './modules/home/home.component';
import { VegitablesComponent } from './modules/vegitables/vegitables.component';
import { FruitsComponent } from './modules/fruits/fruits.component';
import { GroceryComponent } from './modules/grocery/grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VegitablesComponent,
    FruitsComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
