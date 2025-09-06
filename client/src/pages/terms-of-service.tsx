export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="title-terms-of-service">
            Terms of Service
          </h1>
          <p className="text-2xl text-gray-600 mb-4" data-testid="subtitle-terms-of-service">
            Last updated: December 2024
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              These terms govern your use of baltek business and Asman platforms. By using our services, 
              you agree to these terms which ensure a fair and secure experience for all users.
            </p>
          </div>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-10 shadow-lg border-0" data-testid="service-baltek">
            <div className="text-4xl mb-6">🏢</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">baltek business</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our employer platform helps companies find, evaluate, and hire top talent through 
              AI-powered matching and comprehensive candidate management tools.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg border-0" data-testid="service-asman">
            <div className="text-4xl mb-6">👤</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Asman</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our job seeker platform connects talented professionals with their dream opportunities 
              through intelligent job matching and career development resources.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg border-0">
          <div className="prose max-w-none prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
            <section className="mb-8" data-testid="section-agreement">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using baltek business and Asman platforms, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8" data-testid="section-services">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide recruitment and job search platforms that connect employers with job seekers:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>baltek business:</strong> A platform for employers to post jobs and find candidates</li>
                <li><strong>Asman:</strong> A platform for job seekers to find opportunities and connect with employers</li>
                <li>AI-powered matching technology</li>
                <li>Communication tools and analytics</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-user-accounts">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our services, you must create an account and provide accurate information. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use</li>
                <li>Ensuring your information remains current and accurate</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-acceptable-use">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Post false, misleading, or discriminatory content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-content">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Content</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You retain ownership of content you submit to our platforms. By posting content, you grant us a 
                non-exclusive license to use, display, and distribute your content in connection with our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You represent that your content does not infringe on third-party rights and complies with our 
                community guidelines.
              </p>
            </section>

            <section className="mb-8" data-testid="section-privacy">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
                our services, to understand our practices.
              </p>
            </section>

            <section className="mb-8" data-testid="section-payment-terms">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Subscription fees are billed in advance</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>We reserve the right to change pricing with notice</li>
                <li>Failure to pay may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-termination">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate this agreement at any time. We may suspend or terminate your access 
                immediately for violations of these terms. Upon termination, your right to use our services ceases.
              </p>
            </section>

            <section className="mb-8" data-testid="section-disclaimers">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are provided "as is" without warranties of any kind. We do not guarantee employment 
                outcomes or the accuracy of user-provided information. Use of our services is at your own risk.
              </p>
            </section>

            <section className="mb-8" data-testid="section-limitation-liability">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
            </section>

            <section className="mb-8" data-testid="section-governing-law">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms shall be interpreted and governed in accordance with the laws of California, 
                United States, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="mb-8" data-testid="section-changes">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will provide notice of material changes 
                and your continued use constitutes acceptance of the updated terms.
              </p>
            </section>

            <section data-testid="section-contact-legal">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:legal@baltek.com" className="text-blue-600 hover:text-blue-800">legal@baltek.com</a><br />
                  <strong>Address:</strong> 123 Business Street, San Francisco, CA 94105<br />
                  <strong>Phone:</strong> <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-800">+1 (555) 123-4567</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}