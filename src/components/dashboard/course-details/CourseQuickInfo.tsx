import { Clock01Icon, Location01Icon, UserGroupIcon } from "hugeicons-react";
import { Course } from "@/data/types";

interface CourseQuickInfoProps {
    course: Course;
}

export function CourseQuickInfo({ course }: CourseQuickInfoProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-slate-100 py-6">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Clock01Icon size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Duration</span>
                    <span className="text-sm font-medium text-slate-700">{course.duration}</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Location01Icon size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-medium text-slate-700">{course.location}</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <UserGroupIcon size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Seats Left</span>
                    <span className="text-sm font-medium text-slate-700">{course.seats.enrolled}/{course.seats.total} Seats</span>
                </div>
            </div>
        </div>
    );
}
