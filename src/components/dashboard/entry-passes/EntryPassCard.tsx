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
            <CardContent className="p-0 flex flex-row">
                {/* QR Section - always on the left */}
                <div className={`p-3 sm:p-6 flex flex-col items-center justify-center shrink-0 border-r border-slate-100 ${isPast ? 'bg-slate-50/50' : 'bg-slate-50'}`}>
                    <div className="bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-slate-100 mb-2 sm:mb-3 shadow-sm">
                        <img src={pass.qrUrl} alt="Pass QR Code" className="w-14 h-14 sm:w-24 sm:h-24" />
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none text-center">{pass.passCode}</span>
                </div>

                {/* Info Section - always on the right */}
                <div className="p-3 sm:p-6 flex-1 flex flex-col min-w-0">
                    <div className="mb-1.5 sm:mb-4">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                            <Ticket01Icon size={14} className={isPast ? 'text-slate-400' : 'text-primary'} />
                            <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-wider">Entry Pass</span>
                            {isPast && (
                                <span className="ml-auto bg-slate-100 text-slate-500 text-[8px] sm:text-[9px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full uppercase">Completed</span>
                            )}
                        </div>
                        <h3 className={`text-sm sm:text-xl font-medium leading-tight ${isPast ? 'text-slate-500' : 'text-slate-900'}`}>
                            {pass.eventTitle}
                        </h3>
                    </div>

                    <div className="space-y-1.5 sm:space-y-4 mb-2 sm:mb-6">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-[10px] sm:text-xs font-medium">
                            <Calendar03Icon size={12} className="text-slate-400 shrink-0 sm:[&]:w-[14px] sm:[&]:h-[14px]" />
                            <span className="truncate">{pass.date}</span>
                            <span className="text-slate-300">•</span>
                            <span className="truncate">{pass.time}</span>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2 text-slate-500 text-[10px] sm:text-xs font-medium">
                            <Location01Icon size={12} className="text-slate-400 mt-0.5 shrink-0 sm:[&]:w-[14px] sm:[&]:h-[14px]" />
                            <div className="flex flex-col min-w-0">
                                <span className="truncate">{pass.venue}</span>
                                <span className="text-[9px] sm:text-[10px] text-slate-400 font-normal truncate">{pass.roomNumber}</span>
                            </div>
                        </div>
                    </div>

                    {!isPast && (
                        <div className="mt-auto pt-2 sm:pt-4 border-t border-slate-50 flex items-center">
                            <Button
                                onClick={() => onView(pass)}
                                className="flex-1 h-8 sm:h-11 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-[11px] sm:text-sm transition-all shadow-lg shadow-primary/10"
                            >
                                View Pass
                            </Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
