import { Component, OnInit } from '@angular/core';

import { ExcelService } from './excel.service';
import { PERSONS, Person } from './model';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
  // providers: [
  //   { provide: 'Window',  useValue: window }
  // ]
})
export class ExcelComponent implements OnInit {
  persons: Person[];

  constructor(
    // @Inject('Window') private window: Window,
    private excelService: ExcelService
  ) {
    this.excelService = excelService;
    this.persons = PERSONS;
  }

  ngOnInit() {}

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(PERSONS, 'persons');
  }

  exportToPdf() {
    const doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }
}
