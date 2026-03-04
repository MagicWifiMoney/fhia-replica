'use client';

import Script from 'next/script';

interface QuoteFormEmbedProps {
    variant: 'hero' | 'standalone';
}

const FORM_ID = 'SgFxmb5UWX0hBF42ImH2';
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';

export default function QuoteFormEmbed({ variant }: QuoteFormEmbedProps) {
    if (variant === 'hero') {
        return (
            <div className="bg-white rounded-xl shadow-lg p-2 min-h-[543px] w-full">
                <iframe
                    src={FORM_SRC}
                    style={{ border: 'none', width: '100%', minHeight: '543px' }}
                    id={`inline-${FORM_ID}`}
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Commercial Auto Quote"
                    data-height="543"
                    data-layout-iframe-id={`inline-${FORM_ID}`}
                    data-form-id={FORM_ID}
                    title="Commercial Auto Insurance Quote Form"
                />
                <Script src={SCRIPT_SRC} strategy="lazyOnload" />
            </div>
        );
    }

    // standalone variant — full-width bottom section
    return (
        <section className="bg-gray-50 py-16">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-3">
                        Get Your Free Quote
                    </h2>
                    <p className="text-gray-600">
                        Compare rates from 50+ carriers. Most quotes delivered same-day. No obligation.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-2 min-h-[543px]">
                    <iframe
                        src={FORM_SRC}
                        style={{ border: 'none', width: '100%', minHeight: '543px' }}
                        id={`standalone-${FORM_ID}`}
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Commercial Auto Quote"
                        data-height="543"
                        data-layout-iframe-id={`standalone-${FORM_ID}`}
                        data-form-id={FORM_ID}
                        title="Commercial Auto Insurance Quote Form"
                    />
                    <Script src={SCRIPT_SRC} strategy="lazyOnload" />
                </div>
            </div>
        </section>
    );
}
