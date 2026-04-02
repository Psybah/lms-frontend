import { Clock01Icon, Location01Icon, UserGroupIcon } from "hugeicons-react";
import { Course } from "@/data/types";

interface CourseQuickInfoProps {
    course: Course;
}

export function CourseQuickInfo({ course }: CourseQuickInfoProps) {
    return (
        <div className="grid grid-cols-3 gap-2 sm:gap-4 border-y border-slate-100 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Clock01Icon size={16} className="sm:hidden" />
                    <Clock01Icon size={20} className="hidden sm:block" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-wider">Duration</span>
                    <span className="text-[11px] sm:text-sm font-medium text-slate-700 text-center sm:text-left">{course.duration}</span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Location01Icon size={16} className="sm:hidden" />
                    <Location01Icon size={20} className="hidden sm:block" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-wider">Location</span>
                    <span className="text-[11px] sm:text-sm font-medium text-slate-700 text-center sm:text-left">{course.location}</span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <UserGroupIcon size={16} className="sm:hidden" />
                    <UserGroupIcon size={20} className="hidden sm:block" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-wider">Seats Left</span>
                    <span className="text-[11px] sm:text-sm font-medium text-slate-700">{course.seats.enrolled}/{course.seats.total}</span>
                </div>
            </div>
        </div>
    );
}
