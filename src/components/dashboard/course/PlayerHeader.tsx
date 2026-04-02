import {
    PlayIcon,
    Pdf02Icon,
    ArrowLeft01Icon,
    ArrowRight01Icon,
    Menu01Icon
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
    onMenuToggle?: () => void;
}

export function PlayerHeader({
    currentItem,
    currentModule,
    onPrevious,
    onNext,
    hasPrevious,
    hasNext,
    onMenuToggle
}: PlayerHeaderProps) {
    return (
        <div className="h-14 sm:h-16 shrink-0 border-b border-slate-100 flex items-center justify-between px-3 sm:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                {onMenuToggle && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onMenuToggle}
                        className="md:hidden h-8 w-8 rounded-lg text-slate-500 shrink-0"
                    >
                        <Menu01Icon size={18} />
                    </Button>
                )}
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {currentItem?.type === 'video' ? <PlayIcon size={14} /> : <Pdf02Icon size={14} />}
                </div>
                <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-800 truncate">{currentItem?.title}</h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium uppercase tracking-wider truncate">{currentModule?.title}</p>
                </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onPrevious}
                    disabled={!hasPrevious}
                    className="h-8 sm:h-9 rounded-xl border-slate-200 text-slate-600 disabled:opacity-30 transition-all px-2 sm:px-3"
                >
                    <ArrowLeft01Icon size={16} />
                    <span className="hidden sm:inline ml-1">Previous</span>
                </Button>
                <Button
                    size="sm"
                    onClick={onNext}
                    disabled={!hasNext}
                    className="h-8 sm:h-9 rounded-xl px-3 sm:px-6 bg-primary hover:bg-primary/90 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100 transition-all font-medium"
                >
                    <span className="hidden sm:inline">Next Lesson</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight01Icon size={16} className="ml-1" />
                </Button>
            </div>
        </div>
    );
}
