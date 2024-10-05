import * as fs from 'fs';
import * as path from 'path';

// Function to convert file to base64
function convertToBase64(filePath) {
  // Read the file
  const file = fs.readFileSync(filePath);
  
  // Convert to base64
  return file.toString('base64');
}

// Get the file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide a file path as an argument.');
  process.exit(1);
}

// Check if file exists
if (!fs.existsSync(filePath)) {
  console.error('File does not exist.');
  process.exit(1);
}

// Check if file is an Excel file
const ext = path.extname(filePath).toLowerCase();
if (ext !== '.xlsx' && ext !== '.xlsm') {
  console.error('File is not an Excel file (xlsx or xlsm).');
  process.exit(1);
}

const base64String = convertToBase64(filePath);

// Generate output file name
const outputFileName = `${path.basename(filePath, path.extname(filePath))}_base64.txt`;

// Write the base64 string to a file
fs.writeFileSync(outputFileName, base64String);

console.log(`Base64 string has been written to ${outputFileName}`);