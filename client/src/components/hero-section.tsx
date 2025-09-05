import { Button } from "@/components/ui/button";
import backgroundImage from "@assets/generated_images/Professional_office_background_scene_172bb180.png";

export function HeroSection() {
  return (
    <section id="about" className="relative min-h-[60vh] sm:h-[70vh] lg:h-[80vh] pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center h-full min-h-[40vh] sm:min-h-[50vh]">
          {/* Hero Text */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight" data-testid="text-hero-title">
              Hiring that connects
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0" data-testid="text-hero-subtitle">
              The people you're looking for are here. Connect businesses and talent through our dual-platform approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button 
                size="lg"
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:bg-gray-100 shadow-lg font-semibold w-full sm:w-auto"
                data-testid="button-post-job"
              >
                Post a Job
              </Button>
              <Button 
                size="lg"
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:bg-blue-700 shadow-lg font-semibold w-full sm:w-auto"
                data-testid="button-find-jobs"
              >
                Find Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}