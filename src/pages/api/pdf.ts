import type { APIRoute } from "astro";
import * as pdfjs from "../../../pdf.mjs"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type TextItem = { str: string };
type TextMarkedContent = { textContent: string };

// Union type representing both TextItem and TextMarkedContent
type PdfTextItem = TextItem | TextMarkedContent;

async function extractTextFromPDF(pdfUrl: ArrayBuffer): Promise<string> {
  // Loading the PDF file
  const loadingTask = pdfjs.getDocument(pdfUrl);
  const pdf = await loadingTask.promise;

  // Initialize an empty string to store extracted text
  let fullText = '';

  // Loop through each page to extract text
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    textContent.items.forEach((item : PdfTextItem) => { // Explicitly define the type of 'item'
      if ('str' in item) {
        fullText += item.str + ' ';
      } else if ('textContent' in item) {
        fullText += item.textContent + ' ';
      }
    });
  }

  return fullText;
}



export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Your logic to handle the request and process the data
    const formData = await request.formData();
    const file = formData.get("MSDS") as File;
    
    const pdfData = await file.arrayBuffer();

    const extractedText = await extractTextFromPDF(pdfData);
    console.log('Extracted text:', extractedText);
    // const loadingTask = pdfjsLib.getDocument(pdfData);

    // Assuming you have some data to return
    const responseData = {
      message: extractedText,
      // Add more data here as needed
    };

    // Create JSON response
    const jsonResponse = new Response(JSON.stringify(responseData), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return jsonResponse;
  } catch (error) {
    console.error("Error handling request:", error);
    // Return an error response if needed
    return new Response("Internal Server Error", { status: 500 });
  }
};
