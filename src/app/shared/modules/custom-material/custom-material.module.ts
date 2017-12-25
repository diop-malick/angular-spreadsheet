import { NgModule } from '@angular/core';
import {
  // we have to import each component that we intend to use.
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatDatepickerModule,
  MatDialogModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 *
 * https://github.com/angular/material2/blob/master/src/demo-app/demo-material-module.ts
 * expansion : https://github.com/angular/material2/blob/master/src/lib/expansion/expansion.md
 */
@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class CustomMaterialModule {}
