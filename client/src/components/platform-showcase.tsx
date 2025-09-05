import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, UserCheck, CheckCircle, BarChart3, Users, Zap, Target } from "lucide-react";

export function PlatformShowcase() {
  return (
    <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-platforms-title">
            Two Platforms, One Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-platforms-subtitle">
            Experience the future of recruitment with our integrated platform approach designed for modern workplaces
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* baltek business Platform */}
          <Card className="border border-gray-200" data-testid="card-baltek-business">
            <CardContent className="p-6">
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
          <Card className="border border-gray-200" data-testid="card-asman">
            <CardContent className="p-6">
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
        <div className="py-16 bg-accent rounded-2xl">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stats-companies">50K+</div>
                <div className="text-muted-foreground">Active Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stats-job-seekers">2M+</div>
                <div className="text-muted-foreground">Job Seekers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stats-matches">1.5M+</div>
                <div className="text-muted-foreground">Successful Matches</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stats-satisfaction">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <BarChart3 className="text-gray-600 h-6 w-6 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-testid="text-feature-ai-title">AI Intelligence</h3>
              <p className="text-gray-600 leading-relaxed" data-testid="text-feature-ai-description">
                Powered by advanced AI models, our platforms provide smart matching and intelligent recommendations for both businesses and job seekers.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <Users className="text-gray-600 h-6 w-6 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-testid="text-feature-familiar-title">Feels Familiar</h3>
              <p className="text-gray-600 leading-relaxed" data-testid="text-feature-familiar-description">
                Intuitive interface design that feels natural. Import your existing data and start connecting with opportunities immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="p-6">
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
