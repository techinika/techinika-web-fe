"use client";

import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // In a real application, you would send this data to your backend/API endpoint.
    // Example:
    // try {
    //   const response = await fetch('/api/contact', { // Your API endpoint
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //
    //   if (response.ok) {
    //     setSubmitMessage('Your message has been sent successfully! We will get back to you soon.');
    //     setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    //   } else {
    //     setSubmitMessage('Failed to send message. Please try again later.');
    //   }
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   setSubmitMessage('An error occurred. Please try again later.');
    // } finally {
    //   setIsSubmitting(false);
    // }

    // Simulating API call for demonstration
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitMessage(
      "Thank you for your message! We've received your submission and will get back to you shortly."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Nav />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-[#16327b] mb-4 drop-shadow-sm"
          >
            Get In <span className="text-[#c48820]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We would love to hear from you! Reach out to us for inquiries,
            partnerships, or just to say hello.
          </motion.p>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#e0f2fe"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,106.7C672,85,768,107,864,122.7C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Contact Methods Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#16327b] text-center mb-12"
          >
            How to Reach <span className="text-[#c48820]">Us Directly</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="text-[#c48820] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 13H8a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#16327b] mb-3">
                Email Us
              </h3>
              <p className="text-gray-700 mb-4">
                For general inquiries, collaborations, or support.
              </p>
              <Link
                href="mailto:info@techinika.com"
                className="text-[#c48820] hover:underline font-semibold"
              >
                info@techinika.com
              </Link>
            </motion.div>

            {/* Phone/WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="text-[#c48820] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#16327b] mb-3">
                Call or WhatsApp
              </h3>
              <p className="text-gray-700 mb-4">
                Quick questions, urgent matters, or direct communication.
              </p>
              <a
                href="tel:+250791377446"
                className="text-[#c48820] hover:underline font-semibold"
              >
                +250791377446
              </a>
            </motion.div>

            {/* Location/Visit Card (Optional - if you have a physical presence) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="text-[#c48820] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#16327b] mb-3">
                Visit Us
              </h3>
              <p className="text-gray-700 mb-4">
                By appointment for in-depth discussions and consultations.
              </p>
              <p className="text-[#c48820] font-semibold">Kigali, Rwanda</p>
              <Link
                href="https://www.google.com/maps/search/Techinika+Kigali" // Replace with your actual Google Maps link if available
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:underline mt-2"
              >
                View on Map
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      ---
      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-gradient-to-tr from-white to-blue-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.3, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#16327b] text-center mb-10"
          >
            Send Us a <span className="text-[#c48820]">Message</span>
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-lg font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] focus:border-transparent transition duration-200 ease-in-out text-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] focus:border-transparent transition duration-200 ease-in-out text-lg"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-lg font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] focus:border-transparent transition duration-200 ease-in-out text-lg"
                placeholder="Inquiry about Masterclass"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-gray-700 text-lg font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] focus:border-transparent transition duration-200 ease-in-out text-lg resize-y"
                placeholder="Tell us more about how we can help you..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full bg-[#c48820] text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-[#a9751c] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </motion.button>
            {submitMessage && (
              <p className="mt-6 text-center text-lg font-medium text-[#16327b]">
                {submitMessage}
              </p>
            )}
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
