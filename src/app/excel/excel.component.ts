import { Component, OnInit, Inject } from '@angular/core';

import { ExcelService } from './excel.service';
import { PERSONS, Person, LOGO, RESULT_COLUMNS, RESULTS } from './model';

// import * as jsPDF from 'jspdf';
declare var jsPDF: any; // Important

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css'],
  providers: [{ provide: 'Window', useValue: window }]
})
export class ExcelComponent implements OnInit {
  persons: Person[];
  fullPathname: string;
  agency_logo = LOGO;

  columns = RESULT_COLUMNS;

  rows = RESULTS;

  constructor(
    @Inject('Window') private window: Window,
    private excelService: ExcelService
  ) {
    this.excelService = excelService;
    this.persons = PERSONS;
    this.fullPathname =
      'http://www.kaylene-group.com/wp-content/uploads/2017/01/logo-1.jpg';
  }

  ngOnInit() {}

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(PERSONS, 'persons');
  }

  // !pdf builder
  exportToPdf() {
    const doc = new jsPDF();

    // header text
    doc.setFontSize(18);
    doc.text('Bulletin de note', 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    const text = doc.splitTextToSize(
      'Text fsdsdsds dsdsdsdsdsdsssdsdsdsds dsdsdsdsdsdsssdsdsdsds dsdsdsdsdsdsssdsdsdsds dsdsdsdsdsdsssdsdsdsds.',
      doc.internal.pageSize.width - 35,
      {}
    );
    doc.text(text, 14, 30);

    const logo = {
      src: 'assets/images/logo.png',
      width: 40,
      height: 30
    };

    const flyer_title = 'flyer_title';
    const agency_name = 'Travel & Holidays';
    const agency_site_url = 'www.travelandholidays.com';
    const footer = agency_name + ' - ' + agency_site_url;
    const page_size = 'a4';
    const page_width = 210; // mm
    const page_margin = 10; // mm
    const content_width = page_width - page_margin * 2;
    let _y = page_margin; // vertical starting point

    // Optional - set properties of the document
    doc.setProperties({
      title: 'Test document',
      subject: footer,
      author: 'me',
      creator: 'Flyer Builder & jsPDF'
    });

    doc.text(
      flyer_title,
      {
        align: 'center'
      },
      0,
      _y
    );

    // images
    doc.addImage(
      this.agency_logo.src,
      'PNG',
      0,
      0,
      this.agency_logo.w,
      this.agency_logo.h
    );

    // fonts initializing
    doc.setFont('helvetica');
    doc.setFontType('bold');
    doc.setTextColor('#cc0000', '#4fff00', '#0080ff');
    doc.setFontSize(20);

    // !footer
    _y = 287;
    doc.setFontSize(9);
    doc.setFontType('normal');
    doc.setTextColor('#040404');
    doc.text(
      footer,
      {
        align: 'center'
      },
      0,
      _y
    );

    // TABLE
    doc.autoTable(this.columns, this.rows, {
      startY: 50,
      showHeader: 'firstPage'
    });

    doc.text(text, 14, doc.autoTable.previous.finalY + 10);

    // Save the PDF
    doc.save('JsPdfDemo.pdf');
  }
}
