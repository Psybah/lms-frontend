import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SearchList01Icon, Task01Icon, UserGroupIcon, DiplomaIcon } from "hugeicons-react";

const journeySteps = [
    { step: "01", icon: SearchList01Icon, title: "Enrol", desc: "Browse available programmes and register for the cohort that fits your schedule." },
    { step: "02", icon: Task01Icon, title: "Assess", desc: "Complete a prerequisite assessment to confirm readiness and secure your place in the session." },
    { step: "03", icon: UserGroupIcon, title: "Attend", desc: "Show up to the physical training session with your digital entry pass and engage with expert instructors." },
    { step: "04", icon: DiplomaIcon, title: "Certify", desc: "Complete the programme and download an institutionally verified certificate to your name." },
];

export function LearnerJourney() {
    const [activeStep, setActiveStep] = useState<string>("01");
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const stepId = entry.target.getAttribute('data-step');
                        if (stepId) setActiveStep(stepId);
                    }
                });
            },
            {
                root: scrollContainerRef.current,
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0
            }
        );

        const currentContainer = scrollContainerRef.current;
        if (currentContainer) {
            const children = currentContainer.querySelectorAll('.journey-step');
            children.forEach(child => observer.observe(child));
        }

        return () => observer.disconnect();
    }, []);

    // Track scroll progress for the colored line
    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        const maxScroll = scrollHeight - clientHeight;
        if (maxScroll <= 0) return;
        
        const progress = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
        setScrollProgress(progress);
    };

    return (
        <section className="bg-white py-16 lg:py-24 relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center space-y-4 mb-10">
                    <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-4 py-1.5 rounded-full hover:bg-accent/30 cursor-default pointer-events-none">
                        Your Journey
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 pointer-events-none">
                        From enrolment to certification
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto font-normal text-lg leading-relaxed pointer-events-none">
                        A clear, managed pathway from first sign-in to verified credential.
                    </p>
                </div>

                {/* Fixed Height Limited Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="relative max-w-2xl mx-auto h-[300px] overflow-y-auto snap-y snap-mandatory hide-scrollbar rounded-3xl"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    }}
                >
                    <div className="relative flex flex-col">
                        {/* Continuous timeline line background */}
                        <div className="absolute left-[28px] sm:left-[52px] -translate-x-1/2 top-4 bottom-4 w-[2px] bg-slate-100 overflow-hidden">
                            {/* Animated colored progress line */}
                            <div 
                                className="absolute top-0 left-0 w-full bg-primary"
                                style={{ height: `${scrollProgress}%` }}
                            />
                        </div>

                        {journeySteps.map((item) => {
                            const isActive = activeStep === item.step;

                            return (
                                <div
                                    key={item.step}
                                    className="journey-step relative flex items-center h-[300px] shrink-0 snap-center pl-[76px] sm:pl-32 pr-4 sm:pr-8"
                                    data-step={item.step}
                                >
                                    {/* The Icon Container */}
                                    <div className="absolute left-[28px] sm:left-[52px] -translate-x-1/2 flex items-center justify-center">
                                        <div
                                            className={cn(
                                                "h-12 w-12 rounded-full border-2 transition-all duration-500 bg-white z-10 flex items-center justify-center shadow-sm",
                                                isActive ? "border-primary text-primary" : "border-slate-200 text-slate-400"
                                            )}
                                        >
                                            <item.icon size={22} className={cn("transition-colors duration-500")} />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className={cn(
                                        "transition-all duration-500",
                                        isActive ? "opacity-100 translate-x-0" : "opacity-40 translate-x-4"
                                    )}>
                                        <span className={cn(
                                            "font-semibold tracking-wider text-sm mb-2 block transition-colors duration-500 pointer-events-none",
                                            isActive ? "text-primary" : "text-slate-400"
                                        )}>
                                            STAGE {item.step}
                                        </span>
                                        <h3 className={cn(
                                            "text-2xl lg:text-3xl font-semibold mb-3 transition-colors duration-500 pointer-events-none",
                                            isActive ? "text-slate-900" : "text-slate-500"
                                        )}>
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-base leading-relaxed pointer-events-none">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
