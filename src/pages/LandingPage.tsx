import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowRight01Icon,
    BookOpen01Icon,
    Certificate01Icon,
    UserMultiple02Icon,
    CheckmarkCircle01Icon,
    StarIcon,
    MicroscopeIcon,
    HealthIcon,
    Chart02Icon,
    Mortarboard02Icon,
    Briefcase01Icon,
    Target01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";

/* ─── Training program areas for the bento grid ─── */
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

/* ─── Learner benefits ─── */
const benefits = [
    {
        title: "Expert-Led Instruction",
        desc: "Every programme is designed and delivered by qualified practitioners and subject matter experts from within and beyond the division.",
        icon: UserMultiple02Icon,
    },
    {
        title: "Verified Certification",
        desc: "Earn institutional certificates recognised by employers and academic bodies, downloadable with a unique verification ID.",
        icon: Certificate01Icon,
    },
    {
        title: "Structured Pathways",
        desc: "Clear prerequisites and sequenced modules ensure you build knowledge in the right order, without gaps or redundancy.",
        icon: CheckmarkCircle01Icon,
    },
    {
        title: "Broad Programme Range",
        desc: "From one-day compliance courses to multi-week technical programmes — the TRD covers the full spectrum of ICT-related professional development needs.",
        icon: BookOpen01Icon,
    },
];

/* ─── Stats ─── */
const stats = [
    { label: "Active Learners", value: "1,200+", icon: UserMultiple02Icon },
    { label: "Programmes Available", value: "14", icon: BookOpen01Icon },
    { label: "Completion Rate", value: "78%", icon: CheckmarkCircle01Icon },
    { label: "Certificates Issued", value: "840+", icon: Certificate01Icon },
];

