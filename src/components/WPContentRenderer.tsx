'use client';

interface WPContentRendererProps {
    content: string;
    className?: string;
}

/**
 * Rewrites absolute fhia.net links in WordPress HTML to relative paths.
 * This prevents link equity from leaking to the old domain and ensures
 * internal links work correctly on the new domain.
 */
function rewriteWPLinks(html: string): string {
    return html
        .replace(/https?:\/\/(www\.)?fhia\.net\//g, '/')
        .replace(/href="\/wp-content\//g, 'href="https://fhia.net/wp-content/');
}

/**
 * Renders WordPress HTML content with proper styling.
 * Uses dangerouslySetInnerHTML since the content comes from our own WordPress CMS.
 */
export default function WPContentRenderer({ content, className = '' }: WPContentRendererProps) {
    return (
        <div
            className={`wp-content ${className}`}
            dangerouslySetInnerHTML={{ __html: rewriteWPLinks(content) }}
        />
    );
}
