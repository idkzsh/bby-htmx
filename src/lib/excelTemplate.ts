import fs from 'fs';
import path from 'path';

const excelTemplatePath = path.join(process.cwd(), 'assets', 'setup_template.xlsm');
export const excelTemplateBuffer = fs.readFileSync(excelTemplatePath);