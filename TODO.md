# README

basic Excel export and import capabilities.

# Links

* Excel upload

  * https://github.com/SheetJS/js-xlsx
  * https://github.com/eligrey/FileSaver.js

* Import Excel Sheet Data in MS SQL server Database

* Client-side JavaScript PDF generation

  * [jsPDF](https://github.com/MrRio/jsPDF)
  * [jsPDF dataTable](https://github.com/simonbengtsson/jsPDF-AutoTable)
  * [Pdf make](https://github.com/bpampuch/pdfmake)

# IN PROGRESS

* generate gradesheet populated by JSON data
https://www.sitepoint.com/generating-pdfs-from-web-pages-on-the-fly-with-jspdf/

# TODO

* pdf table
  https://github.com/simonbengtsson/jsPDF-AutoTable

* PDF
  exporter des données au format PDF/DOCX.
  / bulletin from many model elements pdf
  http://rahulgaba.com/front-end/2016/07/14/generating-pdf-using-jspdf-and-html2canvas.html

  * mettre en place un système qui permet, à partir d'un template HTML, de réaliser cet export
  * l'affichage en HTML peut dépendre du navigateur donc pour générer un document imprimable, il vaut mieux faire un PDF

- datagrid with filter, Sort , Pagination , Search and export to CSV

* http://www.c-sharpcorner.com/article/import-data-from-excel-to-db-using-angularjs-and-web-api-2/

* http://sheetjs.com/demos/

# DONE

* material design and layout

```
mkdir -p src/app/shared/components/
ng generate module shared/modules/custom-material
ng generate module layout
ng g component layout
ng g component shared/components/header
ng g component shared/components/sidenav
ng g component shared/components/footer
```

* export/import data to excel file

  * https://github.com/SheetJS/js-xlsx/tree/master/demos/angular2
  * https://github.com/luwojtaszek/ngx-excel-export

* Use angualr TOur of hero tutorial
