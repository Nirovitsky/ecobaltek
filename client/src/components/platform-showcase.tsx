import { Button } from "@/components/ui/button";
import { Brain, Zap, Shield } from "lucide-react";

export function PlatformShowcase() {
  return (
    <section id="platforms" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header section - matching Cursor's style */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6" data-testid="text-platforms-title">
            Build careers faster
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light" data-testid="text-platforms-subtitle">
            Intelligent, fast, and familiar, our platform is the best way to connect talent with AI.
          </p>
          
          <div className="mt-8">
            <Button 
              className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              data-testid="button-see-more-features"
            >
              See more features
            </Button>
          </div>
        </div>

        {/* Feature cards - Cursor's clean grid layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Intelligence Card */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-105" data-testid="card-ai-intelligence">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="text-ai-title">
                  AI Intelligence
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg" data-testid="text-ai-description">
                  Powered by a mix of purpose-built and frontier models, our platform is smart and fast.
                </p>
              </div>
              
              {/* Placeholder for image - similar to Cursor's cards */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-blue-400 text-6xl">🧠</div>
              </div>
            </div>
          </div>

          {/* Feels Familiar Card */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-105" data-testid="card-feels-familiar">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="text-familiar-title">
                  Feels Familiar
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg" data-testid="text-familiar-description">
                  Import all your existing profiles, preferences, and connections in one click.
                </p>
              </div>
              
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center">
                <div className="text-green-400 text-6xl">⚡</div>
              </div>
            </div>
          </div>

          {/* Privacy Options Card */}
          <div className="group cursor-pointer transition-all duration-300 hover:scale-105" data-testid="card-privacy-options">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" data-testid="text-privacy-title">
                  Privacy Options
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg" data-testid="text-privacy-description">
                  If you enable Privacy Mode, your data is never stored remotely without your consent. SOC 2 certified.
                </p>
              </div>
              
              {/* Placeholder for image */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-purple-400 text-6xl">🔐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
