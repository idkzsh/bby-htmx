import { formats, unCodes } from "../data/compliance";

// this script is called when the user uploads an MSDS pdf file in the compliance page and presses upload. 
// it takes the form data and sends it to the server via fetch and the server uses pdfjs-dist to process the pdf file
const msdsForm = document.getElementById('msdsForm') as HTMLFormElement;

msdsForm?.addEventListener('submit', async (event: Event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(msdsForm);

    const file = formData.get("MSDS") as File;
    const pdfData = await file?.arrayBuffer();

    console.log(pdfData)

    try {
        if (msdsForm instanceof HTMLFormElement) {
            const formData = new FormData(msdsForm); // Get form data
            
            // Create a fetch request to /api/PDF.ts
            const response = await fetch('./api/PDF', {
                method: 'POST', // or 'GET', 'PUT', 'DELETE', etc.
                body: formData // Pass the form data as the request body
            });

            // Check if the request was successful
            if (response.ok) {
                // Process the response data here
                const responseData = await response.json();
                console.log(responseData); // Log the response data to the console
            } else {
                console.error('Failed to fetch /api/PDF:', response.status, response.statusText);
            }

            // Perform your specific logic for MSDS form submission here
        } else {
            console.error('MSDS form not found.');
        }
    } catch (error) {
        console.error('Error handling MSDS form submission:', error);
    }
});


