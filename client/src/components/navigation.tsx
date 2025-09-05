import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100/50 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-medium text-black">
              Cursor
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal"
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#pricing"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal"
              data-testid="link-pricing"
            >
              Pricing
            </a>
            <a 
              href="#changelog"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal"
              data-testid="link-changelog"
            >
              Changelog
            </a>
            <a 
              href="#docs"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal"
              data-testid="link-docs"
            >
              Docs
            </a>
          </div>
          
          {/* Desktop Download Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-black text-white hover:bg-gray-900 text-sm font-medium px-4 py-2 h-9 rounded-md transition-all duration-200"
              data-testid="button-download"
            >
              Download
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100/50 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal py-2"
                data-testid="mobile-link-features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal py-2"
                data-testid="mobile-link-pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#changelog"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal py-2"
                data-testid="mobile-link-changelog"
                onClick={() => setIsMenuOpen(false)}
              >
                Changelog
              </a>
              <a 
                href="#docs"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal py-2"
                data-testid="mobile-link-docs"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <div className="pt-4">
                <Button 
                  className="bg-black text-white hover:bg-gray-900 text-sm font-medium px-4 py-2 h-9 rounded-md transition-all duration-200 w-full"
                  data-testid="mobile-button-download"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
