import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    // TODO: Paste your Google Apps Script Web App URL here
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGUMDJzfLIf5nEXqAlnabC1t-4Yt2n1khQiThZd47FzqLb9LbDGBf7r3uAdLLRYX4v/exec';

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      // Using no-cors handles the cross-origin constraint from Google Scripts
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj,
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 relative bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Let's Work <span className="text-primary">Together</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
            I'm currently available for freelance work and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 bg-gray-50 dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
          {/* Subtle background glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Contact Info & Socials */}
          <div className="md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>sakshiyadav8887@gmail.com</p>
                <p>Based in India</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">Connect with me</p>
              <div className="flex gap-4">
                <a href="https://github.com/sakshiiyad" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/feed/" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://x.com/sakshiiyad" className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="md:w-2/3 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-medium text-gray-700 dark:text-gray-400">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium text-gray-700 dark:text-gray-400">Your Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-medium text-lg transition-all hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
