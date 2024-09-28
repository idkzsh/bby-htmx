import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData.entries());


  try {
    const XlsxPopulate = await import('xlsx-populate') as any;
    
    // Open the .xlsm file
    const workbook = await XlsxPopulate.default.fromFileAsync("public/setup_template.xlsm");
    
    // Get the first sheet
    const sheet = workbook.sheet(0);
    
    // Get the first value from the form data
    const firstValue = Object.values(formDataObject)[0];

    // Insert the first value into cell E28
    sheet.cell("E28").value(firstValue);

    // Save the changes to the workbook
    await workbook.toFileAsync("public/setup_template.xlsm");
    
    // ... existing code ...
  } catch (excelError) {
    console.error("Error processing Excel file:", excelError);
  }
  const resp = {
    subject: "test",
    body: JSON.stringify(formDataObject),
  };

  try {
    const response = await fetch(import.meta.env.EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resp),
    });

    if (response.ok) {
      // Request was successful
      console.log("POST request sent successfully");
    } else {
      // Request failed
      console.error("Failed to send POST request");
    }
  } catch (error) {
    console.error("Error sending POST request:", error);
  }

  const jsonResponse = new Response(JSON.stringify(resp), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/complete");
};

const populateSetupForm = () => {};
