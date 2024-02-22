// process.ts

import * as xlsx from "xlsx";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData(); // Extract form data
  const excelFile = formData.get("excelFileInput"); // Corrected field name

  let html;
  let data = null;
  if (excelFile instanceof File) {
    console.log("File uploaded:", excelFile.name); // Log file name
    const fileBuffer = await excelFile.arrayBuffer();

    const workbook = xlsx.read(fileBuffer, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data: any[] = xlsx.utils.sheet_to_json(worksheet);
    console.log(data[0]['SKU_DESC']);
    html = `<div>${Object.entries(data[0]).map(([key,val]) => (
        `<p>${key}</p>
        <p>${val}</p>
        `
    ))}</div>`
    // Process the fileBuffer as needed
  } else {
    console.error("Uploaded file not found or is not an instance of File");
    html = `  
    <div w-full h-full flex justify-center items-center>
      ${data ? data[0]["SKU_DESC"]: "no data found"}
    </div>`;
  }



  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
