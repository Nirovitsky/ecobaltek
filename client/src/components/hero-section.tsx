import { Button } from "@/components/ui/button";
import { Building2, UserCheck, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading with staggered animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-500 mr-3 animate-spin" />
            <span className="px-4 py-2 bg-blue-100/80 text-blue-700 rounded-full text-sm font-medium">
              Revolutionary Job Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight" data-testid="text-hero-title">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              The Complete
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              Job Ecosystem
            </span>
          </h1>
        </div>

        {/* Subtitle with delayed animation */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-light" data-testid="text-hero-subtitle">
            Revolutionary dual-platform approach connecting businesses and talent through AI-powered matching.
            <br />
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">baltek business</span> for hiring teams, 
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ml-2">Asman</span> for job seekers.
          </p>
        </div>

        {/* CTA buttons with staggered animation */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 group overflow-hidden"
              data-testid="button-for-businesses"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Building2 className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                For Businesses
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
            
            <Button 
              size="lg"
              className="relative bg-white border-2 border-gray-200 text-gray-800 px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 hover:border-blue-300 transition-all duration-300 group"
              data-testid="button-find-jobs"
            >
              <div className="flex items-center">
                <UserCheck className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Find Jobs
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
          </div>
        </div>

        {/* Stats section with animation */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-gray-600 font-medium">Active Jobs</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                5K+
              </div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-gray-600 font-medium">Match Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
      <div className="absolute bottom-1/4 left-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-2000"></div>
    </section>
  );
}
