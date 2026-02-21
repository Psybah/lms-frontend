import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download01Icon, Share01Icon, Cancel01Icon } from "hugeicons-react";
import { Certificate } from "@/data/certificates";

interface CertificateViewerProps {
    certificate: Certificate | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CertificateViewer({ certificate, open, onOpenChange }: CertificateViewerProps) {
    if (!certificate) return null;

    const handleDownload = async () => {
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
            // Fallback
            const link = document.createElement('a');
            link.href = certificate.imageUrl;
            link.target = "_blank";
            link.download = `${certificate.courseTitle}_Certificate.jpg`;
            link.click();
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 gap-0">
                <DialogHeader className="hidden">
                    <DialogTitle>{certificate.courseTitle}</DialogTitle>
                    <DialogDescription>Full view of your certificate</DialogDescription>
                </DialogHeader>

                <div className="relative group p-4 sm:p-8 flex flex-col items-center animate-in zoom-in-95 duration-300">
                    {/* Backdrop / Image Container */}
                    <div className="relative bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-slate-200/50 overflow-hidden">
                        <img
                            src={certificate.imageUrl}
                            alt={certificate.courseTitle}
                            className="max-h-[75vh] w-auto rounded-lg shadow-sm"
                        />

                        {/* Overlay Actions */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={handleDownload}
                                className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg hover:bg-white transition-all hover:scale-105 active:scale-95"
                            >
                                <Download01Icon size={18} className="text-slate-900" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg hover:bg-white transition-all hover:scale-105 active:scale-95"
                            >
                                <Share01Icon size={18} className="text-slate-900" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => onOpenChange(false)}
                                className="h-10 w-10 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 ml-2"
                            >
                                <Cancel01Icon size={18} />
                            </Button>
                        </div>
                    </div>

                    {/* Meta Info Below Image */}
                    <div className="mt-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white flex items-center gap-6 shadow-2xl">
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Credential ID</span>
                            <span className="text-sm font-medium">{certificate.credentialId}</span>
                        </div>
                        <div className="h-8 w-px bg-white/20" />
                        <div className="flex flex-col text-left">
                            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Issued Date</span>
                            <span className="text-sm font-medium">{certificate.issueDate}</span>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
