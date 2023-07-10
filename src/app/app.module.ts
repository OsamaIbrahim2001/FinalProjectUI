import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { UnitCardComponent } from './Component/home-page/unit-card/unit-card.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryComponent } from './Component/home-page/category/category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CityComponent } from './Component/home-page/city/city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UnitCardComponent,
    CategoryComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
