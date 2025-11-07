# Petname Generator

A static web implementation of the [petname utility](https://github.com/dustinkirkland/petname) by Dustin Kirkland. Generate memorable, pronounceable names for servers, containers, or anything else.

## Features

- Generate random petnames with 1-3 words
- Customize separator character
- Generate multiple petnames at once
- Copy to clipboard functionality
- Responsive, modern UI
- 100% static HTML/CSS/JavaScript (no build process required)
- Shows total possible combinations

## Word Lists

The generator uses three word lists from the original petname utility:

- **261 Adverbs** - Used for 3-word names
- **449 Adjectives** - Used for 2 and 3-word names
- **452 Animal Names** - Used for all name types

## Possible Combinations

- 1 word: 452 combinations
- 2 words: 202,948 combinations
- 3 words: 52,969,428 combinations

## Usage

Simply open `index.html` in a web browser, or deploy to any static hosting service.

### Deployment

This site is designed to be hosted at `petname.moles.dev`. Deploy by:

1. Uploading `index.html` to your web server
2. Configuring your DNS to point `petname.moles.dev` to your server
3. No build process or dependencies required

### Local Development

```bash
# Open in browser
open index.html

# Or use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Examples

- `wiggly-yellowtail` (2 words)
- `primly-lasting-toucan` (3 words)
- `phoenix` (1 word)

## Credits

Based on the original [petname](https://github.com/dustinkirkland/petname) utility by Dustin Kirkland, used by Ubuntu, Kubernetes, and many other projects.

## License

This project is licensed under the Apache License 2.0, the same license as the original [petname project](https://github.com/dustinkirkland/petname).

- **Word lists** (adverbs, adjectives, names): Copyright (C) 2014-2015 Dustin Kirkland
- **Web interface**: Derivative work based on the original petname project

See the [LICENSE](LICENSE) file for the full Apache License 2.0 text and the [NOTICE](NOTICE) file for attribution details.
