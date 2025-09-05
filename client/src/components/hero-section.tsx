import { Button } from "@/components/ui/button";
import { Building2, UserCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="gradient-hero pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight" data-testid="text-hero-title">
          The Complete Job Ecosystem
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Revolutionary dual-platform approach connecting businesses and talent. 
          <span className="font-semibold">baltek business</span> for hiring teams, 
          <span className="font-semibold">Asman</span> for job seekers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-white text-primary px-8 py-4 text-lg hover:bg-gray-50 shadow-lg group"
            data-testid="button-for-businesses"
          >
            <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            For Businesses
          </Button>
          <Button 
            size="lg"
            className="bg-secondary text-secondary-foreground px-8 py-4 text-lg hover:bg-secondary/90 shadow-lg group"
            data-testid="button-find-jobs"
          >
            <UserCheck className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Find Jobs
          </Button>
        </div>
      </div>
    </section>
  );
}
