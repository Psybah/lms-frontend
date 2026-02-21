import {
    PlayIcon,
    Pdf02Icon,
    ArrowLeft01Icon,
    ArrowRight01Icon
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { ModuleItem, CourseModule } from "@/data/types";

interface PlayerHeaderProps {
    currentItem: ModuleItem | undefined;
    currentModule: CourseModule | undefined;
    onPrevious: () => void;
    onNext: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
}

export function PlayerHeader({
    currentItem,
    currentModule,
    onPrevious,
    onNext,
    hasPrevious,
    hasNext
}: PlayerHeaderProps) {
    return (
        <div className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {currentItem?.type === 'video' ? <PlayIcon size={18} /> : <Pdf02Icon size={18} />}
                </div>
                <div>
                    <h3 className="text-sm font-medium text-slate-800">{currentItem?.title}</h3>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{currentModule?.title}</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className="h-9 rounded-xl border-slate-200 text-slate-600 disabled:opacity-30 transition-all"
                >
                    <ArrowLeft01Icon size={16} className="mr-1" />
                    Previous
                </Button>
                <Button
                    size="sm"
                    onClick={onNext}
                    disabled={!hasNext}
                    className="h-9 rounded-xl px-6 bg-primary hover:bg-primary/90 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100 transition-all font-medium"
                >
                    Next Lesson
                    <ArrowRight01Icon size={16} className="ml-1" />
                </Button>
            </div>
        </div>
    );
}
