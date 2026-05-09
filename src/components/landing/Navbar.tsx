import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon, Menu01Icon, Cancel01Icon } from "hugeicons-react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
            <nav className="pointer-events-auto w-full max-w-6xl bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-black/5 rounded-full h-16 px-4 sm:px-6 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-3 shrink-0"
                    onClick={(e) => {
                        closeMenu();
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <img src="/logo.png" alt="Davidson Tech Academy" className="h-8 w-8 object-cover rounded-lg" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-900 leading-tight">Davidson Tech Academy</span>
                        <span className="text-[10px] text-slate-500 font-medium hidden sm:block">Davidson University</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#programs" className="hover:text-primary transition-colors">Programmes</a>
                    <a href="#why-davidson" className="hover:text-primary transition-colors">Why Davidson</a>
                    <a href="#journey" className="hover:text-primary transition-colors">Your Journey</a>
                    <a href="#faq" className="hover:text-primary transition-colors">FAQs</a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login">
                        <Button className="h-10 px-6 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium shadow-md shadow-primary/10 gap-1.5 border-none">
                            Sign In
                            <ArrowRight01Icon size={14} />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={toggleMenu}
                        className="h-10 w-10 flex items-center justify-center transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <Cancel01Icon size={20} /> : <Menu01Icon size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="pointer-events-auto absolute top-[76px] sm:top-[80px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] max-w-md bg-white border border-slate-200/60 shadow-2xl rounded-3xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 fade-in duration-200">
                    <div className="flex flex-col space-y-4 text-base font-medium text-slate-700">
                        <a href="#programs" onClick={closeMenu} className="hover:text-primary transition-colors p-2 -mx-2 rounded-lg hover:bg-slate-50">Programmes</a>
                        <a href="#why-davidson" onClick={closeMenu} className="hover:text-primary transition-colors p-2 -mx-2 rounded-lg hover:bg-slate-50">Why Davidson</a>
                        <a href="#journey" onClick={closeMenu} className="hover:text-primary transition-colors p-2 -mx-2 rounded-lg hover:bg-slate-50">Your Journey</a>
                        <a href="#faq" onClick={closeMenu} className="hover:text-primary transition-colors p-2 -mx-2 rounded-lg hover:bg-slate-50">FAQs</a>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                        <Link to="/login" onClick={closeMenu} className="w-full">
                            <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium shadow-md shadow-primary/10 border-none justify-center">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
