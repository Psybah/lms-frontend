import {
    PlayIcon,
    Pdf02Icon
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
// Google Drive Viewer is used instead of react-pdf-viewer for better accessibility
import { ModuleItem, Course } from "@/data/types";

interface MediaViewerProps {
    currentItem: ModuleItem | undefined;
    course: Course;
}

export function MediaViewer({ currentItem, course }: MediaViewerProps) {
    if (!currentItem) {
        return (
            <div className="flex-1 flex items-center justify-center bg-slate-50/50">
                <div className="text-center space-y-2">
                    <PlayIcon size={48} className="mx-auto text-slate-200" />
                    <p className="text-slate-400 font-medium">Select a lesson to start learning</p>
                </div>
            </div>
        );
    }

    return (
        <ScrollArea className="flex-1 bg-slate-50/50">
            <div className="p-3 sm:p-8 max-w-5xl mx-auto w-full h-full min-h-[300px] sm:min-h-[500px]">
                {currentItem.type === 'video' ? (
                    <div className="aspect-video bg-black rounded-2xl sm:rounded-3xl overflow-hidden border-4 sm:border-8 border-white ring-1 ring-slate-100">
                        {currentItem.url ? (
                            <video
                                src={currentItem.url}
                                controls
                                className="w-full h-full"
                                poster="/api/placeholder/800/450"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-3 sm:gap-4">
                                <PlayIcon size={36} className="sm:hidden animate-pulse" />
                                <PlayIcon size={48} className="hidden sm:block animate-pulse" />
                                <p className="font-medium text-xs sm:text-base px-4 text-center">Video content not available for this demo</p>
                            </div>
                        )}
                    </div>
                ) : currentItem.type === 'pdf' ? (
                    <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 h-[70vh] sm:h-[800px] flex flex-col">
                        {currentItem.url ? (
                            <div className="flex-1 overflow-hidden relative group">
                                <iframe
                                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(currentItem.url)}&embedded=true`}
                                    className="w-full h-full border-none"
                                    title={currentItem.title}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                                <Pdf02Icon size={48} />
                                <p className="font-medium">PDF content not available</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-white p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-slate-100 text-center space-y-4">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                            {currentItem.type === 'pdf' ? <Pdf02Icon size={28} /> : <PlayIcon size={28} />}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Reading Material</h3>
                            <p className="text-slate-500 max-w-sm mx-auto text-xs sm:text-base">This document covers the theoretical foundations of the current module. Please read through before continuing.</p>
                        </div>
                        <Button variant="outline" className="rounded-xl">Download Resource</Button>
                    </div>
                )}

                <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-6">
                    <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100">
                        <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-2 sm:mb-4">Lesson Notes</h3>
                        <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                            In this lesson, we cover the core principles of {currentItem?.title || 'this topic'}.
                            By the end of this section, you should have a solid understanding of how these concepts apply to {course.title}.
                            Be sure to check the resources section for additional reading materials and exercise files to practice what you've learned.
                        </p>
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}
