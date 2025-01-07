import * as XLSX from 'xlsx';
import path from 'path';
import { promises as fs } from 'fs';

async function readExcelFiles() {
  try {
    const dataFolderPath = path.join(process.cwd(), 'data');
    const files = await fs.readdir(dataFolderPath);
    const excelFiles = files.filter(file => file.endsWith('.xls') || file.endsWith('.xlsx'));

    for (const file of excelFiles) {
      console.log(`\nReading file: ${file}`);
      const filePath = path.join(dataFolderPath, file);
      const fileBuffer = await fs.readFile(filePath);
      const workbook = XLSX.read(fileBuffer);

      for (const sheetName of workbook.SheetNames) {
        console.log(`\nSheet: ${sheetName}`);
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });

        console.log('Sheet contents:');
        jsonData.forEach((row, index) => {
          console.log(`Row ${index + 1}:`, row);
        });
      }
    }
  } catch (error) {
    console.error('Error reading Excel files:', error);
  }
}

readExcelFiles();