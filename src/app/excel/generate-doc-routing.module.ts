import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelComponent } from './excel.component';
import { SheetjsComponent } from '../sheetjs/sheetjs.component';
import { PdfComponent } from '../pdf/pdf.component';

const routes: Routes = [
  { path: '', component: ExcelComponent },
  { path: 'excel', component: ExcelComponent },
  { path: 'pdf', component: PdfComponent },
  { path: 'sheetjs', component: PdfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateDocRoutingModule {}
