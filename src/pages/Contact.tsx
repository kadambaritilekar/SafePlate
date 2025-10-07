import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Shake animation for errors
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@safeplate.org',
      link: 'mailto:info@safeplate.org',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Food Safety Lane, Health City, HC 12345',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-lg text-[#243119]/80 max-w-3xl mx-auto">
            Have questions about food safety? Need help identifying adulterants? We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 border-2 border-[#96be8c]"
          >
            <h2 className="mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-[#243119]">
                  Name *
                </label>
                <motion.input
                  animate={errors.name ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500'
                      : formData.name
                      ? 'border-[#629460]'
                      : 'border-[#96be8c] focus:border-[#629460]'
                  }`}
                  placeholder="Your name"
                />
                {formData.name && !errors.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-3 top-11"
                  >
                    <CheckCircle className="w-5 h-5 text-[#629460]" />
                  </motion.div>
                )}
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-[#243119]">
                  Email *
                </label>
                <motion.input
                  animate={errors.email ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500'
                      : formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                      ? 'border-[#629460]'
                      : 'border-[#96be8c] focus:border-[#629460]'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block mb-2 text-[#243119]">
                  Subject *
                </label>
                <motion.input
                  animate={errors.subject ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.subject
                      ? 'border-red-500'
                      : formData.subject
                      ? 'border-[#629460]'
                      : 'border-[#96be8c] focus:border-[#629460]'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-[#243119]">
                  Message *
                </label>
                <motion.textarea
                  animate={errors.message ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500'
                      : formData.message
                      ? 'border-[#629460]'
                      : 'border-[#96be8c] focus:border-[#629460]'
                  }`}
                  placeholder="Tell us more..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#629460] text-white hover:bg-[#aceda1] hover:text-[#243119]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(98, 148, 96, 0.2)' }}
                    className="bg-white rounded-xl p-6 border-2 border-[#96be8c] flex items-start gap-4 hover:border-[#629460] transition-all block"
                  >
                    <div className="w-12 h-12 bg-[#629460] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1">{info.title}</h3>
                      <p className="text-[#243119]/70">{info.content}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl overflow-hidden border-2 border-[#96be8c] h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#c9f2c7] to-[#96be8c] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#629460] mx-auto mb-2" />
                  <p className="text-[#243119]/70">Map Location</p>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-[#629460] to-[#96be8c] rounded-xl p-6 text-white"
            >
              <h3 className="mb-3 text-white">Office Hours</h3>
              <div className="space-y-2 text-white/90">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/80">
                  We typically respond to inquiries within 24-48 hours during business days.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
