import { useState } from "react";
import { Search01Icon } from "hugeicons-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/shared/CourseCard";
import { Badge } from "@/components/ui/badge";

export default function MyLearning() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Courses");

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All Courses" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ["All Courses", "Software Development", "Data Science", "Digital Literacy", "Cybersecurity", "AI & ML", "Networking"];

    return (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between px-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-medium tracking-tight text-slate-900">Explore Courses</h1>
                    <p className="text-slate-500 font-medium text-sm">Choose from our curated selection of premium educational paths.</p>
                </div>

                <div className="flex items-center gap-3 lg:w-96">
                    <div className="relative group w-full">
                        <Search01Icon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by course name or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-11 w-full pl-11 pr-4 rounded-xl bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                        />
                    </div>
                </div>
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 px-2 no-scrollbar">
                {categories.map((category) => (
                    <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "secondary"}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 rounded-xl text-xs font-medium whitespace-nowrap cursor-pointer transition-all border shadow-none ${selectedCategory === category
                            ? "bg-accent/70 text-primary hover:bg-accent/60 border-accent"
                            : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border-slate-100"
                            }`}
                    >
                        {category}
                    </Badge>
                ))}
            </div>

            {/* Grid Section */}
            {filteredCourses.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                        <Search01Icon size={24} className="text-slate-300" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">No courses found</h3>
                    <p className="text-sm text-slate-400 max-w-xs mt-1 font-medium">Try adjusting your search or filters to find what you're looking for.</p>
                </div>
            )}
        </div>
    );
}
