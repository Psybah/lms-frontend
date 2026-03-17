import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight01Icon } from "hugeicons-react";

export function Hero() {
    return (
        <section className="relative m-4 rounded-2xl overflow-hidden min-h-[95vh] flex items-end shadow-lg shadow-slate-200/50">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/assets/trd.png"
                    alt="TRD Training Session"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-black/10" />
            </div>

            {/* Content aligned to bottom-left */}
            <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-10 lg:pb-10">
                <div className="max-w-3xl space-y-6">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                        Learn. Certify. Advance.
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed">
                        Professional training in ICT, research methods, and technical skills. Enrol, attend, and earn verified institutional credentials.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                        <Link to="/signup">
                            <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-base gap-2 border-none">
                                Browse Programmes
                                <ArrowRight01Icon size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
