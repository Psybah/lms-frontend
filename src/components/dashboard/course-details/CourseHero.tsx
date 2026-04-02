import { Link } from "react-router-dom";
import { Course } from "@/data/types";

interface CourseHeroProps {
    course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
    return (
        <div className="space-y-4 sm:space-y-8 px-1 sm:px-0">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
                <Link to="/dashboard/learning" className="hover:text-primary transition-colors">Explore Courses</Link>
                <span className="text-slate-200">/</span>
                <span className="text-slate-900 truncate">{course.title}</span>
            </nav>

            <div className="space-y-2 sm:space-y-4">
                <h1 className="text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                    {course.title}
                </h1>
                <p className="text-slate-500 text-sm sm:text-lg leading-relaxed font-normal">
                    {course.description}
                </p>
            </div>
        </div>
    );
}
