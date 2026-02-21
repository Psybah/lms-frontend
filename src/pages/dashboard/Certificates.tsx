import { useState } from "react";
import { Link } from "react-router-dom";
import {
    LicenseIcon,
    Search01Icon,
    Download01Icon
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { certificates, Certificate } from "@/data/certificates";
import { CertificateCard } from "@/components/dashboard/certificates/CertificateCard";
import { CertificateViewer } from "@/components/dashboard/certificates/CertificateViewer";

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
    const [viewerOpen, setViewerOpen] = useState(false);

    const handleView = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
        setViewerOpen(true);
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Elegant Hero Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
                <div className="flex items-center gap-5">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-medium tracking-tight text-slate-900">My Certificates</h1>
                        <p className="text-slate-500 font-medium text-sm">View and manage your verified learning achievements.</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                </div>
            </div>

            {certificates.length === 0 ? (
                /* Clean Hero-style Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                    <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-6">
                        <LicenseIcon size={40} />
                    </div>
                    <h2 className="text-2xl font-medium text-slate-900 mb-2">No Certificates Yet</h2>
                    <p className="text-slate-500 max-w-sm mx-auto mb-8 font-medium">
                        Complete your enrolled courses and excel in your assessments to earn verified certificates of achievement.
                    </p>
                    <Link to="/dashboard/learning">
                        <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-all shadow-lg shadow-primary/10">
                            <Search01Icon size={20} className="mr-2" />
                            Browse Courses
                        </Button>
                    </Link>
                </div>
            ) : (
                /* Grid - Matching CourseCard alignment */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-2">
                    {certificates.map((cert) => (
                        <CertificateCard
                            key={cert.id}
                            certificate={cert}
                            onView={handleView}
                        />
                    ))}
                </div>
            )}

            <CertificateViewer
                certificate={selectedCertificate}
                open={viewerOpen}
                onOpenChange={setViewerOpen}
            />
        </div>
    );
}
