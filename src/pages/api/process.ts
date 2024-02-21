// process.ts
import { IncomingMessage, ServerResponse } from 'http';

export default async function processFormData(req: IncomingMessage, res: ServerResponse) {
  try {
    if (req.method === 'POST') {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        // Process the form data here
        const formData = JSON.parse(data); // Assuming form data is sent as JSON
        const processedData = { message: 'Form processed successfully!' };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(processedData));
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'An error occurred' }));
  }
}



