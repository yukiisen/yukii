import type { PageLoad } from "./$types";
import { marked } from "marked";
import * as kit from "@sveltejs/kit";

export const ssr = false;
export const csr = true;

export const load: PageLoad = async ({ params }) => {
    const post = params.post;

    try {
        const res = await fetch(`/blogs/${post}.md`);
        const readme = await res.text();

        const html = marked(readme);
        return { html, post };
    } catch (error) {
        kit.error(404, String(error));
    }
}
