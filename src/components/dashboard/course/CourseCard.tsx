import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Course } from "@/data/types";
import { PlayIcon } from "hugeicons-react";

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    const getPrice = () => {
        if (course.fees.type === 'flat') {
            return `₦${course.fees.amount?.toLocaleString()}`;
        }
        const cohortTier = course.fees.tiers?.find(t => t.name === "Cohort");
        return `₦${cohortTier?.amount.toLocaleString()}`;
    };

    const isLocked = !course.isUnlocked;
    const progress = course.progress || 0;

    return (
        <div className="group bg-white rounded-3xl p-3 border border-slate-100 transition-all duration-300 flex flex-col h-full relative">
            {/* Image Container - Compact height */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-50">
                <img
                    src="/placeholder.svg"
                    alt={course.title}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 px-1">
                <h3 className="text-lg font-medium text-slate-900 leading-tight mb-1">
                    {course.title}
                </h3>

                <p className="text-slate-500 text-xs font-normal leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
                    {course.description}
                </p>

                <div className="mb-4">
                    {isLocked ? (
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-medium text-primary">{getPrice()}</span>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-[10px] font-medium">
                                <span className="text-slate-400">Course Progress</span>
                                <span className="text-primary">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-1 bg-slate-100" />
                        </div>
                    )}
                </div>

                {/* Meta Stats Line */}
                <div className="flex items-center text-[11px] font-normal text-slate-400 gap-1 mb-3">
                    <span>{course.duration}</span>
                    <span className="text-slate-200 text-base leading-none relative -top-[1px]">•</span>
                    <span className="truncate max-w-[90px]" title={course.location}>
                        {course.location.includes("ITeMS Building, UI") ? "ITeMS Building, UI" : course.location}
                    </span>
                    <span className="text-slate-200 text-base leading-none relative -top-[1px]">•</span>
                    <span>{course.seats.enrolled}/{course.seats.total} Seats</span>
                </div>

                <Link
                    to={isLocked ? `/dashboard/learning/${course.id}` : `/dashboard/player/${course.id}/${course.modules[0]?.id}/${course.modules[0]?.items[0]?.id}`}
                    className="block mt-auto"
                >
                    <Button
                        className="w-full h-11 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-sm"
                    >
                        {isLocked ? "View Details" : "Continue Learning"}
                        {!isLocked && <PlayIcon size={16} className="ml-2" />}
                    </Button>
                </Link>
            </div>
        </div>
    );
}