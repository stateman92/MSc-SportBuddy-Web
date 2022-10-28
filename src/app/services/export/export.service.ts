import * as XLSX from 'xlsx/xlsx.mjs';
import {Injectable} from '@angular/core';
import * as fs from 'fs';

@Injectable({providedIn: 'root'})
export class ExportService {
  export(table: HTMLElement, fileName: string, sheetName = 'Sheet1') {
    const workSheet = this.worksheet(table);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, sheetName);
    XLSX.writeFile(workBook, `${fileName}.xlsx`);
  }

  exportCsv(table: HTMLElement, fileName: string) {
    const workSheet = this.worksheet(table);
    const stream = XLSX.stream.to_csv(workSheet);
    stream.pipe(fs.createWriteStream(`${fileName}.csv`));
  }

  private worksheet(ofTable: HTMLElement) {
    return XLSX.utils.table_to_sheet(ofTable);
  }
}
