// pages/contact.js
import { useState } from 'react';
import { FaEnvelope, FaUser, FaPenFancy } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending contact request (e.g., call API)
    setSubmitted(true);
    console.log('Contact form submitted with', { name, email, message });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500 relative py-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
        </div>

        <div className="relative z-10 w-full max-w-3xl bg-white bg-opacity-80 rounded-xl shadow-xl p-10 animate-fadeInUp">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6 animate-slideInDown">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 mb-8">
            We’d love to hear from you. Please fill out the form below and we will get in touch shortly.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative flex items-center bg-white rounded-lg border border-gray-300 shadow-sm p-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-300">
                <FaUser className="text-gray-400 text-lg mr-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-400 text-gray-700"
                />
              </div>

              <div className="relative flex items-center bg-white rounded-lg border border-gray-300 shadow-sm p-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-300">
                <FaEnvelope className="text-gray-400 text-lg mr-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-400 text-gray-700"
                />
              </div>

              <div className="relative flex items-start bg-white rounded-lg border border-gray-300 shadow-sm p-3 focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-300">
                <FaPenFancy className="text-gray-400 text-lg mr-3 mt-1" />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full bg-transparent border-none focus:ring-0 placeholder-gray-400 text-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-600 transition-transform transform hover:scale-105 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center animate-fadeIn">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Message Sent!</h2>
              <p className="text-gray-600">Thank you for reaching out, {name}. We'll get back to you at {email} as soon as possible.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-3 bg-purple-500 text-white font-bold rounded-full shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105 focus:outline-none"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
      </div>
      <Footer />
    </div>
  );
}
