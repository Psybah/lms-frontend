import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "The structured pathway made it easy to know exactly where I stood and what I needed to do next. I finished in six weeks.",
        name: "Chuka Obi",
        role: "Research Associate",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chuka",
    },
    {
        quote: "I enrolled, completed the prerequisite assessment, attended the session, and received my certificate — all managed in one place.",
        name: "Ngozi Eze",
        role: "Programme Participant",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ngozi",
    },
    {
        quote: "The data analysis course directly improved the quality of my reports. The instructors are genuinely excellent.",
        name: "Adewale Johnson",
        role: "Technical Officer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=adewale",
    },
    {
        quote: "Davidson Tech Academy completely transformed my understanding of compliance. Now, our operations align flawlessly with standard safety protocols.",
        name: "Yewande Balogun",
        role: "Operations Manager",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yewande",
    },
    {
        quote: "Excellent trainers. Complex scientific writing concepts were broken down into practical, step-by-step methodologies.",
        name: "Olakunle Davies",
        role: "Lecturer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=olakunle",
    },
    {
        quote: "As a student, having these formal credentials before graduation sets my resume apart. The leadership programme was invaluable.",
        name: "Amaka Uzo",
        role: "Undergraduate",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amaka",
    },
    {
        quote: "Thorough, structured, and highly relevant. The Health and Safety modules were exactly what my unit required this quarter.",
        name: "Dr. Hassan Ali",
        role: "Medical Consultant",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hassan",
    },
    {
        quote: "The blended learning approach made it possible to attend classes without disrupting my work schedule. Very convenient.",
        name: "Kemi Adeleke",
        role: "Admin Officer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kemi",
    },
    {
        quote: "What stands out most is the focus on practical application. Every module ends with real-world project deliverables.",
        name: "Tunde Olatunji",
        role: "Data Analyst",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tunde",
    },
    {
        quote: "From applying to graduating, the Davidson Tech Academy platform was seamless and incredibly intuitive to use.",
        name: "Flora Etim",
        role: "Postgraduate Student",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=flora",
    },
];

export function Testimonials() {
    return (
        <section className="py-20 lg:py-28 bg-slate-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                        From Participants
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                        What our learners say
                    </h2>
                </div>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex gap-3 min-w-full group-hover:[animation-play-state:paused] shrink-0">
                        {testimonials.map((t, idx) => (
                            <Card key={`t1-${idx}`} className="border-slate-100 rounded-2xl shadow-none w-[280px] sm:w-[340px] shrink-0">
                                <CardContent className="p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
                                    <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">{t.name}</p>
                                            <p className="text-[11px] text-slate-400 font-medium">{t.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {/* Duplicate for seamless looping */}
                    <div className="animate-marquee flex gap-4 min-w-full group-hover:[animation-play-state:paused] shrink-0 ml-4 border-none">
                        {testimonials.map((t, idx) => (
                            <Card key={`t2-${idx}`} className="border-slate-100 rounded-2xl shadow-none w-[280px] sm:w-[340px] shrink-0 border-none">
                                <CardContent className="p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full border-none">
                                    <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">{t.name}</p>
                                            <p className="text-[11px] text-slate-400 font-medium">{t.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Fading Edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-50 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-50 to-transparent" />
                </div>
            </div>
        </section>
    );
}
