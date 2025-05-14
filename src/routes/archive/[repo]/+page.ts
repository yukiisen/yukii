import type { PageLoad } from "./$types";
import { marked } from "marked";
import * as kit from "@sveltejs/kit";

const BASEURL = "https://raw.githubusercontent.com/yukiisen";
export const csr = true;
export const ssr = false;

export const load: PageLoad = async ({ params }) => {
    const repo = params.repo;

    try {
        const res = await fetch(`${BASEURL}/${repo}/refs/heads/main/README.md`);
        if (res.status !== 200) return kit.error(res.status, res.statusText);
        const readme = await res.text();

        const html = marked(readme);
        return { html, repo };
    } catch (error: any) {
        kit.error(error.status, String(error.body.message));
    }
}
