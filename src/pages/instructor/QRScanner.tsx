import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    QrCode01Icon,
    Camera01Icon,
    CheckmarkCircle01Icon,
    Cancel01Icon,
    ArrowReloadHorizontalIcon,
} from "hugeicons-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { ScanResult } from "@/data/admin-types";

// Mock scan results for demo
const mockScanResults: Record<string, ScanResult> = {
    "PSW-UI-2026-001": { valid: true, studentName: "Adewale Johnson", passCode: "PSW-UI-2026-001", courseName: "Ethical Hacking and Penetration Testing", message: "Entry pass verified. Prerequisite test: Passed." },
    "LOS-VIRT-2026-045": { valid: true, studentName: "Chinedu Okafor", passCode: "LOS-VIRT-2026-045", courseName: "Davidson Tech Academy LMS Onboarding", message: "Entry pass verified. Prerequisite test: Passed." },
    "INVALID-001": { valid: false, studentName: "Unknown", passCode: "INVALID-001", courseName: "N/A", message: "Invalid pass code. No matching entry found." },
    "EXP-2025-001": { valid: false, studentName: "Halima Bello", passCode: "EXP-2025-001", courseName: "Introduction to AI and ML", message: "Pass expired. Prerequisite test not completed." },
};

export default function QRScanner() {
    const [isScanning, setIsScanning] = useState(false);
    const [manualCode, setManualCode] = useState("");
    const [lastResult, setLastResult] = useState<ScanResult | null>(null);
    const [scanHistory, setScanHistory] = useState<ScanResult[]>([]);
    const [clearHistoryOpen, setClearHistoryOpen] = useState(false);

    const processCode = useCallback((code: string) => {
        const trimmed = code.trim().toUpperCase();
        const result = mockScanResults[trimmed] || {
            valid: false,
            studentName: "Unknown",
            passCode: trimmed,
            courseName: "N/A",
            message: "Unrecognized pass code. Verify the student's enrollment.",
        };

        setLastResult(result);
        setScanHistory((prev) => [result, ...prev.slice(0, 9)]);

        if (result.valid) {
            toast.success(`${result.studentName} verified`, { description: result.message });
        } else {
            toast.error("Verification failed", { description: result.message });
        }
    }, []);

    const handleSimulateScan = () => {
        setIsScanning(true);
        // Simulate a camera scan after a brief delay
        setTimeout(() => {
            const codes = Object.keys(mockScanResults);
            const randomCode = codes[Math.floor(Math.random() * codes.length)];
            processCode(randomCode);
            setIsScanning(false);
        }, 1500);
    };

    const handleManualSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (manualCode.trim()) {
            processCode(manualCode);
            setManualCode("");
        }
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h1 className="text-3xl font-medium tracking-tight text-slate-800">QR Scanner</h1>
                    <p className="text-slate-400 font-medium text-sm">Validate student entry passes for physical sessions.</p>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-5 px-2">
                {/* Scanner Area */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Camera Viewport */}
                    <Card className="border-slate-100 rounded-2xl shadow-none overflow-hidden">
                        <CardContent className="p-0">
                            <div className="relative aspect-[4/3] bg-slate-900 flex items-center justify-center">
                                {isScanning ? (
                                    <div className="flex flex-col items-center gap-4 animate-pulse">
                                        <div className="h-48 w-48 border-2 border-white/30 rounded-2xl relative">
                                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-lg" />
                                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-lg" />
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-lg" />
                                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-lg" />
                                            {/* Scanning line animation */}
                                            <div className="absolute left-2 right-2 h-0.5 bg-primary rounded-full animate-bounce top-1/2" />
                                        </div>
                                        <p className="text-white/60 text-sm font-medium">Scanning...</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-white/40">
                                        <div className="h-20 w-20 rounded-full bg-white/5 flex items-center justify-center">
                                            <Camera01Icon size={36} />
                                        </div>
                                        <p className="text-sm font-medium">Camera Preview Area</p>
                                        <p className="text-xs text-white/30">Point camera at student's QR code to scan</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={handleSimulateScan}
                            disabled={isScanning}
                            className="flex-1 h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-lg shadow-primary/10 gap-2"
                        >
                            {isScanning ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <QrCode01Icon size={18} />
                            )}
                            {isScanning ? "Scanning..." : "Start Scan"}
                        </Button>
                    </div>

                    {/* Manual Code Entry */}
                    <form onSubmit={handleManualSubmit} className="flex items-center gap-3">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={manualCode}
                                onChange={(e) => setManualCode(e.target.value)}
                                placeholder="Enter pass code manually..."
                                aria-label="Manual pass code entry"
                                className="h-11 w-full px-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none placeholder:text-slate-400"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={!manualCode.trim()}
                            className="h-11 px-6 rounded-full bg-accent/70 hover:bg-accent/40 text-primary font-medium shadow-none"
                        >
                            Verify
                        </Button>
                    </form>
                </div>

                {/* Results Side Panel */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Last Result */}
                    {lastResult && (
                        <Card className={cn(
                            "rounded-2xl shadow-none border transition-all animate-in fade-in zoom-in-95 duration-500",
                            lastResult.valid ? "border-emerald-200 bg-emerald-50/30" : "border-red-200 bg-red-50/30"
                        )}>
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "h-12 w-12 rounded-full flex items-center justify-center",
                                        lastResult.valid ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-500"
                                    )}>
                                        {lastResult.valid ? <CheckmarkCircle01Icon size={24} /> : <Cancel01Icon size={24} />}
                                    </div>
                                    <div>
                                        <h3 className={cn("text-lg font-medium", lastResult.valid ? "text-emerald-800" : "text-red-800")}>
                                            {lastResult.valid ? "Verified" : "Denied"}
                                        </h3>
                                        <p className="text-xs text-slate-400">{lastResult.passCode}</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Student</span>
                                        <span className="font-medium text-slate-800">{lastResult.studentName}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Course</span>
                                        <span className="font-medium text-slate-800">{lastResult.courseName}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed bg-white/50 rounded-xl p-3">
                                    {lastResult.message}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Scan History */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-slate-800">Recent Scans</h3>
                            {scanHistory.length > 0 && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setClearHistoryOpen(true)}
                                    className="h-8 text-xs text-slate-400 hover:text-slate-600 gap-1 rounded-full"
                                >
                                    <ArrowReloadHorizontalIcon size={12} />
                                    Clear
                                </Button>
                            )}
                        </div>
                        {scanHistory.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="h-14 w-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 mb-4">
                                    <QrCode01Icon size={24} />
                                </div>
                                <p className="text-sm text-slate-400 font-medium">No scans yet</p>
                                <p className="text-xs text-slate-300 mt-1">Scan results will appear here</p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {scanHistory.map((result, idx) => (
                                    <div
                                        key={`${result.passCode}-${idx}`}
                                        className={cn(
                                            "flex items-center gap-3 p-3 rounded-xl transition-colors",
                                            result.valid ? "bg-emerald-50/50" : "bg-red-50/50"
                                        )}
                                    >
                                        <div className={cn(
                                            "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                                            result.valid ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-500"
                                        )}>
                                            {result.valid ? <CheckmarkCircle01Icon size={14} /> : <Cancel01Icon size={14} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-sm font-medium text-slate-800 truncate block">{result.studentName}</span>
                                            <span className="text-[10px] text-slate-400">{result.passCode}</span>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className={cn(
                                                "text-[9px] font-medium border-none rounded-full shrink-0",
                                                result.valid ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-500"
                                            )}
                                        >
                                            {result.valid ? "Valid" : "Invalid"}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Clear History Confirmation */}
            <AlertDialog open={clearHistoryOpen} onOpenChange={setClearHistoryOpen}>
                <AlertDialogContent className="rounded-2xl border-slate-100 shadow-xl max-w-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-lg font-medium text-slate-900">Clear Scan History?</AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-500 text-sm">
                            This will remove all {scanHistory.length} scan results from the current session. This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="gap-2 sm:gap-2">
                        <AlertDialogCancel className="rounded-full h-10 border-slate-200 text-slate-500 font-normal">
                            Keep History
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => { setScanHistory([]); setClearHistoryOpen(false); toast.success("Scan history cleared"); }}
                            className="rounded-full h-10 bg-destructive hover:bg-destructive/90 text-white font-normal"
                        >
                            Clear All
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}