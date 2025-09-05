import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/20 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-medium text-black">
              Cursor
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features"
              className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#pricing"
              className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
              data-testid="link-pricing"
            >
              Pricing
            </a>
            <a 
              href="#changelog"
              className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
              data-testid="link-changelog"
            >
              Changelog
            </a>
            <a 
              href="#docs"
              className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
              data-testid="link-docs"
            >
              Docs
            </a>
          </div>
          
          {/* Download Button */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-6 py-2 h-10 rounded-md transition-colors"
              data-testid="button-download"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
