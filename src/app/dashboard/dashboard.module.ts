import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/modules/custom-material/custom-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { HeroService, MessageService } from '../heroes';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, CustomMaterialModule],
  declarations: [DashboardComponent],
  providers: [HeroService, MessageService]
})
export class DashboardModule {}
