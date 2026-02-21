import { Link } from "react-router-dom";
import { Course } from "@/data/types";

interface CourseHeroProps {
    course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
    return (
        <div className="space-y-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-400">
                <Link to="/dashboard/learning" className="hover:text-primary transition-colors">Explore Courses</Link>
                <span className="text-slate-200">/</span>
                <span className="text-slate-900 truncate">{course.title}</span>
            </nav>

            <div className="space-y-4">
                <h1 className="text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                    {course.title}
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed font-normal">
                    {course.description}
                </p>
            </div>
        </div>
    );
}
