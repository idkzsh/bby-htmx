import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData.entries());

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
