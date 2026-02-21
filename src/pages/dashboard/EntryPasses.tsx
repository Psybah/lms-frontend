import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Ticket01Icon,
    Search01Icon,
    Calendar03Icon
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { entryPasses, EntryPass } from "@/data/entry-passes";
import { EntryPassCard } from "@/components/dashboard/entry-passes/EntryPassCard";
import { PassViewer } from "@/components/dashboard/entry-passes/PassViewer";

export default function EntryPasses() {
    const [selectedPass, setSelectedPass] = useState<EntryPass | null>(null);
    const [viewerOpen, setViewerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

    const activePasses = entryPasses.filter(p => p.status === 'active');
    const pastPasses = entryPasses.filter(p => p.status === 'past');

    const handleView = (pass: EntryPass) => {
        setSelectedPass(pass);
        setViewerOpen(true);
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Elegant Hero Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
                <div className="flex items-center gap-5">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-medium tracking-tight text-slate-900">Entry Passes</h1>
                        <p className="text-slate-500 font-medium text-sm">Access your physical workshop and event entry tickets.</p>
                    </div>
                </div>
            </div>

            {/* Premium Underline Tabs - Matching MyLearning.tsx */}
            <div className="px-2">
                <div className="flex items-center gap-8 border-b border-slate-100">
                    <button
                        onClick={() => setActiveTab('active')}
                        className={cn(
                            "pb-4 text-sm font-medium transition-all relative",
                            activeTab === 'active' ? "text-primary" : "text-slate-400 hover:text-slate-600"
                        )}
                    >
                        Active Passes
                        <Badge variant="secondary" className={cn(
                            "ml-2 border-none text-[10px] px-1.5 h-4",
                            activeTab === 'active' ? "bg-accent/50 text-primary" : "bg-slate-50 text-slate-400"
                        )}>
                            {activePasses.length}
                        </Badge>
                        {activeTab === 'active' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('past')}
                        className={cn(
                            "pb-4 text-sm font-medium transition-all relative",
                            activeTab === 'past' ? "text-primary" : "text-slate-400 hover:text-slate-600"
                        )}
                    >
                        Past Events
                        <Badge variant="secondary" className={cn(
                            "ml-2 border-none text-[10px] px-1.5 h-4",
                            activeTab === 'past' ? "bg-accent/50 text-primary" : "bg-slate-50 text-slate-400"
                        )}>
                            {pastPasses.length}
                        </Badge>
                        {activeTab === 'past' && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                        )}
                    </button>
                </div>
            </div>

            <div className="min-h-[400px]">
                {activeTab === 'active' ? (
                    activePasses.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2">
                            {activePasses.map((pass) => (
                                <EntryPassCard
                                    key={pass.id}
                                    pass={pass}
                                    onView={handleView}
                                />
                            ))}
                        </div>
                    )
                ) : (
                    pastPasses.length === 0 ? (
                        <EmptyState title="No past events" description="Your history of attended events and occupied workshops will appear here." />
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2">
                            {pastPasses.map((pass) => (
                                <EntryPassCard
                                    key={pass.id}
                                    pass={pass}
                                    onView={handleView}
                                />
                            ))}
                        </div>
                    )
                )}
            </div>

            <PassViewer
                pass={selectedPass}
                open={viewerOpen}
                onOpenChange={setViewerOpen}
            />
        </div>
    );
}

function EmptyState({ title = "No Active Passes", description = "Your physical workshop and event entry passes will appear here once you register for our upcoming on-site training sessions." }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
                <Ticket01Icon size={40} />
            </div>
            <h2 className="text-2xl font-medium text-slate-900 mb-2">{title}</h2>
            <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium text-sm leading-relaxed px-4">
                {description}
            </p>
            <Link to="/dashboard/learning">
                <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg shadow-primary/10">
                    <Search01Icon size={20} className="mr-2" />
                    Browse Courses
                </Button>
            </Link>
        </div>
    );
}
