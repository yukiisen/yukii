import type { PageLoad } from "./$types";

export const ssr = true;
export const csr = true;

export const load: PageLoad = ({ params }) => {
    return { replay: params.replay };
}
