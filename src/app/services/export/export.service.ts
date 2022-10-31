import * as XLSX from 'xlsx/xlsx.mjs';
import {Injectable} from '@angular/core';
import {ExportType} from "./components/export.type";

@Injectable({providedIn: 'root'})
export class ExportService {
  exportXlsx(table: HTMLElement, fileName: string, sheetName = 'Sheet1') {
    this.export(table, fileName, sheetName, ExportType.xlsx)
  }

  exportCsv(table: HTMLElement, fileName: string) {
    this.export(table, fileName, '', ExportType.csv)
  }

  private export(table: HTMLElement, fileName: string, sheetName: string, type: ExportType) {
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, XLSX.utils.table_to_sheet(table), sheetName);
    XLSX.writeFile(workBook, `${fileName}.${type.toLowerCase()}`);
  }
}
