import * as XLSX from 'xlsx/xlsx.mjs';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ExportService {
  export(table: HTMLElement, fileName: string, sheetName = 'Sheet1') {
    const workSheet = XLSX.utils.table_to_sheet(table);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, sheetName);
    XLSX.writeFile(workBook, `${fileName}.xlsx`);
  }
}
