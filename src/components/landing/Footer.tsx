import { Link } from "react-router-dom";
import { TwitterIcon, Linkedin01Icon, YoutubeIcon } from "hugeicons-react";

export function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12 lg:mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
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
                        <p className="text-sm text-slate-500 leading-relaxed pr-4">
                            Excellence in ICT, research methods, and technical training for students and professionals.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#programs" className="hover:text-primary transition-colors">Programmes</a></li>
                            <li><a href="#why-trd" className="hover:text-primary transition-colors">Why TRD</a></li>
                            <li><a href="#journey" className="hover:text-primary transition-colors">Your Journey</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Socials & Connect */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-primary/5 hover:text-primary transition-colors">
                                <TwitterIcon size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-primary/5 hover:text-primary transition-colors">
                                <Linkedin01Icon size={18} />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-primary/5 hover:text-primary transition-colors">
                                <YoutubeIcon size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col items-center justify-center text-center">
                    <p className="text-xs text-slate-400 font-medium">
                        &copy; {new Date().getFullYear()} TRD · ITeMS, University of Ibadan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
