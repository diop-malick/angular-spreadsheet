import { Component, OnInit } from '@angular/core';

import { ExcelService } from './excel.service';
import { PERSONS, Person } from './model';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  persons: Person[];

  constructor(private excelService: ExcelService) {
    this.excelService = excelService;
    this.persons = PERSONS;
  }

  ngOnInit() {}

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(PERSONS, 'persons');
  }
}
