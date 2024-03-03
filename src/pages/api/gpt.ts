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
  
          for lithium ion batteries output = batteryType/wattHours/totalMassKg.
          
          for lithium metal batteries output = batteryType/lithiumContent/totalMassKg.
          
          return only values in json`,
        },
      ],
      model: "gpt-3.5-turbo",
    //   model: "gpt-4-0125-preview",
      // model: "gpt-4",
    });
  
    return (completion.choices[0].message.content);
  }

  export const POST: APIRoute = async ({ request, cookies }) => {
    try {
      const body = await request.arrayBuffer(); // Get the request body as an ArrayBuffer
      const decoder = new TextDecoder(); // Create a TextDecoder instance
        
      console.log(request)
      // Decode the ArrayBuffer (Uint8Array) to a string
      const decodedBody = decoder.decode(body);

      // send request to openAI API 
      const aiResponse = await apiCall(decodedBody);
  
      if (aiResponse !== null) {
        const aiJSON = JSON.parse(aiResponse);
  
        // Assuming you have some data to return
        const responseData = {
            batteryType: aiJSON.batteryType,
            wattHours: aiJSON.wattHours,
            totalMassKg: aiJSON.totalMassKg
            // Add more data here as needed
          };
  
        // Create JSON response
        const jsonResponse = new Response(JSON.stringify(responseData), {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        return jsonResponse;
      } else {
        // Handle the case where aiResponse is null
        console.error("apiCall returned null.");
        return new Response("Internal Server Error", { status: 500 });
      }
    } catch (error) {
      console.error("Error handling request:", error);
      // Return an error response if needed
      return new Response("Internal Server Error", { status: 500 });
    }
  };
  
