import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Calendar03Icon,
    Location01Icon,
    Download01Icon,
    Ticket01Icon
} from "hugeicons-react";
import { EntryPass } from "@/data/entry-passes";

interface EntryPassCardProps {
    pass: EntryPass;
    onView: (pass: EntryPass) => void;
}

export function EntryPassCard({ pass, onView }: EntryPassCardProps) {
    const isPast = pass.status === 'past';

    return (
        <Card className={`group border-slate-100 transition-all duration-300 rounded-2xl overflow-hidden bg-white ${isPast ? 'opacity-60 grayscale-[0.5]' : ''}`}>
            <CardContent className="p-0 flex flex-col sm:flex-row">
                {/* QR Section */}
                <div className={`p-6 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 shrink-0 ${isPast ? 'bg-slate-50/50' : 'bg-slate-50'}`}>
                    <div className="bg-white p-2 rounded-2xl border border-slate-100 mb-3 shadow-sm">
                        <img src={pass.qrUrl} alt="Pass QR Code" className="w-24 h-24" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none">{pass.passCode}</span>
                </div>

                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Ticket01Icon size={16} className={isPast ? 'text-slate-400' : 'text-primary'} />
                            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Entry Pass</span>
                            {isPast && (
                                <span className="ml-auto bg-slate-100 text-slate-500 text-[9px] font-medium px-2 py-0.5 rounded-full uppercase">Completed</span>
                            )}
                        </div>
                        <h3 className={`text-xl font-medium leading-tight mb-2 ${isPast ? 'text-slate-500' : 'text-slate-900'}`}>
                            {pass.eventTitle}
                        </h3>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                <Calendar03Icon size={14} className="text-slate-400" />
                                <span>{pass.date}</span>
                                <span className="text-slate-300 mx-1">•</span>
                                <span>{pass.time}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-start gap-2 text-slate-500 text-xs font-medium">
                                <Location01Icon size={14} className="text-slate-400 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="truncate">{pass.venue}</span>
                                    <span className="text-[10px] text-slate-400 font-normal">{pass.roomNumber}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!isPast && (
                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center gap-3">
                            <Button
                                onClick={() => onView(pass)}
                                className="flex-1 h-11 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm transition-all shadow-lg shadow-primary/10"
                            >
                                View Digital Pass
                            </Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
