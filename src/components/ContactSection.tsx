export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Have a question or want to discuss a project?<br />
                  Feel free to reach out to Maize Homes<br />
                  Developments. We&apos;re here to help.
                </p>
              </div>

              {/* Modern Professional Visual Element */}
              <div className="relative">
                <div className="w-64 h-48 relative">
                  {/* Main geometric composition */}
                  <div className="absolute inset-0">
                    {/* Large background rectangle */}
                    <div className="absolute top-4 left-4 w-40 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg"></div>
                    
                    {/* Overlapping geometric shapes */}
                    <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md transform rotate-12"></div>
                    <div className="absolute top-12 left-16 w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md transform -rotate-6"></div>
                    
                    {/* Accent elements */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="absolute bottom-12 left-6 w-4 h-4 bg-gray-400 rounded-full"></div>
                    
                    {/* Subtle line accents */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Modern Contact Info with clickable links */}
              <div className="space-y-6">
                <div className="group">
                  <a 
                    href="tel:+16043623493" 
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-100 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 hover:border-blue-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        +1 604 362 3493
                      </p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="group">
                  <a 
                    href="mailto:gbasra@maizedevelopments.ca" 
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-green-50 hover:to-emerald-100 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 hover:border-green-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">
                        gbasra@maizedevelopments.ca
                      </p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Modern Form */}
            <div className="space-y-6">
              <form 
                action="https://formsubmit.co/gbasra@maizedevelopments.ca" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit hidden fields for configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Maize Homes Developments" />
                <input type="hidden" name="_next" value="https://maizedevelopments.ca/thank-you" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Maize Homes Developments! We have received your message and will get back to you within 24-48 hours. If you have an urgent inquiry, please call us at +1 604 362 3493." />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white shadow-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white shadow-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white shadow-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex">
                    <select name="countryCode" className="px-3 py-3 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
                      <option value="+1">🇨🇦 +1</option>
                      <option value="+1">🇺🇸 +1</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white shadow-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white shadow-sm resize-vertical"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}