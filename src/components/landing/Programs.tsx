import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
    Target01Icon,
    BookOpen01Icon,
    Chart02Icon,
    Briefcase01Icon,
    Mortarboard02Icon,
    MicroscopeIcon,
    ArrowLeft01Icon,
    ArrowRight01Icon,
} from "hugeicons-react";

/** Six featured pathways for the landing carousel (subset of full catalog). */
const featuredPrograms = [
    {
        title: "Full-stack Web Development",
        description: "Modern front-end and back-end stacks, APIs, and deployment—build production-ready web applications.",
        icon: Target01Icon,
    },
    {
        title: "Ethical Hacking and Penetration Testing",
        description: "Hands-on labs in reconnaissance, exploitation, and responsible reporting for aspiring security specialists.",
        icon: Chart02Icon,
    },
    {
        title: "Introduction to AI and ML",
        description: "Core machine learning concepts, data pipelines, evaluation, and responsible use of AI in real projects.",
        icon: MicroscopeIcon,
    },
    {
        title: "Mobile App Development",
        description: "Design and ship native and cross-platform mobile experiences with industry-standard tooling.",
        icon: BookOpen01Icon,
    },
    {
        title: "Software Engineering",
        description: "Principles, patterns, and team practices for building reliable, maintainable software systems.",
        icon: Briefcase01Icon,
    },
    {
        title: "Cybersecurity Fundamentals",
        description: "Threat models, secure design, identity, and incident readiness—your foundation in security.",
        icon: Mortarboard02Icon,
    },
];

export function Programs() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -340 : 340;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                        Featured courses
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                        What Davidson Tech Academy offers
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto font-normal text-base leading-relaxed">
                        A snapshot of our most in-demand pathways—explore the full catalog in the learner dashboard.
                    </p>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar pl-4 -ml-4 pr-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {featuredPrograms.map((program, idx) => {
                            const isPrimary = idx % 2 === 0;
                            const cardBg = isPrimary ? "!bg-primary" : "!bg-[#6E4E38]";

                            return (
                                <Card
                                    key={program.title}
                                    className={cn(
                                        "border-none rounded-2xl shadow-none overflow-hidden flex flex-col justify-between min-h-[400px] sm:min-h-[460px] p-6 sm:p-8 shrink-0 w-[270px] sm:w-[320px] snap-start text-white",
                                        cardBg
                                    )}
                                >
                                    <div className="flex justify-start w-full">
                                        <div className="text-white">
                                            <program.icon size={32} />
                                        </div>
                                    </div>

                                    <div className="mt-12 space-y-3">
                                        <h3 className="text-xl font-medium text-white">{program.title}</h3>
                                        <p className="text-sm text-white/80 leading-relaxed font-normal">{program.description}</p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            onClick={() => scroll("left")}
                            className="h-12 w-12 rounded-full flex items-center justify-center bg-white text-primary border border-primary hover:bg-primary/5 transition-colors"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft01Icon size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="h-12 w-12 rounded-full flex items-center justify-center bg-white text-primary border border-primary hover:bg-primary/5 transition-colors"
                            aria-label="Scroll right"
                        >
                            <ArrowRight01Icon size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
