import { generatePetname } from "./petname.js";

export function onRequestGet(context) {
    const url = new URL(context.request.url);

    let words = parseInt(url.searchParams.get("words"), 10);
    if (isNaN(words) || words < 1) {
        words = 1;
    } else if (words > 3) {
        words = 3;
    }
    if (!url.searchParams.has("words")) {
        words = 2;
    }

    const separator = url.searchParams.get("separator") ?? "-";

    const petname = generatePetname(words, separator);

    return new Response(petname + "\n", {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
        },
    });
}
