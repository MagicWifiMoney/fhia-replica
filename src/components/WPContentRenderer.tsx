'use client';

interface WPContentRendererProps {
    content: string;
    className?: string;
}

/**
 * Renders WordPress HTML content with proper styling.
 * Uses dangerouslySetInnerHTML since the content comes from our own WordPress CMS.
 */
export default function WPContentRenderer({ content, className = '' }: WPContentRendererProps) {
    return (
        <div
            className={`wp-content ${className}`}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
