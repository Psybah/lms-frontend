import { Link } from "react-router-dom";
import { Ticket01Icon, Search01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";

export default function EntryPasses() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm max-w-lg w-full text-center space-y-8">
                <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse" />
                    <div className="relative flex items-center justify-center w-full h-full bg-white rounded-full border-2 border-slate-50 shadow-inner text-primary">
                        <Ticket01Icon size={40} />
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-3xl font-medium text-slate-900 tracking-tight">No Active Passes</h2>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Your physical workshop and event entry passes will appear here once you register for our upcoming on-site training sessions.
                    </p>
                </div>

                <div className="pt-4">
                    <Link to="/dashboard/learning">
                        <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base transition-all shadow-lg shadow-primary/10 group">
                            <Search01Icon size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                            Browse Courses
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-slate-300">
                <div className="h-px w-12 bg-slate-100" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified Access Point</span>
                <div className="h-px w-12 bg-slate-100" />
            </div>
        </div>
    );
}
