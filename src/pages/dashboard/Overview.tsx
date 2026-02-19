import {
    BookOpen01Icon,
    Certificate01Icon,
    Mortarboard01Icon,
    Clock01Icon,
    ArrowRight01Icon,
    Calendar01Icon,
} from "hugeicons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Overview() {
    const stats = [
        {
            title: "Current Enrollments",
            value: "3",
            icon: BookOpen01Icon,
        },
        {
            title: "Completed Courses",
            value: "12",
            icon: Mortarboard01Icon,
        },
        {
            title: "Certificates Ready",
            value: "8",
            icon: Certificate01Icon,
        },
        {
            title: "Next Learning Session",
            value: "2h 15m",
            icon: Clock01Icon,
        },
    ];

    const continuousLearning = [
        {
            title: "Advanced Physical Safety 201",
            module: "Module 3: Emergency Protocol",
            progress: "65%",
        },
        {
            title: "Workplace Ergonomics",
            module: "Module 1: Introduction",
            progress: "12%",
        },
        {
            title: "Cybersecurity Fundamentals",
            module: "Module 4: Phishing Scams",
            progress: "88%",
        },
        {
            title: "Leadership & Management",
            module: "Module 2: Team Building",
            progress: "45%",
        },
    ];

    const upcomingClasses = [
        {
            title: "Fire Safety Drill",
            date: "Tomorrow, 10:00 AM",
            type: "Practical",
        },
        {
            title: "Network Administration",
            date: "Friday, 2:30 PM",
            type: "Theory",
        },
        {
            title: "Project Management 101",
            date: "Mon, 24 Feb, 9:00 AM",
            type: "Virtual",
        },
    ];

    return (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-medium tracking-tight text-slate-800">Overview Dashboard</h1>
                    <p className="text-slate-400 font-medium text-sm">Manage and track your learning progress and certifications.</p>
                </div>
            </div>

            <div className="bg-slate-100 p-4 rounded-[2rem]">
                <div className="grid gap-4 md:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.title} className="border-none bg-white rounded-2xl overflow-hidden shadow-none">
                            <CardContent className="p-6 flex flex-col gap-4 text-primary">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <stat.icon size={20} />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none">
                                        {stat.title}
                                    </p>
                                    <h3 className="text-2xl font-medium tracking-tight text-slate-800">{stat.value}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7 px-2">
                <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-slate-800">Continue Learning</h2>
                        <Button variant="link" className="text-primary font-medium text-xs p-0">View All</Button>
                    </div>

                    <div className="space-y-1">
                        {continuousLearning.map((item, index) => (
                            <div key={item.title}>
                                <div className="group flex items-center justify-between py-4 hover:bg-slate-50/50 px-2 rounded-xl transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                                            <BookOpen01Icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-slate-800">{item.title}</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">{item.module} • <span className="text-primary font-medium">{item.progress}</span></p>
                                        </div>
                                    </div>
                                    <ArrowRight01Icon size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                                {index < continuousLearning.length - 1 && <Separator className="bg-slate-100" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium text-slate-800">Upcoming Classes</h2>
                        <Button variant="link" className="text-primary font-medium text-xs p-0">Schedule</Button>
                    </div>

                    <div className="space-y-1">
                        {upcomingClasses.map((item, index) => (
                            <div key={item.title}>
                                <div className="group flex items-center justify-between py-4 hover:bg-slate-50/50 px-2 rounded-xl transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <Calendar01Icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-slate-700 text-sm leading-tight">{item.title}</h4>
                                            <p className="text-[10px] text-slate-400 mt-0.5 font-medium uppercase tracking-tight">
                                                {item.type} • {item.date}
                                            </p>
                                        </div>
                                    </div>
                                    <ArrowRight01Icon size={16} className="text-slate-200 group-hover:text-primary transition-colors" />
                                </div>
                                {index < upcomingClasses.length - 1 && <Separator className="bg-slate-100" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
