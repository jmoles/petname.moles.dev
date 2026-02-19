import { generatePetname } from "./petname.js";

export async function onRequestPost(context) {
    const formData = await context.request.formData();
    const text = (formData.get("text") || "").trim();

    let words = 2;
    let separator = "-";

    if (text) {
        const args = text.split(/\s+/);
        const parsedWords = parseInt(args[0], 10);
        if (!isNaN(parsedWords)) {
            words = Math.max(1, Math.min(3, parsedWords));
        }
        if (args[1]) {
            separator = args[1];
        }
    }

    const petname = generatePetname(words, separator);

    return new Response(JSON.stringify({
        response_type: "ephemeral",
        text: petname,
    }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
