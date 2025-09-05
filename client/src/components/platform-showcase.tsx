import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, UserCheck, CheckCircle, BarChart3, Users, Zap, Target, TrendingUp, Heart } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Custom hook for count-up animation
function useCountUp(end: number, duration: number = 2000, startAnimation: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, startAnimation]);

  return count;
}

export function PlatformShowcase() {
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);
  const cardRef4 = useRef<HTMLDivElement>(null);
  const cardRef5 = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  // Hook instances for count animations
  const companiesCount = useCountUp(50, 2000, statsInView);
  const jobSeekersCount = useCountUp(2000, 2500, statsInView);
  const matchesCount = useCountUp(1500, 2200, statsInView);
  const satisfactionCount = useCountUp(98, 1800, statsInView);

  useEffect(() => {
    // Intersection observer for stats animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsInView) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsInView]);

  useEffect(() => {
    const cards = [cardRef1, cardRef2, cardRef3, cardRef4, cardRef5];
    let animationId: number;
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      cards.forEach((cardRef) => {
        const card = cardRef.current;
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Calculate distance from mouse to card center
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );
          
          // Maximum distance for effect (adjust for sensitivity)
          const maxDistance = 400;
          
          // Check if mouse is within the card bounds or nearby
          const isNearby = distance < maxDistance;
          const isHovering = 
            x >= -50 && x <= rect.width + 50 && 
            y >= -50 && y <= rect.height + 50;
          
          if (isHovering || isNearby) {
            // Calculate opacity based on proximity
            const opacity = Math.max(0, 1 - distance / maxDistance);
            
            // Update CSS variables
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.style.setProperty('--card-opacity', `${opacity * 0.6}`);
          } else {
            card.style.setProperty('--card-opacity', '0');
          }
        }
      });
    };

    const handleMouseEnter = (card: HTMLDivElement) => {
      card.style.setProperty('--card-opacity', '0.8');
    };

    const handleMouseLeave = (card: HTMLDivElement) => {
      // Don't immediately hide on leave, let global mouse move handle it
      setTimeout(() => {
        const currentOpacity = parseFloat(card.style.getPropertyValue('--card-opacity'));
        if (currentOpacity > 0) {
          card.style.setProperty('--card-opacity', '0');
        }
      }, 100);
    };

    // Add global mouse move listener
    document.addEventListener('mousemove', handleGlobalMouseMove);

    // Add individual card listeners
    cards.forEach((cardRef) => {
      const card = cardRef.current;
      if (card) {
        const onMouseEnter = () => handleMouseEnter(card);
        const onMouseLeave = () => handleMouseLeave(card);

        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);
      }
    });

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      cards.forEach((cardRef) => {
        const card = cardRef.current;
        if (card) {
          card.removeEventListener('mouseenter', () => handleMouseEnter(card));
          card.removeEventListener('mouseleave', () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  return (
    <section id="platforms" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-platforms-title">
            Two Platforms, One Ecosystem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0" data-testid="text-platforms-subtitle">
            Experience the future of recruitment with our integrated platform approach designed for modern workplaces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* baltek business Platform */}
          <Card 
            ref={cardRef1}
            className="relative border border-gray-200 cursor-gradient-card" 
            data-testid="card-baltek-business"
            style={{
              '--mouse-x': '0px',
              '--mouse-y': '0px',
              '--card-opacity': '0'
            } as React.CSSProperties}
          >
            <CardContent className="relative p-6 bg-white rounded-lg">
              <div className="flex items-center mb-4">
                <Building2 className="text-gray-600 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900" data-testid="text-baltek-title">baltek business</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-baltek-description">
                Streamlined hiring platform for businesses to find, evaluate, and hire top talent efficiently.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="text-gray-600">• AI-powered candidate matching</div>
                <div className="text-gray-600">• Advanced analytics dashboard</div>
                <div className="text-gray-600">• Streamlined interview process</div>
                <div className="text-gray-600">• Team collaboration tools</div>
              </div>
              
              <Button 
                className="bg-black text-white w-full"
                data-testid="button-start-hiring"
              >
                Start Hiring Today
              </Button>
            </CardContent>
          </Card>

          {/* Asman Platform */}
          <Card 
            ref={cardRef2}
            className="relative border border-gray-200 cursor-gradient-card" 
            data-testid="card-asman"
            style={{
              '--mouse-x': '0px',
              '--mouse-y': '0px',
              '--card-opacity': '0'
            } as React.CSSProperties}
          >
            <CardContent className="relative p-6 bg-white rounded-lg">
              <div className="flex items-center mb-4">
                <UserCheck className="text-gray-600 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900" data-testid="text-asman-title">Asman</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-asman-description">
                Personalized job discovery platform for professionals seeking their next career opportunity.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="text-gray-600">• Personalized job recommendations</div>
                <div className="text-gray-600">• Career insights and analytics</div>
                <div className="text-gray-600">• Direct employer connections</div>
                <div className="text-gray-600">• Professional profile builder</div>
              </div>
              
              <Button 
                className="bg-black text-white w-full"
                data-testid="button-find-dream-job"
              >
                Find Your Dream Job
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Stats Section */}
        <div 
          ref={statsRef}
          className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent to-accent/80 rounded-xl sm:rounded-2xl shadow-lg border border-border/20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Join thousands of companies and professionals already transforming their hiring process
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {/* Companies Stat */}
              <div 
                className={`text-center group transition-all duration-700 transform hover:scale-105 ${
                  statsInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110" data-testid="text-stats-companies">
                  {companiesCount}K+
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  Active Companies
                </div>
              </div>

              {/* Job Seekers Stat */}
              <div 
                className={`text-center group transition-all duration-700 transform hover:scale-105 ${
                  statsInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110" data-testid="text-stats-job-seekers">
                  {Math.floor(jobSeekersCount / 1000)}M+
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  Job Seekers
                </div>
              </div>

              {/* Successful Matches Stat */}
              <div 
                className={`text-center group transition-all duration-700 transform hover:scale-105 ${
                  statsInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 mb-2 transition-all duration-300 group-hover:scale-110" data-testid="text-stats-matches">
                  {Math.floor(matchesCount / 100) / 10}M+
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  Successful Matches
                </div>
              </div>

              {/* Satisfaction Rate Stat */}
              <div 
                className={`text-center group transition-all duration-700 transform hover:scale-105 ${
                  statsInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors duration-300">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2 transition-all duration-300 group-hover:scale-110" data-testid="text-stats-satisfaction">
                  {satisfactionCount}%
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  Satisfaction Rate
                </div>
              </div>
            </div>

            {/* Animated pulse elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <Card 
            ref={cardRef3}
            className="relative border border-gray-200 cursor-gradient-card"
            style={{
              '--mouse-x': '0px',
              '--mouse-y': '0px',
              '--card-opacity': '0'
            } as React.CSSProperties}
          >
            <CardContent className="relative p-6 bg-white rounded-lg">
              <BarChart3 className="text-gray-600 h-6 w-6 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-testid="text-feature-ai-title">AI Intelligence</h3>
              <p className="text-gray-600 leading-relaxed" data-testid="text-feature-ai-description">
                Powered by advanced AI models, our platforms provide smart matching and intelligent recommendations for both businesses and job seekers.
              </p>
            </CardContent>
          </Card>

          <Card 
            ref={cardRef4}
            className="relative border border-gray-200 cursor-gradient-card"
            style={{
              '--mouse-x': '0px',
              '--mouse-y': '0px',
              '--card-opacity': '0'
            } as React.CSSProperties}
          >
            <CardContent className="relative p-6 bg-white rounded-lg">
              <Users className="text-gray-600 h-6 w-6 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-testid="text-feature-familiar-title">Feels Familiar</h3>
              <p className="text-gray-600 leading-relaxed" data-testid="text-feature-familiar-description">
                Intuitive interface design that feels natural. Import your existing data and start connecting with opportunities immediately.
              </p>
            </CardContent>
          </Card>

          <Card 
            ref={cardRef5}
            className="relative border border-gray-200 cursor-gradient-card"
            style={{
              '--mouse-x': '0px',
              '--mouse-y': '0px',
              '--card-opacity': '0'
            } as React.CSSProperties}
          >
            <CardContent className="relative p-6 bg-white rounded-lg">
              <Zap className="text-gray-600 h-6 w-6 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-testid="text-feature-privacy-title">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed" data-testid="text-feature-privacy-description">
                Your data is protected with enterprise-grade security. SOC 2 certified with complete privacy controls and data protection.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
