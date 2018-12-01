import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../shared/modules/custom-material/custom-material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './heroes-search/hero-search.component';
import { HeroDetailComponent } from './heroes-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    HeroesRoutingModule
  ],
  declarations: [
    MessagesComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent
  ],
  providers: [HeroService, MessageService],
  exports: [
    // HeroesComponent
  ]
})
export class HeroesModule {}
