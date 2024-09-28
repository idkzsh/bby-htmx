import type { APIRoute } from "astro";
import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import path from 'path';


export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData.entries());

  console.log(formDataObject)

  try {
    const buffer = await processExcelFile(formDataObject);
    await sendEmail(buffer);
    // await sendPostRequest(formDataObject);
    
    return redirect("/complete");
  } catch (error) {
    console.error("Error in POST route:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

async function processExcelFile(formDataObject: Record<string, any>) {
  try {

    const XlsxPopulate = await import('xlsx-populate') as any;
    
    const filePath = path.join(process.cwd(), 'public', 'setup_template.xlsm');
    const buffer = await readFile(filePath);
    const workbook = await XlsxPopulate.default.fromDataAsync(buffer);
    const sheet = workbook.sheet(0);

    const parseJSON = (value: string) => {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.log("Parsing failed, returning original value");
        return value;
      }
    };
    
    const columns = parseInt(formDataObject.columns) || 1;
    console.log("Number of columns:", columns);

    const cellMappings = {
      "37": 'Vendor Part Number',
      "29": 'SKU Title (Short)',
      "30": 'SKU Title (Long)',
      "31": 'UPC',
      "33": 'Brand',
      "34": 'Model',
      "35": 'Manufacturer'
    };

    for (const [row, key] of Object.entries(cellMappings)) {
      const fullKey = `setupData_${key}`;
      const value = formDataObject[fullKey];
      console.log(`Processing ${fullKey}:`, value);
      
      if (value !== undefined) {
        const parsedValues = parseJSON(value);
        if (Array.isArray(parsedValues)) {
          for (let i = 0; i < columns && i < parsedValues.length; i++) {
            const cellReference = `${String.fromCharCode(69 + i)}${row}`; // E, F, G, etc.
            console.log(`Setting ${key} in cell ${cellReference}:`, parsedValues[i]);
            sheet.cell(cellReference).value(parsedValues[i]);
          }
        } else {
          console.log(`Setting ${key} in cell E${row}:`, parsedValues);
          sheet.cell(`E${row}`).value(parsedValues);
        }
      } else {
        console.log(`No value found for ${fullKey}`);
      }
    }

    return await workbook.outputAsync();
  } catch (excelError) {
    console.error("Error processing Excel file:", excelError);
    throw excelError;
  }
}

async function sendEmail(buffer: Buffer) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "zachflentgewong@gmail.com",
      pass: import.meta.env.APP_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Zach" <zachflentgewong@gmail.com>',
    to: "zachflentgewong@gmail.com",
    subject: "Updated Excel File",
    text: "Please find the updated Excel file attached.",
    attachments: [
      {
        filename: "updated_setup_template.xlsm",
        content: buffer,
      },
    ],
  });

  console.log("Email sent successfully");
}

// async function sendPostRequest(formDataObject: Record<string, any>) {
//   const resp = {
//     subject: "test",
//     body: JSON.stringify(formDataObject),
//   };

//   const response = await fetch(import.meta.env.EMAIL_ENDPOINT, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(resp),
//   });

//   if (response.ok) {
//     console.log("POST request sent successfully");
//   } else {
//     console.error("Failed to send POST request");
//     throw new Error("Failed to send POST request");
//   }
// }