import type { APIRoute } from "astro";
import OpenAI from "openai";
import { headers, batteryTypes, formats, unCodes } from "../../data/compliance"

const key = import.meta.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey: key });

export default async function apiCall(pdf: String) {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a data entry system. With no headers or comments, Read ${pdf}.
  
          battery types must match ${batteryTypes}
  
          for lithium ion batteries output = battery type/watt hours/total mass in kilograms.
          
          for lithium metal batteries output = battery type/lithium amount in grams/total mass in kilograms.
          
          return only values in csv`,
        },
      ],
      // model: "gpt-3.5-turbo",
      model: "gpt-4-0125-preview",
      // model: "gpt-4",
    });
  
    return (completion.choices[0].message.content);
  }

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Your logic to handle the request and process the data
    const body = await request.arrayBuffer(); // Get the request body as an ArrayBuffer
    const decoder = new TextDecoder(); // Create a TextDecoder instance

    // Decode the ArrayBuffer (Uint8Array) to a string
    const decodedBody = decoder.decode(body);

    const aiResponse = await apiCall(decodedBody);

    console.log(aiResponse); // Log the decoded body

    // Assuming you have some data to return
    const responseData = {
      message: aiResponse,
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