/* ─── Testimonials ─── */
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
];

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* ─── Navbar ─── */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/assets/trd.png" alt="TRD" className="h-8 w-8 object-cover rounded-lg" />
                        <div className="hidden sm:block">
                            <span className="text-sm font-medium text-slate-900">TRD Learning</span>
                            <span className="text-[10px] text-slate-400 block leading-none">ITeMS · University of Ibadan</span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <Button className="h-10 px-6 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium shadow-lg shadow-primary/10 gap-1.5">
                                Sign In
                                <ArrowRight01Icon size={14} />
                            </Button>
                        </Link>
                        <Link to="/staff-login" className="text-xs text-slate-400 hover:text-slate-600 transition-colors hidden sm:block">
                            Staff access
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ─── Hero Section ─── */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f910_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f910_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-xs font-medium px-4 py-1.5 rounded-full">
                            Training, Research & Development Unit · ITeMS, University of Ibadan
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                            Grow with TRD.{" "}
                            <br className="hidden sm:block" />
                            <span className="text-primary">Learn. Certify. Advance.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
                            The Training, Research and Development Unit (TRD) is a unit of ITeMS — the ICT centre of the University of Ibadan. We run structured professional programmes in ICT, research methods, and technical skills for staff, students, and professionals. Enrol, attend, and earn credentials that matter.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                            <Link to="/signup">
                                <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base shadow-lg shadow-primary/10 gap-2">
                                    Enrol in a Programme
                                    <ArrowRight01Icon size={16} />
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="outline" className="h-12 px-8 rounded-full border-slate-200 text-slate-600 font-medium text-base hover:border-primary/30 hover:text-primary hover:bg-primary/5">
                                    View My Learning
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* ─── Hero Image ─── */}
                    <div className="mt-16 lg:mt-20 relative max-w-5xl mx-auto">
                        <div className="rounded-3xl overflow-hidden border border-slate-200/60 shadow-2xl shadow-slate-200/40">
                            <img
                                src="/assets/trd.png"
                                alt="TRD Training Session"
                                className="w-full h-auto object-cover aspect-[16/8]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Stats Strip ─── */}
            <section className="border-y border-slate-100 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                    <stat.icon size={22} />
                                </div>
                                <div>
                                    <p className="text-2xl font-medium tracking-tight text-slate-900">{stat.value}</p>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Programme Areas (Bento) ─── */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                            Programme Areas
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                            What TRD offers
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-normal text-base leading-relaxed">
                            Our programmes span six core disciplines — structured to meet you where you are and take you further.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {programs.map((program, idx) => (
                            <Card
                                key={program.title}
                                className={cn(
                                    "border-slate-100 rounded-3xl shadow-none hover:shadow-lg hover:shadow-slate-100/80 transition-all duration-500 group overflow-hidden",
                                    idx === 0 && "lg:col-span-2",
                                    idx === 3 && "lg:col-span-2"
                                )}
                            >
                                <CardContent className={cn("p-8 relative", idx === 0 || idx === 3 ? "lg:p-10" : "")}>
                                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", program.gradient)} />
                                    <div className="relative space-y-4">
                                        <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110", program.iconBg)}>
                                            <program.icon size={22} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-medium text-slate-900 group-hover:text-slate-800">{program.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed font-normal">{program.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Why TRD ─── */}
            <section className="py-20 lg:py-28 bg-slate-50/50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: copy */}
                        <div className="space-y-6">
                            <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                                Why TRD
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-snug">
                                Professional training rooted in the University of Ibadan
                            </h2>
                            <p className="text-slate-500 font-normal text-base leading-relaxed">
                                TRD is the Training, Research and Development Unit of ITeMS (Information, Technology and Media Services) — the ICT centre of the University of Ibadan. Our programmes are designed for university staff, students, and external professionals seeking to build real, verifiable competencies.
                            </p>
                            <p className="text-slate-500 font-normal text-base leading-relaxed">
                                Whether you're attending your first ICT workshop or pursuing a specialised certification, TRD delivers structured learning experiences backed by institutional credibility.
                            </p>
                            <Link to="/signup">
                                <Button className="h-11 px-7 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-lg shadow-primary/10 gap-2 mt-2">
                                    Browse Programmes
                                    <ArrowRight01Icon size={14} />
                                </Button>
                            </Link>
                        </div>

                        {/* Right: benefit cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((b) => (
                                <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary/20 hover:shadow-sm transition-all duration-300 space-y-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                        <b.icon size={20} />
                                    </div>
                                    <h4 className="text-sm font-medium text-slate-900">{b.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Learner Journey ─── */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                            Your Journey
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                            From enrolment to certification
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto font-normal text-base leading-relaxed">
                            A clear, managed pathway from first sign-in to verified credential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Enrol", desc: "Browse available programmes and register for the cohort that fits your schedule." },
                            { step: "02", title: "Assess", desc: "Complete a prerequisite assessment to confirm readiness and secure your place in the session." },
                            { step: "03", title: "Attend", desc: "Show up to the physical training session with your digital entry pass and engage with expert instructors." },
                            { step: "04", title: "Certify", desc: "Complete the programme and download an institutionally verified certificate to your name." },
                        ].map((item) => (
                            <div key={item.step} className="text-center space-y-4 group">
                                <div className="mx-auto h-16 w-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary text-xl font-medium shadow-sm group-hover:border-primary/30 group-hover:shadow-primary/10 group-hover:shadow-md transition-all duration-300">
                                    {item.step}
                                </div>
                                <div className="space-y-1.5">
                                    <h3 className="text-base font-medium text-slate-900">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-normal max-w-[200px] mx-auto">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Testimonials ─── */}
            <section className="py-20 lg:py-28 bg-slate-50/50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <Badge variant="secondary" className="bg-accent/30 text-primary border-none text-xs font-medium px-3 py-1 rounded-full">
                            From Participants
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">
                            What our learners say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <Card key={t.name} className="border-slate-100 rounded-3xl shadow-none">
                                <CardContent className="p-8 space-y-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} size={14} className="text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed font-normal italic">
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
                </div>
            </section>

            {/* ─── CTA Section ─── */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative rounded-[2rem] bg-primary overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

                        <div className="relative text-center py-16 lg:py-20 px-8 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                                Begin your next programme with TRD, ITeMS.
                            </h2>
                            <p className="text-base text-white/70 max-w-lg mx-auto font-normal leading-relaxed">
                                Hundreds of University of Ibadan staff, students, and professionals have already earned their credentials through TRD. Open enrolment, structured pathways, and institutionally backed certification — all in one place.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                <Link to="/signup">
                                    <Button className="h-12 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-medium text-sm shadow-lg shadow-black/10 gap-2">
                                        Create an Account
                                        <ArrowRight01Icon size={14} />
                                    </Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="outline" className="h-12 px-8 rounded-full bg-primary border-white/70 text-white hover:bg-white hover:border-white/30 font-medium text-sm">
                                        Sign In
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Footer ─── */}
            <footer className="border-t border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <img src="/assets/trd.png" alt="TRD" className="h-7 w-7 object-cover rounded-md" />
                            <div>
                                <span className="text-sm font-medium text-slate-900">TRD Learning</span>
                                <span className="text-[10px] text-slate-400 block leading-none">ITeMS · University of Ibadan</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-400">
                            <Link to="/login" className="hover:text-primary transition-colors">Sign In</Link>
                            <Link to="/signup" className="hover:text-primary transition-colors">Enrol</Link>
                            <Link to="/staff-login" className="hover:text-slate-600 transition-colors text-slate-300">Staff</Link>
                        </div>

                        <p className="text-xs text-slate-300 font-normal">
                            &copy; {new Date().getFullYear()} TRD · ITeMS, University of Ibadan. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
