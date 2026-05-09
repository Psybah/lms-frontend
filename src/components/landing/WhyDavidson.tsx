import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight01Icon, UserMultiple02Icon, Certificate01Icon, CheckmarkCircle01Icon, BookOpen01Icon } from "hugeicons-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const benefits = [
    {
        title: "Expert-Led Instruction",
        desc: "Designed and delivered by qualified practitioners and subject matter experts.",
        icon: UserMultiple02Icon,
        image: "/assets/landing-page/expert.jpg"
    },
    {
        title: "Govt Approved Certification",
        desc: "Earn institutional certificates recognised by employers and academic bodies.",
        icon: Certificate01Icon,
        image: "/assets/landing-page/certificate.jpg"
    },
    {
        title: "Structured Pathways",
        desc: "Clear prerequisites and sequenced modules ensure you build knowledge efficiently.",
        icon: CheckmarkCircle01Icon,
        image: "/assets/landing-page/growth.jpg"
    },
    {
        title: "Broad Programme Range",
        desc: "Software, data, and digital-skills tracks built for students entering Davidson Tech Academy.",
        icon: BookOpen01Icon,
        image: "/assets/landing-page/collab.jpg"
    },
];

export function WhyDavidson() {
    return (
        <section className="py-20 lg:py-28 bg-white ">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: copy */}
                    <div className="space-y-6">
                        <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                            Davidson Tech Academy
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-snug">
                            Your on-ramp to tech at Davidson University
                        </h2>
                        <div className="text-slate-500 font-normal text-base leading-relaxed space-y-4">
                            <p>
                                Davidson Tech Academy is where Davidson University students—and learners from our wider community—gain hands-on skills in a structured, supportive environment.
                            </p>
                            <p>
                                Enrol in cohort-based programmes, learn from experienced instructors on campus at Oba Olagbegi Street, New Bodija, and leave with credentials that reflect real project work and industry-aligned practice.
                            </p>
                        </div>
                        <Link to="/signup">
                            <Button className="h-11 px-7 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-lg shadow-primary/10 gap-2 mt-4">
                                Browse Programmes
                                <ArrowRight01Icon size={14} />
                            </Button>
                        </Link>
                    </div>

                    {/* Right: benefit cards with Swiper */}
                    <div className="w-full relative px-0.5">
                        <style>
                            {`
                                .davidson-swiper .swiper-pagination {
                                    position: relative;
                                    margin-top: 2rem;
                                }
                                .davidson-swiper .swiper-pagination-bullet {
                                    background: #cbd5e1;
                                    opacity: 1;
                                }
                                .davidson-swiper .swiper-pagination-bullet-active {
                                    background: #503723;
                                }
                            `}
                        </style>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                }
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            className="davidson-swiper !pb-12"
                        >
                            {benefits.map((b) => (
                                <SwiperSlide key={b.title}>
                                    <div className="relative overflow-hidden rounded-2xl h-[400px] group">
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${b.image})` }}
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                        {/* Content */}
                                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                                            <div className="h-12 w-12flex items-center justify-center text-white -mb-1">
                                                <b.icon size={24} />
                                            </div>
                                            <h4 className="text-xl font-medium text-white mb-3">
                                                {b.title}
                                            </h4>
                                            <p className="text-sm text-slate-200 leading-relaxed font-normal">
                                                {b.desc}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
