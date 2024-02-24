// process.ts

import * as xlsx from "xlsx";
import type { APIRoute } from "astro";
import { headers, inputs } from "../../../data/setup";



export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData(); // Extract form data
  const columns = formData.get("columns");
  const excelFile = formData.get("excelFileInput"); // Corrected field name
  const today = new Date().toISOString().split("T")[0];
  console.log(columns);

  let response: any;
  let data = null;
  if (excelFile instanceof File) {
    console.log("File uploaded:", excelFile.name); // Log file name
    const fileBuffer = await excelFile.arrayBuffer();

    const workbook = xlsx.read(fileBuffer, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data: any[] = xlsx.utils.sheet_to_json(worksheet);
    console.log(data[0]["SKU_DESC"]);
    response = data;
    // Process the fileBuffer as needed
    } else {
      console.error("Uploaded file not found or is not an instance of File");
    }

  return new Response(response, {
    headers: {
      "Content-Type": "JSON",
    },
  });
};
