import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

// mock db, shall be fixed (replace with Vercel KV)
let views = 1864;

export const GET: RequestHandler = async (req) => {
    console.log(req.getClientAddress());

    return json({ views: ++views });
}
