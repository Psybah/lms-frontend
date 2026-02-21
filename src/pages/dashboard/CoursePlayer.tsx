import { useParams, useNavigate } from "react-router-dom";
import { courses } from "@/data/courses";
import { PlayerSidebar } from "@/components/dashboard/course/PlayerSidebar";
import { PlayerHeader } from "@/components/dashboard/course/PlayerHeader";
import { MediaViewer } from "@/components/dashboard/course/MediaViewer";
import { useMemo, useState } from "react";

export default function CoursePlayer() {
    const { courseId, moduleId, itemId } = useParams<{ courseId: string; moduleId: string; itemId: string }>();
    const navigate = useNavigate();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const course = useMemo(() => courses.find(c => c.id === courseId), [courseId]);

    if (!course) return <div className="p-8">Course not found</div>;

    const currentModule = course.modules.find(m => m.id === moduleId);
    const currentItem = currentModule?.items.find(i => i.id === itemId) || currentModule?.items[0];

    // Navigation logic
    const allItems = useMemo(() => {
        return course.modules.flatMap(m =>
            m.items.map(i => ({ moduleId: m.id, itemId: i.id }))
        );
    }, [course]);

    const currentIndex = allItems.findIndex(path =>
        path.moduleId === moduleId && path.itemId === itemId
    );

    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < allItems.length - 1;

    const handlePrevious = () => {
        if (hasPrevious) {
            const prev = allItems[currentIndex - 1];
            navigate(`/dashboard/player/${courseId}/${prev.moduleId}/${prev.itemId}`);
        }
    };

    const handleNext = () => {
        if (hasNext) {
            const next = allItems[currentIndex + 1];
            navigate(`/dashboard/player/${courseId}/${next.moduleId}/${next.itemId}`);
        }
    };

    const handleItemClick = (mId: string, iId: string) => {
        navigate(`/dashboard/player/${courseId}/${mId}/${iId}`);
    };

    return (
        <div className="flex h-[calc(95vh-100px)] -m-8 bg-white overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <PlayerSidebar
                course={course}
                currentModuleId={moduleId || ""}
                currentItemId={itemId || ""}
                onItemClick={handleItemClick}
                onBack={() => navigate(-1)}
                isCollapsed={isSidebarCollapsed}
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            <div className="flex-1 flex flex-col bg-white">
                <PlayerHeader
                    currentItem={currentItem}
                    currentModule={currentModule}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    hasPrevious={hasPrevious}
                    hasNext={hasNext}
                />

                <MediaViewer
                    currentItem={currentItem}
                    course={course}
                />
            </div>
        </div>
    );
}
