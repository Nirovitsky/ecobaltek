import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg px-12 py-3 w-[85vw]">
        <div className="flex items-center justify-between space-x-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-lg font-medium text-black">
              Cursor
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
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
          <div className="flex items-center">
            <Button 
              className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-5 py-2 h-9 rounded-xl transition-colors"
              data-testid="button-download"
            >
              Download
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
