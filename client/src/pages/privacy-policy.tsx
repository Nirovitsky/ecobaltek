export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="title-privacy-policy">
            Privacy Policy
          </h1>
          <p className="text-2xl text-gray-600 mb-4" data-testid="subtitle-privacy-policy">
            Last updated: December 2024
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy and data security are fundamental to everything we do. This comprehensive policy 
              explains how we protect, use, and manage your personal information across our platforms.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm" data-testid="indicator-gdpr">
            <div className="text-4xl mb-4">🛡️</div>
            <div className="text-lg font-bold text-gray-900 mb-2">GDPR Compliant</div>
            <div className="text-gray-600">Full compliance with European data protection standards</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm" data-testid="indicator-encryption">
            <div className="text-4xl mb-4">🔒</div>
            <div className="text-lg font-bold text-gray-900 mb-2">256-bit Encryption</div>
            <div className="text-gray-600">Bank-level security for all your personal data</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm" data-testid="indicator-control">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-lg font-bold text-gray-900 mb-2">Full Control</div>
            <div className="text-gray-600">You own your data and can delete it anytime</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg border-0">
          <div className="prose max-w-none prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
            <section className="mb-8" data-testid="section-introduction">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At baltek business and Asman, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our platforms and services.
              </p>
            </section>

            <section className="mb-8" data-testid="section-information-collection">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Name, email address, phone number, and contact details</li>
                <li>Professional information including resume, work experience, and skills</li>
                <li>Company information for employers using baltek business</li>
                <li>Profile photos and other uploaded content</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Usage Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Device information, IP address, and browser type</li>
                <li>Usage patterns, preferences, and interaction data</li>
                <li>Location data (with your permission)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-information-use">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and improve our recruitment and job search services</li>
                <li>Match candidates with relevant job opportunities</li>
                <li>Communicate with you about our services and updates</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-information-sharing">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>With potential employers when you apply for jobs (with your consent)</li>
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transaction or merger</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-data-security">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                and regular security assessments.
              </p>
            </section>

            <section className="mb-8" data-testid="section-user-rights">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and obtain copies of your personal data</li>
                <li>Rectify or update inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8" data-testid="section-cookies">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. 
                You can control cookie settings through your browser, though this may affect some functionality.
              </p>
            </section>

            <section className="mb-8" data-testid="section-children-privacy">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal 
                information from children under 16.
              </p>
            </section>

            <section className="mb-8" data-testid="section-policy-changes">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the 
                new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section data-testid="section-contact">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> <a href="mailto:privacy@baltek.com" className="text-blue-600 hover:text-blue-800">privacy@baltek.com</a><br />
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