import { Button } from "@/components/ui/button";
import { Building2, UserCheck } from "lucide-react";
import businessImage from "@assets/generated_images/Business_hiring_process_illustration_092bbc8e.png";
import jobSeekerImage from "@assets/generated_images/Job_seekers_platform_interface_9225d86c.png";
import backgroundImage from "@assets/generated_images/Professional_office_background_scene_172bb180.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        data-testid="bg-hero-video"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Dual Platform Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Business Platform */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-white/10 backdrop-blur-sm border border-white/20">
              <img 
                src={businessImage} 
                alt="Business hiring platform"
                className="w-full h-auto opacity-90"
                data-testid="img-business-platform"
              />
            </div>
            <Button 
              size="lg"
              className="bg-white text-black px-8 py-4 text-lg hover:bg-gray-100 shadow-lg group w-full font-semibold"
              data-testid="button-for-businesses"
            >
              <Building2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Business Platform
            </Button>
          </div>

          {/* Job Seeker Platform */}
          <div className="text-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 bg-white/10 backdrop-blur-sm border border-white/20">
              <img 
                src={jobSeekerImage} 
                alt="Job seeker platform interface"
                className="w-full h-auto opacity-90"
                data-testid="img-jobseeker-platform"
              />
            </div>
            <Button 
              size="lg"
              className="bg-blue-600 text-white px-8 py-4 text-lg hover:bg-blue-700 shadow-lg group w-full font-semibold"
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
