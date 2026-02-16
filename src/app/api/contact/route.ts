import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { firstName, lastName, email, phone, subject, message, insuranceType, contactMethod } = body;

        // Validate required fields
        if (!firstName || !lastName || !email) {
            return NextResponse.json(
                { error: 'First name, last name, and email are required.' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        // In production, this would send an email via Resend/SendGrid/etc.
        // For now, log and return success
        console.log('Form submission received:', {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
            insuranceType,
            contactMethod,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you! Your message has been received. One of our agents will contact you within 24 hours.'
            },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again or call us at 631-659-0189.' },
            { status: 500 }
        );
    }
}
