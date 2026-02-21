import { useNavigate } from "react-router-dom";
import {
    PlayIcon,
    Pdf02Icon,
    Archive01Icon,
    LockPasswordIcon,
    ArrowRight01Icon
} from "hugeicons-react";
import { ModuleItem, CourseModule, Course } from "@/data/types";
import { cn } from "@/lib/utils";

interface ModuleItemRowProps {
    item: ModuleItem;
    module: CourseModule;
    course: Course;
    isPurchased: boolean;
}

export function ModuleItemRow({ item, module, course, isPurchased }: ModuleItemRowProps) {
    const navigate = useNavigate();

    const getIcon = () => {
        switch (item.type) {
            case 'video': return <PlayIcon size={14} className="text-slate-400" />;
            case 'pdf': return <Pdf02Icon size={14} className="text-slate-400" />;
            default: return <Archive01Icon size={14} className="text-slate-400" />;
        }
    };

    return (
        <div
            onClick={() => isPurchased && navigate(`/dashboard/player/${course.id}/${module.id}/${item.id}`)}
            className={cn(
                "flex items-center justify-between py-3 px-4 rounded-xl transition-all border border-transparent",
                isPurchased
                    ? "hover:bg-white hover:border-slate-100 hover:shadow-sm group/item cursor-pointer"
                    : "opacity-60 cursor-not-allowed"
            )}
        >
            <div className="flex items-center gap-4 text-left">
                <div className={cn(
                    "h-8 w-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 transition-colors",
                    isPurchased && "group-hover/item:text-primary"
                )}>
                    {getIcon()}
                </div>
                <div className="flex flex-col">
                    <span className={cn(
                        "text-sm font-medium transition-colors",
                        isPurchased ? "text-slate-600 group-hover/item:text-slate-900" : "text-slate-400"
                    )}>
                        {item.title}
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-medium">{item.type}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                {!isPurchased && <LockPasswordIcon size={14} className="text-slate-300" />}
                {isPurchased && (
                    <ArrowRight01Icon size={14} className="text-slate-200 group-hover/item:text-primary transition-all translate-x-1 group-hover/item:translate-x-0 opacity-0 group-hover/item:opacity-100" />
                )}
            </div>
        </div>
    );
}
