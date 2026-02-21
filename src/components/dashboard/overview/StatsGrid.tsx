import { Card, CardContent } from "@/components/ui/card";
import { dashboardStats } from "@/data/dashboard";

export function StatsGrid() {
    return (
        <div className="bg-slate-100 p-4 rounded-[2rem]">
            <div className="grid gap-4 md:grid-cols-4">
                {dashboardStats.map((stat) => (
                    <Card key={stat.title} className="border-none bg-white rounded-2xl overflow-hidden shadow-none transition-all hover:shadow-sm">
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
    );
}
