function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function generatePetname(words, separator, adverbs, adjectives, names) {
    const parts = [];

    if (words === 1) {
        parts.push(getRandomElement(names));
    } else if (words === 2) {
        parts.push(getRandomElement(adjectives));
        parts.push(getRandomElement(names));
    } else {
        parts.push(getRandomElement(adverbs));
        parts.push(getRandomElement(adjectives));
        parts.push(getRandomElement(names));
    }

    return parts.join(separator);
}

let cachedLists = null;

export async function loadWordLists(assets) {
    if (cachedLists) return cachedLists;

    const [adverbsRes, adjectivesRes, namesRes] = await Promise.all([
        assets.fetch(new URL("/data/adverbs.txt", "http://placeholder")),
        assets.fetch(new URL("/data/adjectives.txt", "http://placeholder")),
        assets.fetch(new URL("/data/names.txt", "http://placeholder")),
    ]);

    const parse = async (res) => (await res.text()).split("\n").filter(Boolean);

    cachedLists = {
        adverbs: await parse(adverbsRes),
        adjectives: await parse(adjectivesRes),
        names: await parse(namesRes),
    };

    return cachedLists;
}
