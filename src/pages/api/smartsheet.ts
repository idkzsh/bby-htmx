import * as XLSX from 'xlsx';
import { smartSheetBuffer } from '../../lib/dummySmartsheet';

export function getSmartsheetData() {
  // Parse the Excel file
  const workbook = XLSX.read(smartSheetBuffer, { type: 'buffer' });

  // Get the second sheet (index 1)
  const sheetName = workbook.SheetNames[2];

  const sheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON, starting from row 10
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 9 }); // range: 9 starts from row 10 (0-indexed)

//   console.log('JSON data length:', jsonData.length);
//   console.log('First few rows of JSON data:', jsonData.slice(0, 5));

  // The first row of our data (row 10 in Excel) contains headers
  const headers = jsonData[0];

  // Return an object with headers and next few rows of data
  return {
    headers,
    sampleData: jsonData.slice(0, 1) // This will give rows 11-14 from the Excel file
  };
}