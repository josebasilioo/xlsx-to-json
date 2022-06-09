import * as XLSX from 'xlsx';
import * as fs from 'fs';
// import * as fs from 'fs';

// XLSX.set_fs(fs);
let workSheets = {}
const workbook = XLSX.read(fs.readFileSync('./sheet-prices.xls'));
for (const sheetName of workbook.SheetNames) {
    workSheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log(workSheets[sheetName]);
}

console.log(Object.entries(workSheets));
