import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../shared/modules';
import { LayoutRoutingModule } from './layout-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from './layout.component';
import { HeaderComponent, FooterComponent, SidenavComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CustomMaterialModule
    // NgbModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class LayoutModule {}
