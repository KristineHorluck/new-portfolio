import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, AlertCircle, Loader2, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.message.trim()) return 'Message is required';
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // You would replace this URL with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3c6e71] mb-4">
            Let's Get in Touch
          </h1>
          <p className="text-xl text-[#284b63] max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Drop me a message, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: 'Email',
              content: 'kristine.horluck@outlook.com',
              link: 'mailto:kristine.horluck@outlook.com'
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: 'Phone Number',
              content: '+45 22 92 23 35'
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Location',
              content: 'Aalborg, Denmark'
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: 'Response Time',
              content: 'Within 24-48 hours'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#3c6e71]/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#3c6e71]">{item.icon}</div>
                <h3 className="font-semibold text-lg text-[#284b63]">{item.title}</h3>
              </div>
              {item.link ? (
                <a href={item.link} className="text-[#284b63] hover:text-[#3c6e71] transition-colors">
                  {item.content}
                </a>
              ) : (
                <p className="text-[#284b63]">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-[#3c6e71]/20">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-[#3c6e71] mb-4">
                  <Send className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold text-[#284b63] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-[#284b63]/80">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#3c6e71] hover:text-[#284b63] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="flex items-center gap-2 p-4 text-red-600 bg-red-50 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#284b63] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#3c6e71]/20 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]/50"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#284b63] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-[#3c6e71]/20 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]/50"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#284b63] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#3c6e71]/20 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]/50"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#284b63] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg border border-[#3c6e71]/20 focus:outline-none focus:ring-2 focus:ring-[#3c6e71]/50"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3c6e71] text-white py-3 px-6 rounded-lg hover:bg-[#284b63] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;