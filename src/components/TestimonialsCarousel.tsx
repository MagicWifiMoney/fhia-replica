'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Jamira Minton',
        type: 'Home Insurance',
        quote: "John's team made finding home insurance so easy. They compared multiple options and found me great coverage at a price I could afford. Highly recommend!",
        rating: 5,
        image: '/images/testimonials/testimonial01.webp',
    },
    {
        name: 'Anthony Wofford',
        type: 'Auto Insurance',
        quote: "Kyle was incredibly helpful throughout the entire process. Got me covered quickly and saved me money compared to my old policy. Great experience!",
        rating: 5,
        image: '/images/testimonials/testimonial02.webp',
    },
    {
        name: 'Christian Raphael',
        type: 'Business Insurance',
        quote: "Brandon Blood took care of everything for my business. Professional, responsive, and got me exactly what I needed. A+ service all around.",
        rating: 5,
        image: '/images/testimonials/testimonial03.webp',
    },
    {
        name: 'Michael Torres',
        type: 'Commercial Auto',
        quote: "Best insurance agency on Long Island. They got my fleet of 12 vehicles covered in record time and saved us over $8,000 annually. Incredible work.",
        rating: 5,
        image: '/images/testimonials/testimonial01.webp',
    },
    {
        name: 'Sarah Bennett',
        type: 'Home & Auto Bundle',
        quote: "Switched both my home and auto insurance to FHIA and could not be happier. Seamless process and the team genuinely cares about getting you the right coverage.",
        rating: 5,
        image: '/images/testimonials/testimonial02.webp',
    },
];

function StarIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [isPaused, next]);

    // Show 3 cards at a time on desktop, 1 on mobile
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(current + i) % testimonials.length]);
        }
        return visible;
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600">
                        Don&apos;t just take our word for it — hear from real customers.
                    </p>
                    {/* Google rating badge */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <div className="flex text-gold">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <span className="text-gray-600 text-sm font-medium">4.9 / 5 on Google</span>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {getVisibleTestimonials().map((testimonial, idx) => (
                            <div
                                key={`${current}-${idx}`}
                                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-500 animate-fadeIn"
                            >
                                <div className="flex text-gold mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-navy">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.type}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={prev}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-gold transition-colors hover:shadow-xl hidden md:flex"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-gold transition-colors hover:shadow-xl hidden md:flex"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-gold w-8' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
