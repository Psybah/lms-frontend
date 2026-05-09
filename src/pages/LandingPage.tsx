import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { Programs } from "@/components/landing/Programs";
import { WhyDavidson } from "@/components/landing/WhyDavidson";
import { LearnerJourney } from "@/components/landing/LearnerJourney";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <Hero />
            <StatsStrip />
            <div id="programs"><Programs /></div>
            <div id="why-davidson"><WhyDavidson /></div>
            <div id="journey"><LearnerJourney /></div>
            <Testimonials />
            <FAQ />
            <CTASection />
            <Footer />
        </div>
    );
}
