import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, UserCheck, CheckCircle, BarChart3, Users, Zap, Target } from "lucide-react";
import { useRef, useEffect } from "react";

export function PlatformShowcase() {
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);
  const cardRef4 = useRef<HTMLDivElement>(null);
  const cardRef5 = useRef<HTMLDivElement>(null);

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

        {/* Stats Section */}
        <div className="py-8 sm:py-12 lg:py-16 bg-accent rounded-xl sm:rounded-2xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stats-companies">50K+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Active Companies</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stats-job-seekers">2M+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Job Seekers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stats-matches">1.5M+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Successful Matches</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2" data-testid="text-stats-satisfaction">98%</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">Satisfaction Rate</div>
              </div>
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
