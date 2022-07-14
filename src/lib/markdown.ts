import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism'

export default async function markdownToHtml(md) {
    const result = await remark()
    .use(html,{
        sanitize: false
    })
    .use(prism)
    .process(md);
    return result.toString();
}