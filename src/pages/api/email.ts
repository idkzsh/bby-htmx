import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  console.log(request);

  const resp = { response: "response" };

  try {
    const response = await fetch("https://go-test-embed.vercel.app/api/index", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resp),
      
    });

    console.log(response)
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
