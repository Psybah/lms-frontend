import { useState } from "react";
import { courses } from "@/data/courses";
import { waitlistEntries } from "@/data/admin";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
    Search01Icon,
    Add01Icon,
    Edit01Icon,
    Delete01Icon,
    UserAdd01Icon,
    ArrowUp01Icon,
    BookOpen01Icon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { Course } from "@/data/types";

export default function CourseManager() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<"courses" | "waitlist">("courses");
    const [editCourse, setEditCourse] = useState<Course | null>(null);
    const [createOpen, setCreateOpen] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<Course | null>(null);
    const [promoteTarget, setPromoteTarget] = useState<typeof waitlistEntries[0] | null>(null);

    const filteredCourses = courses.filter(
        (c) =>
            c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePromote = () => {
        if (promoteTarget) {
            toast.success(`${promoteTarget.studentName} promoted to ${promoteTarget.courseTitle}`, {
                description: "Student has been enrolled and removed from the waitlist.",
            });
            setPromoteTarget(null);
        }
    };

    const handleDeleteCourse = () => {
        if (deleteTarget) {
            toast.success(`"${deleteTarget.title}" deleted`, {
                description: "Course has been removed from the catalog.",
            });
            setDeleteTarget(null);
        }
    };

    const handleSaveCourse = () => {
        if (editCourse) {
            toast.success(`"${editCourse.title}" updated`, {
                description: "Course details have been saved.",
            });
            setEditCourse(null);
        } else {
            toast.success("New course created", {
                description: "The course has been added to the catalog.",
            });
            setCreateOpen(false);
        }
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between px-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-medium tracking-tight text-slate-800">Course Manager</h1>
                    <p className="text-slate-400 font-medium text-sm">Create, edit and manage courses and waitlists.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative group lg:w-72">
                        <Search01Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search courses"
                            className="h-11 w-full pl-11 pr-4 rounded-xl bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                        />
                    </div>
                    <Button
                        onClick={() => setCreateOpen(true)}
                        className="h-11 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/10 gap-2"
                    >
                        <Add01Icon size={16} />
                        <span className="hidden sm:inline">Add Course</span>
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="px-2">
                <div className="flex items-center gap-8 border-b border-slate-100">
                    <button
                        onClick={() => setActiveTab("courses")}
                        className={cn(
                            "pb-4 text-sm font-medium transition-all relative",
                            activeTab === "courses" ? "text-primary" : "text-slate-400 hover:text-slate-600"
                        )}
                    >
                        All Courses
                        <Badge variant="secondary" className={cn("ml-2 border-none text-[10px] px-1.5 h-4", activeTab === "courses" ? "bg-accent/50 text-primary" : "bg-slate-50 text-slate-400")}>
                            {courses.length}
                        </Badge>
                        {activeTab === "courses" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("waitlist")}
                        className={cn(
                            "pb-4 text-sm font-medium transition-all relative",
                            activeTab === "waitlist" ? "text-primary" : "text-slate-400 hover:text-slate-600"
                        )}
                    >
                        Waitlist
                        <Badge variant="secondary" className={cn("ml-2 border-none text-[10px] px-1.5 h-4", activeTab === "waitlist" ? "bg-accent/50 text-primary" : "bg-slate-50 text-slate-400")}>
                            {waitlistEntries.length}
                        </Badge>
                        {activeTab === "waitlist" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                    </button>
                </div>
            </div>

            {/* Content */}
            {activeTab === "courses" ? (
                filteredCourses.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
                            <BookOpen01Icon size={40} />
                        </div>
                        <h2 className="text-2xl font-medium text-slate-900 mb-2">No Courses Found</h2>
                        <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium text-sm leading-relaxed">
                            Try adjusting your search or create a new course.
                        </p>
                        <Button onClick={() => setCreateOpen(true)} className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/10">
                            <Add01Icon size={16} className="mr-2" /> Create Course
                        </Button>
                    </div>
                ) : (
                    <Card className="border-slate-100 rounded-2xl shadow-none mx-2">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-slate-100 hover:bg-transparent">
                                            <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Course</TableHead>
                                            <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Category</TableHead>
                                            <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Duration</TableHead>
                                            <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Capacity</TableHead>
                                            <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Fees</TableHead>
                                            <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredCourses.map((course) => (
                                            <TableRow key={course.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                                                <TableCell>
                                                    <div>
                                                        <span className="font-medium text-slate-800 text-sm">{course.title}</span>
                                                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{course.description}</p>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary" className="bg-slate-50 text-slate-500 border-none text-[10px] font-medium rounded-full">
                                                        {course.category}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-sm text-slate-600">{course.duration}</TableCell>
                                                <TableCell>
                                                    <span className="text-sm text-slate-600">{course.seats.enrolled}/{course.seats.total}</span>
                                                    {course.seats.enrolled >= course.seats.total && (
                                                        <Badge variant="secondary" className="ml-2 bg-red-50 text-red-500 border-none text-[9px] font-medium rounded-full">Full</Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell className="text-sm text-slate-600">
                                                    {course.fees.type === "flat"
                                                        ? `₦${course.fees.amount?.toLocaleString()}`
                                                        : "Tiered"}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-9 w-9 rounded-full text-slate-400 hover:text-primary hover:bg-primary/5"
                                                            onClick={() => setEditCourse(course)}
                                                            aria-label={`Edit ${course.title}`}
                                                        >
                                                            <Edit01Icon size={16} />
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-9 w-9 rounded-full text-slate-400 hover:text-destructive hover:bg-destructive/5"
                                                            onClick={() => setDeleteTarget(course)}
                                                            aria-label={`Delete ${course.title}`}
                                                        >
                                                            <Delete01Icon size={16} />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                )
            ) : (
                /* Waitlist Tab */
                waitlistEntries.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                        <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
                            <UserAdd01Icon size={40} />
                        </div>
                        <h2 className="text-2xl font-medium text-slate-900 mb-2">Waitlist Empty</h2>
                        <p className="text-slate-500 max-w-sm mx-auto font-medium text-sm leading-relaxed">
                            No students are currently waiting for enrollment.
                        </p>
                    </div>
                ) : (
                    <Card className="border-slate-100 rounded-2xl shadow-none mx-2">
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-slate-100 hover:bg-transparent">
                                        <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">#</TableHead>
                                        <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Student</TableHead>
                                        <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Course</TableHead>
                                        <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Requested</TableHead>
                                        <TableHead className="text-[10px] font-medium text-slate-400 uppercase tracking-widest text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {waitlistEntries.map((entry) => (
                                        <TableRow key={entry.id} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <TableCell className="text-sm font-medium text-slate-400">#{entry.position}</TableCell>
                                            <TableCell className="text-sm font-medium text-slate-800">{entry.studentName}</TableCell>
                                            <TableCell className="text-sm text-slate-600">{entry.courseTitle}</TableCell>
                                            <TableCell className="text-sm text-slate-400">{entry.requestDate}</TableCell>
                                            <TableCell className="text-right">
                                                <Button
                                                    onClick={() => setPromoteTarget(entry)}
                                                    className="h-9 px-4 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 font-medium text-xs gap-1.5 shadow-none"
                                                >
                                                    <ArrowUp01Icon size={14} />
                                                    Promote
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                )
            )}

            {/* Edit / Create Course Dialog */}
            <Dialog open={!!editCourse || createOpen} onOpenChange={(open) => { if (!open) { setEditCourse(null); setCreateOpen(false); } }}>
                <DialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-medium text-slate-900">
                            {editCourse ? "Edit Course" : "Create New Course"}
                        </DialogTitle>
                        <DialogDescription className="text-slate-500 text-sm">
                            {editCourse ? "Update the course details below." : "Fill in the details for the new course."}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label htmlFor="course-title" className="text-sm font-medium text-slate-700">Title</label>
                            <input
                                id="course-title"
                                defaultValue={editCourse?.title || ""}
                                placeholder="e.g. Cybersecurity Fundamentals"
                                className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="course-desc" className="text-sm font-medium text-slate-700">Description</label>
                            <textarea
                                id="course-desc"
                                rows={3}
                                defaultValue={editCourse?.description || ""}
                                placeholder="Brief course description..."
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none resize-none placeholder:text-slate-400"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="course-duration" className="text-sm font-medium text-slate-700">Duration</label>
                                <input
                                    id="course-duration"
                                    defaultValue={editCourse?.duration || ""}
                                    placeholder="e.g. 3 months"
                                    className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="course-capacity" className="text-sm font-medium text-slate-700">Capacity</label>
                                <input
                                    id="course-capacity"
                                    type="number"
                                    defaultValue={editCourse?.seats.total || ""}
                                    placeholder="e.g. 25"
                                    className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="course-venue" className="text-sm font-medium text-slate-700">Venue</label>
                            <input
                                id="course-venue"
                                defaultValue={editCourse?.location || ""}
                                placeholder="e.g. Training Lab 1, ITeMS Building"
                                className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                            />
                        </div>
                    </div>
                    <DialogFooter className="gap-2 sm:gap-2">
                        <DialogClose asChild>
                            <Button variant="outline" className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            onClick={handleSaveCourse}
                            className="rounded-full h-10 bg-primary hover:bg-primary/90 text-white font-normal shadow-lg shadow-primary/10"
                        >
                            {editCourse ? "Save Changes" : "Create Course"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <AlertDialog open={!!deleteTarget} onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}>
                <AlertDialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-lg font-medium text-slate-900">Delete Course?</AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-500 text-sm">
                            This will permanently remove "{deleteTarget?.title}" from the catalog. This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-2 sm:gap-2">
                        <AlertDialogCancel className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteCourse}
                            className="rounded-full h-10 bg-destructive hover:bg-destructive/90 text-white font-normal"
                        >
                            Delete Course
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Promote Waitlist Confirmation */}
            <AlertDialog open={!!promoteTarget} onOpenChange={(open) => { if (!open) setPromoteTarget(null); }}>
                <AlertDialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-lg font-medium text-slate-900">Promote Student?</AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-500 text-sm">
                            <span className="font-medium text-slate-700">{promoteTarget?.studentName}</span> will be enrolled in{" "}
                            <span className="font-medium text-slate-700">{promoteTarget?.courseTitle}</span> and removed from the waitlist.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-2 sm:gap-2">
                        <AlertDialogCancel className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handlePromote}
                            className="rounded-full h-10 bg-emerald-600 hover:bg-emerald-500 text-white font-normal"
                        >
                            Confirm Promotion
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
