export const excelTemplateBuffer = await fetch('/setup_template.xlsm')
  .then(res => res.arrayBuffer())
  .then(arrayBuffer => Buffer.from(arrayBuffer));