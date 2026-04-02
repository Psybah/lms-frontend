import { Button } from "@/components/ui/button";
import { Download01Icon } from "hugeicons-react";
import { Certificate } from "@/data/certificates";
import jsPDF from "jspdf";

interface CertificateCardProps {
    certificate: Certificate;
    onView: (certificate: Certificate) => void;
}

async function downloadCertificateAsPDF(certificate: Certificate) {
    return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const pdf = new jsPDF({
                orientation: img.width > img.height ? "landscape" : "portrait",
                unit: "px",
                format: [img.width, img.height],
            });
            pdf.addImage(img, "JPEG", 0, 0, img.width, img.height);
            pdf.save(`${certificate.courseTitle}_Certificate.pdf`);
            resolve();
        };
        img.onerror = reject;
        img.src = certificate.imageUrl;
    });
}

export function CertificateCard({ certificate, onView }: CertificateCardProps) {
    const handleDownload = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await downloadCertificateAsPDF(certificate);
        } catch (error) {
            console.error("PDF generation failed:", error);
            // Fallback: direct download
            const link = document.createElement('a');
            link.href = certificate.imageUrl;
            link.target = "_blank";
            link.download = `${certificate.courseTitle}_Certificate.pdf`;
            link.click();
        }
    };

    return (
        <div
            onClick={() => onView(certificate)}
            className="group bg-white rounded-2xl md:rounded-3xl p-2 md:p-3 border border-slate-100 transition-all duration-300 flex flex-col h-full relative cursor-pointer hover:shadow-sm"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-2 md:mb-4 bg-slate-50 border border-slate-100">
                <img
                    src={certificate.imageUrl}
                    alt={certificate.courseTitle}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 px-0.5 md:px-1">
                <div className="mb-2 md:mb-4">
                    <h3 className="text-sm md:text-lg font-medium text-slate-900 leading-snug mb-0.5 md:mb-1 line-clamp-2">
                        {certificate.courseTitle}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-400 font-medium text-[9px] md:text-[10px] uppercase tracking-wider">
                        <span>Issued {certificate.issueDate}</span>
                    </div>
                </div>

                <div className="mt-auto flex items-center gap-1.5 md:gap-2">
                    <Button
                        className="flex-1 h-8 md:h-11 rounded-full bg-accent/70 hover:bg-accent/40 text-primary font-normal text-xs md:text-sm transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            onView(certificate);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        variant="secondary"
                        size="icon"
                        onClick={handleDownload}
                        className="h-8 w-8 md:h-11 md:w-11 rounded-full bg-slate-100 border-none shadow-none text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                        <Download01Icon size={16} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
