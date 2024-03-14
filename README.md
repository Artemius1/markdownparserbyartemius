# Markdown Parser

A simple Markdown to HTML parser package written in JavaScript.

## Installation

To install the Markdown Parser package, you can use npm:

```bash
npm install markdown-parser
```

## Usage

```javascript
const parseMarkdown = require('markdown-parser');

const markdownText = `
# Hello, Markdown!

This is **bold** and _italic_ text.

## Usage Example

\`\`\`javascript
const parseMarkdown = require('markdown-parser');

const markdownText = '# Hello, Markdown!';
const html = parseMarkdown(markdownText);
console.log(html);
\`\`\`
`;

const html = parseMarkdown(markdownText);
console.log(html);
```

## API

### `parseMarkdown(markdown: string): string`

Parses the given Markdown text into HTML.

- `markdown`: The Markdown text to parse.
- Returns: The parsed HTML.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
