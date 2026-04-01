import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight01Icon } from "hugeicons-react";

export function CTASection() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="relative rounded-[2rem] bg-primary overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5" />

                    <div className="relative text-center py-12 sm:py-16 lg:py-20 px-6 sm:px-8 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                            Begin your next programme with TRD, ITeMS.
                        </h2>
                        <p className="text-base text-white/80 max-w-lg mx-auto font-normal leading-relaxed">
                            Join hundreds of professionals advancing their careers with structured, verified ICT training.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full">
                            <Link to="/signup" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-medium text-sm shadow-lg shadow-black/10 gap-2">
                                    Create an Account
                                    <ArrowRight01Icon size={14} />
                                </Button>
                            </Link>
                            <Link to="/login" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary border-white/70 text-white hover:bg-white hover:border-white/30 font-medium text-sm">
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
