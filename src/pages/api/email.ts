import type { APIRoute } from "astro";
import nodemailer from 'nodemailer';
import { excelTemplateBuffer } from '../../lib/excelTemplate';
import { getEnv } from '../../utils/env';


export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const setupDataString = formData.get('setupData');

  console.log(formData)

  if (!setupDataString || typeof setupDataString !== 'string') {
    return new Response(JSON.stringify({ error: "Invalid setup data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const setupData = JSON.parse(setupDataString);

    const buffer = await processExcelFile(setupData);

    const email = setupData.email;

    if (!email) {
      throw new Error("Email is missing from form data");
    }

    await sendEmail(buffer, email.toString());
    
    return redirect("/complete");
  } catch (error) {
    console.error("Error in POST route:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

async function processExcelFile(setupData: Record<string, any>) {
  try {

    const XlsxPopulate = await import('xlsx-populate') as any;
    
    const workbook = await XlsxPopulate.default.fromDataAsync(excelTemplateBuffer);
    const sheet = workbook.sheet(0);
   
    const columns = parseInt(setupData.columns) || 1;
    console.log("Number of columns:", columns);

    console.log(setupData.dept)

    const cellMappings = {
      "28": "dept",
      "37": 'Vendor Part Number',
      "29": 'SKU Title (Short)',
      "30": 'SKU Title (Long)',
      "31": 'UPC',
      "32": 'Secondary UPC',
      "33": 'Brand Name',
      "34": 'Model Number',
      "35": 'Manufacturer',
      "38": 'Unit Cost',
      "39": 'Retail Price',
      "40": 'Width (Boxed)',
      "41": 'Height (Boxed)',
      "42": 'Length (Boxed)',
      "43": 'Weight (Boxed)',
      "44": 'Width (Unboxed)',
      "45": 'Height (Unboxed)',
      "46": 'Length (Unboxed)',
      "47": 'Weight (Unboxed)',
      "48": 'Casepack',
      "49": 'Innerpack',
      "50": 'Unit Cost For Additional Supplier(1)',
      "51": 'Case Pack Qty For Additional Supplier(1)',
      "52": 'Inner Pack Qty For Additional Supplier(1)',
      "53": 'Unit Cost For Additional Supplier(2)',
      "54": 'Case Pack Qty For Additional Supplier(2)',
      "55": 'Inner Pack Qty For Additional Supplier(2)',
      "56": 'French Compliant',
      "57": 'Energy Star',
      "58": 'Refurbished',
      "59": 'Consignment',
      "60": 'Software Platform',
      "61": 'Street Date',
      "69": 'Product Warranty Days',
      "70": 'Product Warranty Coverage',
      "71": 'Extended Parts Warranty',
      "72": 'Return Restrictions',
      "73": 'Embargo Date',
      "74": 'Expiration Date/Lot Number',
      "75": 'Shelf Life',
      "76": 'Data Flag',
      "78": 'Dangerous Product/Material',
    };


      for (const [row, key] of Object.entries(cellMappings)) {
        const value = setupData[key];
        console.log(`Processing ${key}:`, value);
        
        if (value !== undefined) {
          const parsedValues = Array.isArray(value) ? value : [value];
          for (let i = 0; i < columns && i < parsedValues.length; i++) {
            const cellReference = `${getExcelColumn(i + 5)}${row}`; // E, F, G, ..., Z, AA, AB, etc.
            let formattedValue = parsedValues[i];
            
            // Format Street Date
            if (key === 'Street Date') {
              formattedValue = formatDate(formattedValue, 'yyyyMMddHHmmss');
            }
            // Format Embargo Date
            else if (key === 'Embargo Date') {
              formattedValue = formatDate(formattedValue, 'yyyyMMdd');
            }
            
            console.log(`Setting ${key} in cell ${cellReference}:`, formattedValue);
            sheet.cell(cellReference).value(formattedValue);
          }
        } else {
          console.log(`No value found for ${key}`);
        }
      
    }

    return await workbook.outputAsync();
  } catch (excelError) {
    console.error("Error processing Excel file:", excelError);
    throw excelError;
  }
}

function getExcelColumn(columnIndex: number): string {
  let columnName = '';
  while (columnIndex > 0) {
    columnIndex--;
    columnName = String.fromCharCode(65 + (columnIndex % 26)) + columnName;
    columnIndex = Math.floor(columnIndex / 26);
  }
  return columnName;
}

async function sendEmail(buffer: Buffer, email: String) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "zachflentgewong@gmail.com",
      pass: getEnv('APP_PASS'),
    },
  });

  await transporter.sendMail({
    from: '"Zach" <zachflentgewong@gmail.com>',
    to: `${email}`,
    subject: "SKU Setup Submission",
    text: "Please find the updated Excel file attached.",
    attachments: [
      {
        filename: "SKU Setup Sheet.xlsm",
        content: buffer,
      },
    ],
  });

  console.log("Email sent successfully");
}

function formatDate(dateString: string, format: 'yyyyMMddHHmmss' | 'yyyyMMdd'): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date: ${dateString}`);
    return dateString; // Return original string if it's not a valid date
  }

  const pad = (num: number) => num.toString().padStart(2, '0');

  const yyyy = date.getFullYear();
  const MM = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const HH = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());

  if (format === 'yyyyMMddHHmmss') {
    return `${yyyy}${MM}${dd}${HH}${mm}${ss}`;
  } else {
    return `${yyyy}${MM}${dd}`;
  }
}