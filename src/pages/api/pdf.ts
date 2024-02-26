import type { APIRoute } from "astro";
import * as pdfjsLib from 'pdfjs-dist';

async function extractTextFromPDF(pdfUrl: ArrayBuffer): Promise<string> {
  // Loading the PDF file
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  const pdf = await loadingTask.promise;

  // Initialize an empty string to store extracted text
  let fullText = '';

  // Loop through each page to extract text
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    textContent.items.forEach(item => {
      if ('str' in item) { // Check if the item is of type TextItem
        fullText += item.str + ' '; // Concatenate text from each item
      } else if ('textContent' in item) { // Check if the item is of type TextMarkedContent
        fullText += item.textContent + ' '; // Concatenate text from each item
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
    
    // const pdfData = await file.arrayBuffer();

    // const extractedText = await extractTextFromPDF(pdfData);
    // console.log('Extracted text:', extractedText);
    // const loadingTask = pdfjsLib.getDocument(pdfData);

    // Assuming you have some data to return
    const responseData = {
      message: "testing response",
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
