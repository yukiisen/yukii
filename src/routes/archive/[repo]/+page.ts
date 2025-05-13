import type { PageLoad } from "./$types";
import { marked } from "marked";
import * as kit from "@sveltejs/kit";

const BASEURL = "http://127.0.0.1:3000";

export const load: PageLoad = async ({ params }) => {
    const repo = params.repo;

    try {
        const res = await fetch(`${BASEURL}/${repo}/README.md`);
        const readme = await res.text();

        const html = marked(readme);
        return { html, repo };
    } catch (error) {
        kit.error(404, String(error));
    }
}
