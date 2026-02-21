import { useNavigate } from "react-router-dom";
import { BookOpen01Icon, ArrowRight01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { courses } from "@/data/courses";

export function ContinueLearning() {
    const navigate = useNavigate();

    // Derive continue learning from first few courses
    const continuousLearning = courses.slice(0, 3).map(course => ({
        id: course.id,
        title: course.title,
        module: course.modules[0]?.title || "Introduction",
        progress: "45%", // Mock progress
        courseId: course.id,
        moduleId: course.modules[0]?.id || "default",
        itemId: course.modules[0]?.items[0]?.id || "default"
    }));

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-slate-800">Continue Learning</h2>
                <Button variant="link" className="text-primary font-medium text-xs p-0">View All</Button>
            </div>

            <div className="space-y-1">
                {continuousLearning.map((item, index) => (
                    <div key={item.id}>
                        <div
                            onClick={() => navigate(`/dashboard/player/${item.courseId}/${item.moduleId}/${item.itemId}`)}
                            className="group flex items-center justify-between py-4 hover:bg-slate-50/50 px-2 rounded-xl transition-colors cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                                    <BookOpen01Icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-slate-800">{item.title}</h4>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {item.module} • <span className="text-primary font-medium">{item.progress}</span>
                                    </p>
                                </div>
                            </div>
                            <ArrowRight01Icon size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                        {index < continuousLearning.length - 1 && <Separator className="bg-slate-100" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
