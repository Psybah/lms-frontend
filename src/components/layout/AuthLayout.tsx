import { Link, useLocation } from "react-router-dom";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="h-screen flex overflow-hidden bg-slate-100">
            {/* Left Panel - Brand Image */}
            <div className="hidden lg:flex w-1/2 relative m-4 rounded-2xl overflow-hidden shrink-0">
                <img
                    src="/assets/trd.png"
                    alt="TRD Brand"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Bottom gradient with tagline */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <div className="mb-3">
                        <span className="text-xs font-normal uppercase tracking-widest text-white/60">
                            Training & Research Division
                        </span>
                    </div>
                    <h2 className="text-3xl font-medium leading-snug mb-3">
                        Learn, Certify, and Advance.
                    </h2>
                    <p className="text-sm text-white/70 font-normal leading-relaxed max-w-sm">
                        A unified platform for physical training programs, digital gatekeeping, and professional certification.
                    </p>
                </div>
            </div>

            {/* Right Panel - Auth Forms */}
            <div className="flex-1 flex flex-col h-full overflow-y-auto lg:overflow-hidden">
                <div className="flex-1 flex flex-col justify-center items-center min-h-full px-6 py-10 lg:py-0 lg:px-12 max-w-lg mx-auto w-full">
                    {/* Logo for mobile / top of form */}
                    <div className="flex flex-col items-center mb-10">
                        <img src="/logo.png" alt="TRD-LMS" className="h-12 w-12 object-contain mb-4" />
                        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">TRD-LMS Portal</span>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
