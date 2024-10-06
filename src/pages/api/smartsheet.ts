import * as XLSX from "xlsx";
import { smartSheetBuffer as tvSmartsheet } from "../../lib/tvSmartsheet";
import { smartSheetBuffer as laptopSmartsheet } from "../../lib/laptopSmartsheet";
import { smartSheetBuffer as computerMonitorSmartsheet } from "../../lib/computerMonitorSmartsheet";
import { smartSheetBuffer as monitorMountSmartsheet } from "../../lib/monitorMountSmartsheet";

export function getSmartsheetData(smartSheet: String) {
  // Parse the Excel file
  let selectedSmartsheet;
  switch (smartSheet) {
    case "Televisions":
      console.log("Televisions smartsheet selected");
      selectedSmartsheet = tvSmartsheet;
      break;
    case "Laptops":
      console.log("Laptops smartsheet selected");
      selectedSmartsheet = laptopSmartsheet;
      break;
    case "Computer Monitors":
      console.log("Computer Monitors smartsheet selected");
      selectedSmartsheet = computerMonitorSmartsheet;
      break;
    case "Monitor Mounts":
      console.log("Monitor Mounts smartsheet selected");
      selectedSmartsheet = monitorMountSmartsheet;
      break;
    default:
      console.log("No smartsheet selected");
      selectedSmartsheet = tvSmartsheet;
  }

  const workbook = XLSX.read(selectedSmartsheet, { type: "buffer" });

  // Get the second sheet (index 1)
  const sheetName = workbook.SheetNames[2];

  const sheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON, starting from row 10
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 9 }); // range: 9 starts from row 10 (0-indexed)

  // The first row of our data (row 10 in Excel) contains headers
  const headers = jsonData[0];

  // Return an object with headers and next few rows of data
  return {
    headers,
    sampleData: jsonData.slice(0, 1), // This will give rows 11-14 from the Excel file
  };
}
