import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Calendar01Icon,
    Location01Icon,
    Download01Icon,
    Ticket01Icon
} from "hugeicons-react";
import { EntryPass } from "@/data/entry-passes";

interface EntryPassCardProps {
    pass: EntryPass;
}

export function EntryPassCard({ pass }: EntryPassCardProps) {
    return (
        <Card className="group border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[2rem] overflow-hidden bg-white">
            <CardContent className="p-0 flex flex-col sm:flex-row">
                {/* QR Section */}
                <div className="p-6 bg-slate-50 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 shrink-0">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 mb-3">
                        <img src={pass.qrUrl} alt="Pass QR Code" className="w-24 h-24" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{pass.passCode}</span>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <Ticket01Icon size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Entry Pass</span>
                        </div>
                        <h3 className="text-xl font-medium text-slate-900 leading-tight mb-2">
                            {pass.eventTitle}
                        </h3>
                    </div>

                    <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                            <Calendar01Icon size={14} className="text-slate-400" />
                            <span>{pass.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                            <Location01Icon size={14} className="text-slate-400" />
                            <span className="truncate">{pass.venue}</span>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-3">
                        <Button className="flex-1 h-11 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all shadow-lg shadow-primary/10">
                            View Digital Pass
                        </Button>
                        <Button variant="secondary" size="icon" className="h-11 w-11 rounded-full bg-slate-50 border-none text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                            <Download01Icon size={18} />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
