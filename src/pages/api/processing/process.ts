// process.ts
// import { IncomingMessage, ServerResponse } from 'http';

// export default async function processFormData(req: IncomingMessage, res: ServerResponse) {
//   try {
//     if (req.method === 'POST') {
//       let data = '';
//       req.on('data', (chunk) => {
//         data += chunk;
//       });
//       req.on('end', () => {
//         // Process the form data here
//         const formData = JSON.parse(data); // Assuming form data is sent as JSON
//         const processedData = { message: 'Form processed successfully!' };
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(processedData));
//       });
//     } else {
//       res.writeHead(405, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Method Not Allowed' }));
//     }
//   } catch (error) {
//     console.error(error);
//     res.writeHead(500, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: 'An error occurred' }));
//   }
// }
import * as xlsx from 'xlsx';
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData(); // Extract form data
  const excelFile = formData.get("excelFileInput"); // Corrected field name

  if (excelFile instanceof File) {
    console.log("File uploaded:", excelFile.name); // Log file name
    const fileBuffer = await excelFile.arrayBuffer();

    
    const workbook = xlsx.read(fileBuffer, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);
    console.log(data);
    // Process the fileBuffer as needed
  } else {
    console.error("Uploaded file not found or is not an instance of File");
  }

  return new Response(null);
};
