import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelComponent } from './excel.component';
import { SheetjsComponent } from '../sheetjs/sheetjs.component';

const routes: Routes = [
  { path: '', component: ExcelComponent },
  { path: 'excel', component: ExcelComponent },
  { path: 'sheetjs', component: SheetjsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateDocRoutingModule {}
