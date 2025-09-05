import { Button } from "@/components/ui/button";
import { Building2, UserCheck } from "lucide-react";
import dashboardImage from "@assets/generated_images/Job_platform_dashboard_interface_ce30ef86.png";
import businessImage from "@assets/generated_images/Business_hiring_process_illustration_092bbc8e.png";
import jobSeekerImage from "@assets/generated_images/Job_seekers_platform_interface_9225d86c.png";

export function HeroSection() {
  return (
    <section className="gradient-hero pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Platform Showcase */}
        <div className="text-center mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img 
              src={dashboardImage} 
              alt="Dual platform job ecosystem dashboard"
              className="w-full h-auto max-w-4xl mx-auto"
              data-testid="img-platform-dashboard"
            />
          </div>
        </div>

        {/* Dual Platform Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Business Platform */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
              <img 
                src={businessImage} 
                alt="Business hiring platform"
                className="w-full h-auto"
                data-testid="img-business-platform"
              />
            </div>
            <Button 
              size="lg"
              className="bg-white text-primary px-8 py-4 text-lg hover:bg-gray-50 shadow-lg group w-full"
              data-testid="button-for-businesses"
            >
              <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Business Platform
            </Button>
          </div>

          {/* Job Seeker Platform */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
              <img 
                src={jobSeekerImage} 
                alt="Job seeker platform interface"
                className="w-full h-auto"
                data-testid="img-jobseeker-platform"
              />
            </div>
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground px-8 py-4 text-lg hover:bg-secondary/90 shadow-lg group w-full"
              data-testid="button-find-jobs"
            >
              <UserCheck className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Career Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
