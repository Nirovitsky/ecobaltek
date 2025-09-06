export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="title-help-center">
            Help Center
          </h1>
          <p className="text-xl text-gray-600" data-testid="subtitle-help-center">
            Find answers to your questions and get the support you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              data-testid="input-search-help"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200" data-testid="section-getting-started">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Started</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">How to create your first job posting</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Setting up your company profile</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Understanding our matching algorithm</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Managing candidate applications</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200" data-testid="section-account-billing">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account & Billing</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Managing your subscription</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Updating payment information</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Understanding pricing plans</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Canceling your account</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200" data-testid="section-troubleshooting">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Troubleshooting</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Login and password issues</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Email notification problems</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Mobile app troubleshooting</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Browser compatibility issues</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200" data-testid="section-integrations">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Integrations</h2>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">API documentation</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Third-party integrations</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Webhook setup guide</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Developer resources</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-50 rounded-xl p-8 text-center" data-testid="section-contact-support">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still need help?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you succeed. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              data-testid="button-contact-support"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@baltek.com"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              data-testid="button-email-support"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}