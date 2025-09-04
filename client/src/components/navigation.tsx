import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-12">
            <div className="text-xl font-semibold">
              <span className="text-foreground">baltek</span> <span className="text-muted-foreground">x</span> <span className="text-foreground">Asman</span>
            </div>
            <div className="hidden lg:flex space-x-8">
              <button 
                onClick={() => scrollToSection('platforms')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-testid="link-platforms"
              >
                Platforms
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-testid="link-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-testid="link-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              className="hidden sm:inline-flex bg-foreground text-background hover:bg-foreground/90 text-sm font-medium px-4 py-2 h-9 rounded-lg"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('platforms')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-testid="mobile-link-platforms"
              >
                Platforms
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-testid="mobile-link-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-testid="mobile-link-contact"
              >
                Contact
              </button>
              <Button 
                className="bg-foreground text-background hover:bg-foreground/90 w-full font-medium rounded-lg"
                data-testid="mobile-button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
