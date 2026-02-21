import { Button } from "@/components/ui/button";
import { Download01Icon } from "hugeicons-react";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
    certificate: Certificate;
    onView: (certificate: Certificate) => void;
}

export function CertificateCard({ certificate, onView }: CertificateCardProps) {
    const handleDownload = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            const response = await fetch(certificate.imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${certificate.courseTitle}_Certificate.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
            // Fallback for cross-origin or other issues
            const link = document.createElement('a');
            link.href = certificate.imageUrl;
            link.target = "_blank";
            link.download = `${certificate.courseTitle}_Certificate.jpg`;
            link.click();
        }
    };

    return (
        <div
            onClick={() => onView(certificate)}
            className="group bg-white rounded-3xl p-3 border border-slate-100 transition-all duration-300 flex flex-col h-full relative cursor-pointer hover:shadow-sm"
        >
            {/* Image Container - Matching CourseCard aspect ratio */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-slate-50 border border-slate-100">
                <img
                    src={certificate.imageUrl}
                    alt={certificate.courseTitle}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 px-1">
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-slate-900 leading-snug mb-1 line-clamp-2">
                        {certificate.courseTitle}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-400 font-medium text-[10px] uppercase tracking-wider">
                        <span>Issued {certificate.issueDate}</span>
                    </div>
                </div>

                <div className="mt-auto flex items-center gap-2">
                    <Button
                        className="flex-1 h-11 rounded-full bg-accent/70 hover:bg-accent/40 text-primary font-normal text-sm transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            onView(certificate);
                        }}
                    >
                        View Certificate
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleDownload}
                        className="h-11 w-11 rounded-full bg-slate-100 border-none shadow-none text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                        <Download01Icon size={18} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
