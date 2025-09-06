export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-testid="title-contact-us">
            Contact Us
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="subtitle-contact-us">
            Get in touch with our team. We're here to help you succeed on your recruitment journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm" data-testid="stat-response-time">
            <div className="text-4xl font-bold text-blue-600 mb-2">24hrs</div>
            <div className="text-lg font-medium text-gray-900 mb-2">Response Time</div>
            <div className="text-gray-600">We respond to all inquiries within 24 hours</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm" data-testid="stat-support-rating">
            <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-lg font-medium text-gray-900 mb-2">Satisfaction Rate</div>
            <div className="text-gray-600">Our customers love our support experience</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm" data-testid="stat-availability">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-lg font-medium text-gray-900 mb-2">Availability</div>
            <div className="text-gray-600">Round-the-clock support for urgent issues</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border-0" data-testid="section-contact-form">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a message</h2>
              <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="input-company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="select-subject"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                  data-testid="textarea-message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                data-testid="button-submit-contact"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 shadow-lg border-0" data-testid="section-contact-info">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h2>
                <p className="text-lg text-gray-600">Multiple ways to reach our team. Choose what works best for you.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600" data-testid="text-office-address">
                      123 Business Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@baltek.com" className="hover:text-blue-600 transition-colors" data-testid="link-email-info">
                        info@baltek.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:support@baltek.com" className="hover:text-blue-600 transition-colors" data-testid="link-email-support">
                        support@baltek.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1-555-123-4567" className="hover:text-blue-600 transition-colors" data-testid="link-phone-main">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-10" data-testid="section-response-time">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/50">
                <p className="text-sm text-gray-600">
                  <strong>Emergency Support:</strong> Available 24/7 for critical issues
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg border-0" data-testid="section-office-locations">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">San Francisco HQ</h4>
                  <p className="text-gray-600 mt-2">123 Business Street<br />San Francisco, CA 94105</p>
                  <p className="text-sm text-gray-500 mt-2">Main office & customer support</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">New York Office</h4>
                  <p className="text-gray-600 mt-2">456 Tech Avenue<br />New York, NY 10001</p>
                  <p className="text-sm text-gray-500 mt-2">Sales & partnerships</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">Austin Office</h4>
                  <p className="text-gray-600 mt-2">789 Innovation Blvd<br />Austin, TX 78701</p>
                  <p className="text-sm text-gray-500 mt-2">Development & engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}