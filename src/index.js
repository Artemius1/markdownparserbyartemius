/**
 * Parse Markdown text into HTML.
 * @param {string} markdown - The Markdown text to parse.
 * @returns {string} - The parsed HTML.
 */
function parseMarkdown(markdown) {
    // Replace Markdown syntax with HTML equivalents
    const html = markdown
        // Convert headers
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        // Convert emphasis (italic)
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/_([^_]+)_/g, '<em>$1</em>')
        // Convert strong (bold)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/__([^_]+)__/g, '<strong>$1</strong>')
        // Convert code blocks
        .replace(/```([^`]+)```/g, '<pre>$1</pre>')
        // Convert inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Convert paragraphs
        .replace(/(.+)/g, '<p>$1</p>');

    return html;
}

module.exports = parseMarkdown;
