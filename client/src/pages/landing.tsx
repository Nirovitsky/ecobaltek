import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PlatformShowcase } from "@/components/platform-showcase";
import { TestimonialsSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PlatformShowcase />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
