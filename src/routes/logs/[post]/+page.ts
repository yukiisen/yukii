import type { PageLoad } from "./$types";
import { marked } from "marked";
import * as kit from "@sveltejs/kit";

export const ssr = false;
export const csr = true;

export const load: PageLoad = async ({ params }) => {
    const post = params.post;

    try {
        const res = await fetch(`/blogs/${post}.md`);
        if (res.status !== 200) return kit.error(res.status, res.statusText);
        const readme = await res.text();

        const html = marked(readme);
        return { html, post };
    } catch (error: any) {
        kit.error(error.status, String(error.body.message));
    }
}
