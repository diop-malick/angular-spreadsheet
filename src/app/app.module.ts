import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ExcelComponent } from './excel/excel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SheetjsComponent } from './sheetjs/sheetjs.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './heroes-search/hero-search.component';
import { HeroDetailComponent } from './heroes-detail/hero-detail.component';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { ExcelService } from './excel/excel.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    DashboardComponent,
    SheetjsComponent,
    HeroesComponent,
    MessagesComponent,
    HeroSearchComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [HeroService, ExcelService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
