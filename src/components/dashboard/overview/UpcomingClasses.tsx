import { Calendar03Icon, ArrowRight01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { upcomingClasses } from "@/data/dashboard";

export function UpcomingClasses() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-slate-800">Upcoming Classes</h2>
                <Button variant="link" className="text-primary font-medium text-xs p-0">Schedule</Button>
            </div>

            <div className="space-y-1">
                {upcomingClasses.map((item, index) => (
                    <div key={item.title}>
                        <div className="group flex items-center justify-between py-4 hover:bg-slate-50/50 px-2 rounded-xl transition-colors cursor-pointer text-left">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <Calendar03Icon size={18} />
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
    );
}
