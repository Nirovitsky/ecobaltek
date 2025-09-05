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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* baltek business Platform */}
          <Card className="platform-card shadow-lg border-0" data-testid="card-baltek-business">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-xl mr-4">
                  <Building2 className="text-primary text-2xl h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary" data-testid="text-baltek-title">baltek business</h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Modern office workspace" 
                className="rounded-xl mb-6 w-full h-48 object-cover"
                data-testid="img-baltek-workspace"
              />
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed" data-testid="text-baltek-description">
                Streamlined hiring platform for businesses to find, evaluate, and hire top talent efficiently. 
                Advanced analytics, AI-powered matching, and seamless candidate management.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3 h-5 w-5" />
                  <span>AI-powered candidate matching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3 h-5 w-5" />
                  <span>Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3 h-5 w-5" />
                  <span>Streamlined interview process</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary mr-3 h-5 w-5" />
                  <span>Team collaboration tools</span>
                </div>
              </div>
              
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                data-testid="button-start-hiring"
              >
                Start Hiring Today
              </Button>
            </CardContent>
          </Card>

          {/* Asman Platform */}
          <Card className="platform-card shadow-lg border-0" data-testid="card-asman">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-xl mr-4">
                  <UserCheck className="text-secondary text-2xl h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary" data-testid="text-asman-title">Asman</h3>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Professional working on laptop" 
                className="rounded-xl mb-6 w-full h-48 object-cover"
                data-testid="img-asman-workspace"
              />
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed" data-testid="text-asman-description">
                Personalized job discovery platform for professionals seeking their next career opportunity. 
                Smart recommendations, career insights, and direct connections with employers.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                  <span>Personalized job recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                  <span>Career insights and analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                  <span>Direct employer connections</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-secondary mr-3 h-5 w-5" />
                  <span>Professional profile builder</span>
                </div>
              </div>
              
              <Button 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
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
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4">
                <BarChart3 className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" data-testid="text-feature-ai-title">AI Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-feature-ai-description">
                Powered by advanced AI models, our platforms provide smart matching and intelligent recommendations for both businesses and job seekers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="bg-secondary/10 p-3 rounded-xl w-fit mb-4">
                <Users className="text-secondary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" data-testid="text-feature-familiar-title">Feels Familiar</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-feature-familiar-description">
                Intuitive interface design that feels natural. Import your existing data and start connecting with opportunities immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="bg-green-500/10 p-3 rounded-xl w-fit mb-4">
                <Zap className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3" data-testid="text-feature-privacy-title">Privacy First</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-feature-privacy-description">
                Your data is protected with enterprise-grade security. SOC 2 certified with complete privacy controls and data protection.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
