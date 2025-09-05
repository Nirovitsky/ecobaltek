export function Footer() {
  return (
    <>
      {/* Trusted By Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium mb-12" data-testid="text-trusted-by-label">
            Trusted by leading companies
          </p>
          
          {/* Circular Animation Container */}
          <div className="relative w-full h-80 flex items-center justify-center">
            <div className="circular-companies-container">
              <div className="company-orbit company-orbit-1">
                <div className="company-item" data-testid="text-company-google">Google</div>
              </div>
              <div className="company-orbit company-orbit-2">
                <div className="company-item" data-testid="text-company-microsoft">Microsoft</div>
              </div>
              <div className="company-orbit company-orbit-3">
                <div className="company-item" data-testid="text-company-apple">Apple</div>
              </div>
              <div className="company-orbit company-orbit-4">
                <div className="company-item" data-testid="text-company-meta">Meta</div>
              </div>
              <div className="company-orbit company-orbit-5">
                <div className="company-item" data-testid="text-company-netflix">Netflix</div>
              </div>
              <div className="company-orbit company-orbit-6">
                <div className="company-item" data-testid="text-company-uber">Uber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-cta-title">
            Ready to Transform Your Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-10" data-testid="text-cta-subtitle">
            Join thousands of businesses and professionals who have revolutionized their approach to recruitment
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg group" data-testid="button-start-baltek">
              <i className="fas fa-building mr-2 group-hover:scale-110 transition-transform"></i>
              Start with baltek business
            </button>
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/90 transition-colors shadow-lg group" data-testid="button-explore-asman">
              <i className="fas fa-search mr-2 group-hover:scale-110 transition-transform"></i>
              Explore Jobs on Asman
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4" data-testid="text-footer-logo">
                <span className="text-white/80">baltek</span> x <span className="text-white">Asman</span>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed" data-testid="text-footer-description">
                The complete job ecosystem connecting world-class businesses with exceptional talent through intelligent platform integration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-platforms-title">Platforms</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-baltek-footer">baltek business</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-asman-footer">Asman</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-api-docs">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-integrations">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" data-testid="text-footer-support-title">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-help-center">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact-us">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-privacy-policy">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p data-testid="text-footer-copyright">&copy; 2024 baltek business x Asman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
