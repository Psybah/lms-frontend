import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft01Icon,
    Clock01Icon,
    Location01Icon,
    UserGroupIcon,
    Archive01Icon,
    InformationCircleIcon,
    CallIcon,
    LockPasswordIcon,
    PlayIcon,
    FileAttachmentIcon,
    CheckmarkCircle01Icon
} from "hugeicons-react";
import { courses, courseMetadata, CourseModule, ModuleItem } from "@/data/courses";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function CourseDetails() {
    const { id } = useParams<{ id: string }>();
    const course = courses.find((c) => c.id === id);

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-2xl font-medium text-slate-900">Course not found</h2>
                <Link to="/dashboard/learning" className="mt-4 text-primary font-medium hover:underline flex items-center gap-2">
                    <ArrowLeft01Icon size={20} />
                    Back to Courses
                </Link>
            </div>
        );
    }

    const getPrice = () => {
        if (course.fees.type === 'flat') {
            return `₦${course.fees.amount?.toLocaleString()}`;
        }
        const cohortTier = course.fees.tiers?.find(t => t.name === "Cohort");
        const specialTier = course.fees.tiers?.find(t => t.name === "Special");
        return {
            cohort: `₦${cohortTier?.amount.toLocaleString()}`,
            special: `₦${specialTier?.amount.toLocaleString()}`
        };
    };

    const pricing = getPrice();

    const renderModuleItem = (item: ModuleItem) => {
        const getIcon = () => {
            switch (item.type) {
                case 'video': return <PlayIcon size={14} className="text-slate-400" />;
                case 'pdf': return <FileAttachmentIcon size={14} className="text-slate-400" />;
                default: return <Archive01Icon size={14} className="text-slate-400" />;
            }
        };

        return (
            <div key={item.title} className="flex items-center justify-between py-2 px-3 hover:bg-slate-50 rounded-lg transition-colors group/item">
                <div className="flex items-center gap-3">
                    {getIcon()}
                    <span className="text-sm text-slate-600 font-normal">{item.title}</span>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                    <LockPasswordIcon size={12} className="text-slate-400" />
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Locked</span>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 px-2">
                <Link to="/dashboard/learning" className="hover:text-primary transition-colors">Explore Courses</Link>
                <span className="text-slate-200">/</span>
                <span className="text-slate-900 truncate">{course.title}</span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-3 px-2 pb-20">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Hero Section */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed font-normal">
                            {course.description}
                        </p>
                    </div>

                    {/* Quick Info Grid */}
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

                    {/* Course Modules */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-medium text-slate-900 flex items-center gap-2">
                            <Archive01Icon className="text-primary" />
                            Course Modules
                        </h2>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {course.modules.map((module, index) => (
                                <AccordionItem key={index} value={`module-${index}`} className="border rounded-2xl bg-slate-50 overflow-hidden border-slate-100/60 transition-all">
                                    <AccordionTrigger className="hover:no-underline px-5 py-4 hover:bg-slate-100/50 transition-colors">
                                        <div className="flex items-center gap-4 text-left">
                                            <span className="h-6 w-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-400 shrink-0">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-slate-700 font-medium">{module.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-5 pb-5 pt-0">
                                        <div className="pl-10 space-y-1">
                                            {module.items.map(item => renderModuleItem(item))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                {/* Sidebar / Enrollment Area */}
                <div className="space-y-6">
                    <div className="bg-white rounded-3xl border border-slate-100 p-8 space-y-5 sticky top-3">
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Course Fee</span>
                                {typeof pricing === 'string' ? (
                                    <span className="text-4xl font-medium text-primary">{pricing}</span>
                                ) : (
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                                            <span className="text-xs font-medium text-slate-500">Cohort</span>
                                            <span className="text-xl font-medium text-primary">{pricing.cohort}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                                            <span className="text-xs font-medium text-slate-500">Special</span>
                                            <span className="text-xl font-medium text-primary">{pricing.special}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between text-sm py-4 border-y border-slate-100 font-medium">
                                <span className="text-slate-400">Application Form</span>
                                <span className="text-slate-900">₦{courseMetadata.applicationFee.toLocaleString()}</span>
                            </div>
                        </div>

                        <Button className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base transition-all shadow-lg shadow-primary/5">
                            Apply for Admission
                        </Button>

                        <Accordion type="multiple" className="w-full space-y-2 border-t border-slate-100 pt-3">
                            <AccordionItem value="enrollment" className="border-none">
                                <AccordionTrigger className="py-3 hover:no-underline hover:text-primary transition-colors text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <InformationCircleIcon size={14} className="text-primary" />
                                        Enrollment Info
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 space-y-3">
                                    <p className="text-[11px] text-slate-500 font-normal leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                                        {courseMetadata.enrollmentRule}
                                    </p>
                                    <p className="text-[11px] text-slate-500 font-normal leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100/50">
                                        {courseMetadata.specialPackageRule}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="enquiries" className="border-none">
                                <AccordionTrigger className="py-3 hover:no-underline hover:text-primary transition-colors text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <CallIcon size={14} className="text-primary" />
                                        Enquiries
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-1">
                                    <div className="divide-y divide-slate-100">
                                        {courseMetadata.contacts.map((contact) => (
                                            <a key={contact} href={`tel:${contact}`} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors flex items-center justify-between py-3 px-1">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                    {contact}
                                                </div>
                                                <CallIcon size={14} className="text-slate-300" />
                                            </a>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
