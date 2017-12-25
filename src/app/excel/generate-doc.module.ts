import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../shared/modules/custom-material/custom-material.module';
import { GenerateDocRoutingModule } from '../excel/generate-doc-routing.module';

import { ExcelComponent } from '../excel/excel.component';
import { SheetjsComponent } from '../sheetjs/sheetjs.component';
import { PdfComponent } from '../pdf/pdf.component';

import { ExcelService } from '../excel/excel.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    GenerateDocRoutingModule
  ],
  declarations: [ExcelComponent, SheetjsComponent, PdfComponent],
  providers: [ExcelService],
  exports: []
})
export class GenerateDocModule {}
