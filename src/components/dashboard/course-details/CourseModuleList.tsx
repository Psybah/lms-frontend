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
        <div className="space-y-6">
            <h2 className="text-xl font-medium text-slate-900 flex items-center gap-2">
                <Archive01Icon className="text-primary" />
                Course Modules
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
                {course.modules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border rounded-2xl bg-slate-50 overflow-hidden border-slate-100/60 transition-all">
                        <AccordionTrigger className="hover:no-underline px-5 py-4 hover:bg-slate-100/50 transition-colors">
                            <div className="flex items-center gap-4 text-left">
                                <span className="h-6 w-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-400 shrink-0">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <span className="text-slate-700 font-medium">{module.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 pt-0">
                            <div className="pl-10 space-y-1">
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
