import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MicroscopeIcon, HealthIcon, Chart02Icon, Briefcase01Icon, Target01Icon, Mortarboard02Icon, ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

const programs = [
    {
        title: "Research Methods & Scientific Writing",
        description: "Build the foundational skills to design rigorous studies, analyse data, and communicate findings clearly to academic and professional audiences.",
        icon: MicroscopeIcon,
        gradient: "from-blue-500/10 to-indigo-500/5",
        iconBg: "bg-blue-50 text-blue-600",
    },
    {
        title: "Health & Safety Compliance",
        description: "Mandatory and elective programmes covering regulatory standards, workplace safety protocols, and risk management frameworks.",
        icon: HealthIcon,
        gradient: "from-emerald-500/10 to-green-500/5",
        iconBg: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Data Analysis & Reporting",
        description: "From spreadsheet literacy to statistical modelling — practical training programmes that turn raw data into actionable insights.",
        icon: Chart02Icon,
        gradient: "from-violet-500/10 to-purple-500/5",
        iconBg: "bg-violet-50 text-violet-600",
    },
    {
        title: "Leadership & Professional Development",
        description: "Structured courses in organisational leadership, communication, project management, and decision-making for career advancement.",
        icon: Briefcase01Icon,
        gradient: "from-amber-500/10 to-orange-500/5",
        iconBg: "bg-amber-50 text-amber-600",
    },
    {
        title: "Technical Skills & Engineering",
        description: "Hands-on training in engineering practices, technical documentation, and discipline-specific tools across multiple specialisations.",
        icon: Target01Icon,
        gradient: "from-cyan-500/10 to-sky-500/5",
        iconBg: "bg-cyan-50 text-cyan-600",
    },
    {
        title: "Academic & Continuing Education",
        description: "Refresher courses, specialisation tracks, and certification pathways designed for working professionals seeking to upskill.",
        icon: Mortarboard02Icon,
        gradient: "from-rose-500/10 to-pink-500/5",
        iconBg: "bg-rose-50 text-rose-600",
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
                        Programme Areas
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                        What TRD offers
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto font-normal text-base leading-relaxed">
                        Our programmes span six core disciplines <br className="hidden lg:block" /> structured to meet you where you are and take you further.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar pl-4 -ml-4 pr-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {programs.map((program, idx) => {
                            const isPrimary = idx % 2 === 0;
                            const cardBg = isPrimary ? "bg-primary" : "bg-[#4C73E6]";

                            return (
                                <Card
                                    key={program.title}
                                    className={cn(
                                        "border-none rounded-2xl shadow-none overflow-hidden flex flex-col justify-between min-h-[460px] p-8 shrink-0 w-[300px] sm:w-[320px] snap-start",
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

                    {/* Scroll Controls */}
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
