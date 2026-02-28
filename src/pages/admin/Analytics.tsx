import { Card, CardContent } from "@/components/ui/card";
import { adminStats, enrollmentTrends, venueUsage } from "@/data/admin";
import { ArrowUp01Icon, ArrowDown01Icon } from "hugeicons-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
} from "recharts";

export default function AdminAnalytics() {
    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-medium tracking-tight text-slate-800">Global Analytics</h1>
                    <p className="text-slate-400 font-medium text-sm">Monitor system-wide performance and enrollment health.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="bg-slate-100 p-4 rounded-[2rem]">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {adminStats.map((stat) => (
                        <Card key={stat.title} className="border-none bg-white rounded-2xl overflow-hidden shadow-none transition-all hover:shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4 text-primary">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <stat.icon size={20} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none">
                                        {stat.title}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-2xl font-medium tracking-tight text-slate-800">{stat.value}</h3>
                                        {stat.change && (
                                            <Badge
                                                variant="secondary"
                                                className={cn(
                                                    "text-[10px] font-medium px-1.5 h-5 border-none gap-0.5",
                                                    stat.trend === "up" && "bg-emerald-50 text-emerald-600",
                                                    stat.trend === "down" && "bg-red-50 text-red-500"
                                                )}
                                            >
                                                {stat.trend === "up" ? <ArrowUp01Icon size={10} /> : <ArrowDown01Icon size={10} />}
                                                {stat.change}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid gap-8 lg:grid-cols-7 px-2">
                {/* Enrollment Trends */}
                <div className="lg:col-span-4 space-y-4">
                    <h2 className="text-xl font-medium text-slate-800">Enrollment Trends</h2>
                    <Card className="border-slate-100 rounded-2xl shadow-none">
                        <CardContent className="p-6">
                            <ResponsiveContainer width="100%" height={280}>
                                <AreaChart data={enrollmentTrends} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(225, 76%, 48%)" stopOpacity={0.15} />
                                            <stop offset="95%" stopColor="hsl(225, 76%, 48%)" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="completeGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0.15} />
                                            <stop offset="95%" stopColor="hsl(160, 60%, 45%)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        contentStyle={{
                                            borderRadius: "12px",
                                            border: "1px solid #e2e8f0",
                                            boxShadow: "0 4px 6px -1px rgba(0,0,0,.05)",
                                            fontSize: "12px",
                                        }}
                                    />
                                    <Area type="monotone" dataKey="enrollments" stroke="hsl(225, 76%, 48%)" fill="url(#enrollGrad)" strokeWidth={2} name="Enrollments" />
                                    <Area type="monotone" dataKey="completions" stroke="hsl(160, 60%, 45%)" fill="url(#completeGrad)" strokeWidth={2} name="Completions" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Venue Heatmap */}
                <div className="lg:col-span-3 space-y-4">
                    <h2 className="text-xl font-medium text-slate-800">Venue Capacity</h2>
                    <Card className="border-slate-100 rounded-2xl shadow-none">
                        <CardContent className="p-6">
                            <div className="space-y-3">
                                {venueUsage.map((v) => {
                                    const pct = Math.round((v.usage / v.capacity) * 100);
                                    return (
                                        <div key={v.venue} className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-slate-700 truncate max-w-[180px]">{v.venue}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-slate-400">{v.usage}/{v.capacity}</span>
                                                    <Badge
                                                        variant="secondary"
                                                        className={cn(
                                                            "text-[9px] font-medium px-1.5 h-4 border-none rounded-full",
                                                            v.status === "optimal" && "bg-emerald-50 text-emerald-600",
                                                            v.status === "overbooked" && "bg-red-50 text-red-500",
                                                            v.status === "underutilized" && "bg-amber-50 text-amber-600"
                                                        )}
                                                    >
                                                        {v.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                                                <div
                                                    className={cn(
                                                        "h-full rounded-full transition-all duration-500",
                                                        v.status === "optimal" && "bg-primary",
                                                        v.status === "overbooked" && "bg-red-400",
                                                        v.status === "underutilized" && "bg-amber-400"
                                                    )}
                                                    style={{ width: `${Math.min(pct, 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
