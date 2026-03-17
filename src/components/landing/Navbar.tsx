import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "hugeicons-react";

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <nav className="pointer-events-auto w-full max-w-6xl bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-black/5 rounded-full h-16 px-6 flex items-center justify-between">
                <Link 
                    to="/" 
                    className="flex items-center gap-3"
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <img src="/logo.png" alt="TRD" className="h-8 w-8 object-cover rounded-lg" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900 leading-tight">TRD LMS</span>
                        <span className="text-[10px] text-slate-500 font-medium">University of Ibadan</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#programs" className="hover:text-primary transition-colors">Programmes</a>
                    <a href="#why-trd" className="hover:text-primary transition-colors">Why TRD</a>
                    <a href="#journey" className="hover:text-primary transition-colors">Your Journey</a>
                    <a href="#faq" className="hover:text-primary transition-colors">FAQs</a>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <Button className="h-10 px-6 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium shadow-md shadow-primary/10 gap-1.5 border-none">
                            Sign In
                            <ArrowRight01Icon size={14} />
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
