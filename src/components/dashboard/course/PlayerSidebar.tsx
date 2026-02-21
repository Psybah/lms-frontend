import {
    ArrowLeft01Icon,
    PlayIcon,
    Pdf02Icon,
    SidebarLeft01Icon
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Course } from "@/data/types";

interface PlayerSidebarProps {
    course: Course;
    currentModuleId: string;
    currentItemId: string;
    onItemClick: (moduleId: string, itemId: string) => void;
    onBack: () => void;
    isCollapsed: boolean;
    onToggle: () => void;
}

export function PlayerSidebar({ course, currentModuleId, currentItemId, onItemClick, onBack, isCollapsed, onToggle }: PlayerSidebarProps) {
    return (
        <div className={cn(
            "border-r border-slate-100 flex flex-col bg-slate-50/30 transition-all duration-300 relative",
            isCollapsed ? "w-16" : "w-80"
        )}>
            <div className={cn("p-6 border-b border-slate-100", isCollapsed && "px-3")}>
                {!isCollapsed && (
                    <>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onBack}
                            className="mb-4 -ml-2 text-slate-500 hover:bg-primary/10 hover:text-primary rounded-full transition-all"
                        >
                            <ArrowLeft01Icon size={18} className="mr-2" />
                            Back
                        </Button>
                        <h2 className="font-medium text-slate-800 leading-tight">{course.title}</h2>
                        <div className="mt-2 flex items-center gap-2">
                            <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[35%]" />
                            </div>
                            <span className="text-[10px] font-medium text-slate-400">35% DONE</span>
                        </div>
                    </>
                )}
                {isCollapsed && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onBack}
                        className="text-slate-500 hover:bg-primary/10 hover:text-primary rounded-full mb-4"
                    >
                        <ArrowLeft01Icon size={18} />
                    </Button>
                )}
            </div>

            <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="absolute -right-4 top-4 h-8 w-8 rounded-full border border-slate-100 bg-white shadow-sm z-20 text-slate-400 hover:text-primary"
            >
                <SidebarLeft01Icon size={14} className={cn("transition-transform", isCollapsed && "rotate-180")} />
            </Button>

            <ScrollArea className="flex-1">
                <div className={cn("p-4", isCollapsed && "p-2 space-y-4")}>
                    <Accordion type="multiple" defaultValue={[currentModuleId]} className="space-y-2">
                        {course.modules.map((module) => (
                            <AccordionItem key={module.id} value={module.id} className="border-none">
                                <AccordionTrigger className={cn(
                                    "py-3 px-3 hover:no-underline hover:bg-white rounded-xl transition-all border border-transparent data-[state=open]:border-slate-100 data-[state=open]:bg-white",
                                    isCollapsed && "p-0 h-10 w-10 mx-auto justify-center hover:bg-slate-100 data-[state=open]:bg-slate-100 data-[state=open]:border-transparent rounded-lg"
                                )}>
                                    <div className="flex items-center gap-3 text-left">
                                        <div className={cn(
                                            "h-6 w-6 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0",
                                            isCollapsed && "h-7 w-7 bg-transparent text-slate-500"
                                        )}>
                                            {course.modules.indexOf(module) + 1}
                                        </div>
                                        {!isCollapsed && <span className="text-sm font-medium text-slate-700 truncate">{module.title}</span>}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className={cn("pt-2 space-y-1", !isCollapsed && "pl-5 px-1")}>
                                    {module.items.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => onItemClick(module.id, item.id)}
                                            className={cn(
                                                "w-full flex items-center gap-3 p-3 rounded-xl transition-all group justify-center",
                                                !isCollapsed && "justify-start px-3",
                                                isCollapsed && "p-0 h-10 w-10 mx-auto rounded-lg",
                                                item.id === currentItemId
                                                    ? "text-primary bg-primary/5"
                                                    : "hover:bg-slate-50 text-slate-500"
                                            )}
                                        >
                                            <div className="relative">
                                                {item.type === 'video' ? (
                                                    <PlayIcon size={isCollapsed ? 18 : 16} className={cn("shrink-0", item.id === currentItemId ? "text-primary" : "text-slate-300 group-hover:text-primary/50")} />
                                                ) : (
                                                    <Pdf02Icon size={isCollapsed ? 18 : 16} className={cn("shrink-0", item.id === currentItemId ? "text-primary" : "text-slate-300 group-hover:text-primary/50")} />
                                                )}
                                                {isCollapsed && item.id === currentItemId && (
                                                    <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary border-2 border-slate-50" />
                                                )}
                                            </div>
                                            {!isCollapsed && <span className="text-xs font-medium text-left flex-1 truncate">{item.title}</span>}
                                            {!isCollapsed && item.id === currentItemId && (
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            )}
                                        </button>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </ScrollArea>
        </div>
    );
}
