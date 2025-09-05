import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-lg font-normal text-black tracking-tight">
              Cursor
            </div>
          </div>
          
          {/* Navigation Links - Very minimal */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#features"
              className="text-sm text-gray-500 hover:text-gray-900 transition-all duration-200 font-normal"
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#pricing"
              className="text-sm text-gray-500 hover:text-gray-900 transition-all duration-200 font-normal"
              data-testid="link-pricing"
            >
              Pricing
            </a>
            <a 
              href="#changelog"
              className="text-sm text-gray-500 hover:text-gray-900 transition-all duration-200 font-normal"
              data-testid="link-changelog"
            >
              Changelog
            </a>
            <a 
              href="#docs"
              className="text-sm text-gray-500 hover:text-gray-900 transition-all duration-200 font-normal"
              data-testid="link-docs"
            >
              Docs
            </a>
          </div>
          
          {/* Download Button */}
          <div className="flex items-center">
            <Button 
              className="bg-black text-white hover:bg-gray-900 text-sm font-normal px-4 py-1.5 h-8 rounded-md transition-all duration-200 shadow-sm"
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
