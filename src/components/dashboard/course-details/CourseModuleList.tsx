import { Archive01Icon } from "hugeicons-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Course } from "@/data/types";
import { ModuleItemRow } from "./ModuleItemRow";

interface CourseModuleListProps {
    course: Course;
    isPurchased: boolean;
}

export function CourseModuleList({ course, isPurchased }: CourseModuleListProps) {
    return (
        <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-medium text-slate-900 flex items-center gap-2">
                <Archive01Icon className="text-primary" size={20} />
                Course Modules
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
                {course.modules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border rounded-xl sm:rounded-2xl bg-slate-50 overflow-hidden border-slate-100/60 transition-all">
                        <AccordionTrigger className="hover:no-underline px-3 sm:px-5 py-3 sm:py-4 hover:bg-slate-100/50 transition-colors">
                            <div className="flex items-center gap-3 sm:gap-4 text-left">
                                <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[9px] sm:text-[10px] font-medium text-slate-400 shrink-0">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <span className="text-sm text-slate-700 font-medium">{module.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-3 sm:px-5 pb-3 sm:pb-5 pt-0">
                            <div className="pl-4 sm:pl-10 space-y-1">
                                {module.items.map(item => (
                                    <ModuleItemRow
                                        key={item.id}
                                        item={item}
                                        module={module}
                                        course={course}
                                        isPurchased={isPurchased}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
