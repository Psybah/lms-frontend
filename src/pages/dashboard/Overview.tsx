import {
    BookOpen01Icon,
    Certificate01Icon,
    Clock01Icon,
    ArrowRight01Icon,
} from "hugeicons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Overview() {
    const stats = [
        {
            title: "Courses in Progress",
            value: "3",
            icon: BookOpen01Icon,
            color: "bg-blue-500/10 text-blue-600",
        },
        {
            title: "Completed Courses",
            value: "12",
            icon: Certificate01Icon,
            color: "bg-green-500/10 text-green-600",
        },
        {
            title: "Next Session",
            value: "2h 15m",
            icon: Clock01Icon,
            color: "bg-orange-500/10 text-orange-600",
        },
    ];

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
                <p className="text-muted-foreground">Here's an overview of your learning progress.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.title} className="border-none shadow-sm bg-card hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground italic mb-1">
                                        {stat.title}
                                    </p>
                                    <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
                                </div>
                                <div className={`p-3 rounded-xl ${stat.color}`}>
                                    <stat.icon size={28} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4 border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Continue Learning</CardTitle>
                        <CardDescription>Resuming where you left off</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="group relative flex items-center justify-between p-4 rounded-2xl border border-border bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <BookOpen01Icon />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Advanced Physical Safety 201</h4>
                                    <p className="text-sm text-muted-foreground italic">Module 3: Emergency Protocol</p>
                                </div>
                            </div>
                            <Button size="icon" variant="ghost" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <ArrowRight01Icon size={20} />
                            </Button>
                        </div>
                        <div className="group relative flex items-center justify-between p-4 rounded-2xl border border-border bg-accent/5 hover:bg-accent/10 transition-colors cursor-pointer opacity-80">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <BookOpen01Icon />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Workplace Ergonomics</h4>
                                    <p className="text-sm text-muted-foreground italic">Module 1: Introduction</p>
                                </div>
                            </div>
                            <Button size="icon" variant="ghost" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <ArrowRight01Icon size={20} />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="lg:col-span-3 border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Gatekeeping & Verification</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Button className="w-full justify-between h-14 px-6 rounded-2xl text-lg font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                            View Entry Pass
                            <ArrowRight01Icon />
                        </Button>
                        <Button variant="outline" className="w-full justify-between h-14 px-6 rounded-2xl text-lg font-semibold border-2 hover:bg-accent/10 transition-all">
                            Start Prerequisite Test
                            <ArrowRight01Icon />
                        </Button>
                        <Button variant="secondary" className="w-full justify-between h-14 px-6 rounded-2xl text-lg font-semibold hover:bg-primary/10 transition-all">
                            Verify Certificate
                            <ArrowRight01Icon />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
