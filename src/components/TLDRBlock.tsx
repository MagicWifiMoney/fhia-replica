interface TLDRBlockProps {
    content: string;
}

export default function TLDRBlock({ content }: TLDRBlockProps) {
    return (
        <div
            className="tldr-citation-block"
            style={{
                borderLeft: '4px solid #EEBA2B',
                background: '#F8F6F0',
                padding: '24px 28px',
                margin: '0 0 32px 0',
                borderRadius: '0 8px 8px 0',
            }}
        >
            <p style={{ margin: '0 0 12px 0', fontSize: '16px', lineHeight: 1.6, color: '#1a1a1a' }}>
                <strong style={{ color: '#01153E' }}>TL;DR:</strong> {content}
            </p>
            <p style={{ margin: 0, fontSize: '13px', color: '#6B7280', fontStyle: 'italic' }}>
                Last updated: March 2026 &middot; Written by the FHIA Commercial Insurance Team &mdash; 20+ years insuring NY businesses
            </p>
        </div>
    );
}
