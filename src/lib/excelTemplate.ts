const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'http://localhost:4321';

export const excelTemplateBuffer = await fetch(`${baseUrl}/setup_template.xlsm`)
  .then(res => res.arrayBuffer())
  .then(arrayBuffer => Buffer.from(arrayBuffer));