import fs from 'fs';
import { join } from 'path';

const docsDir = join(process.cwd(), 'src/docs');

export function getDoc(name) {
    const fileName = name.replace(/\.md$/, '');
    const fullPath = join(docsDir, `${fileName}.md`);

    const content = fs.readFileSync(fullPath, 'utf8');
    if(!content) return;
    return {
        name,
        content
    }
}

export function getAllDocs(): any {
    const doc = fs.readdirSync(docsDir);
    const docs = doc.map(x => getDoc(x));

    return docs;
}