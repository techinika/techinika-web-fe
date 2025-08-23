"use client";

import Nav from "@/components/HeadFoot/Nav";
import Footer from "@/components/HeadFoot/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGlobeAsia, FaRocket, FaBook } from "react-icons/fa";

export default function DonatePage() {
  const [donationData, setDonationData] = useState({
    amount: 0,
    name: "",
    email: "",
    phone: "",
    isAnonymous: false,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setDonationData({
      ...donationData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleMobileMoneyPayment = async () => {
    setMessage("Processing Mobile Money payment...");

    // Simple validation for phone number format
    if (!/^(078|079|073|072)\d{7}$/.test(donationData.phone)) {
      setMessage(
        "Please enter a valid Rwandan mobile number (e.g., 078xxxxxxx, 072xxxxxxxx, 073xxxxxxx or 079xxxxxxx)."
      );
      return;
    }

    // A simple orderId can be created on the client side for now.
    // In a real application, you might generate this on your server.
    const orderId = `donation-${Date.now()}`;

    try {
      // Step 1: Call the backend endpoint to initiate payment with Paypack
      const paypackResponse = await fetch("/api/payment/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: orderId,
          amount: donationData.amount,
          phoneNumber: donationData.phone,
        }),
      });

      const paypackResult = await paypackResponse.json();

      if (paypackResponse.ok) {
        // Step 2: If payment initiation is successful, call the new API to send an email notification
        const emailResponse = await fetch("/api/contact/donation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donationData),
        });

        const emailResult = await emailResponse.json();

        if (emailResponse.ok) {
          setMessage(
            "Payment initiated successfully and a notification email has been sent. Please check your phone to confirm the transaction."
          );
        } else {
          // Display a success message for payment but note the email failure
          setMessage(
            `Payment initiated, but there was an error sending the notification email: ${
              emailResult.message || "An unknown error occurred."
            }`
          );
        }
      } else {
        // Handle errors from the Paypack backend
        setMessage(
          `Payment failed: ${
            paypackResult.error || "An unknown error occurred."
          }`
        );
      }
    } catch (error) {
      console.error("API call failed:", error);
      setMessage(
        "An error occurred while trying to process the payment. Please try again."
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(""); // Clear any previous messages
    setShowConfirmation(true);
    await handleMobileMoneyPayment();
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-sm w-full text-center">
            <h4 className="text-2xl font-bold text-[#16327b] mb-4">
              Payment Status
            </h4>
            <p className="text-gray-700 mb-6">
              {message || "Processing your request..."}
            </p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full bg-[#16327b] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#12285f] transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-[#16327b] mb-4 drop-shadow-sm"
          >
            Support Our <span className="text-[#c48820]">Community</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Your donation fuels our mission to empower the Rwandan tech
            community and create a lasting impact.
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

      {/* Donation Purpose Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#16327b] mb-12"
          >
            Your Donation Makes a{" "}
            <span className="text-[#c48820]">Difference</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            Your support is vital to our mission. It helps us expand our reach
            and ensure our community stays vibrant and impactful for years to
            come.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {/* Card 1: Expanding Reach */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-[#c48820] mb-4">
                <FaGlobeAsia className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#16327b] mb-2">
                Reaching All Rwandans
              </h3>
              <p className="text-gray-700">
                Your contribution allows us to expand our free training and
                initiatives to different parts of the country, ensuring every
                Rwandan has access to a tech education.
              </p>
            </motion.div>
            {/* Card 2: Competition Support */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-[#c48820] mb-4">
                <FaRocket className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#16327b] mb-2">
                Supporting Innovators
              </h3>
              <p className="text-gray-700">
                We support our members by funding competitions, hackathons, and
                other initiatives that help them build, innovate, and bring
                their ideas to life.
              </p>
            </motion.div>
            {/* Card 3: Long-term Education */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-[#c48820] mb-4">
                <FaBook className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#16327b] mb-2">
                Sustaining Education
              </h3>
              <p className="text-gray-700">
                Your support ensures the continuity of our educational programs
                and initiatives, enabling us to provide a consistent platform
                for learning and growth.
              </p>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg font-bold text-[#16327b]"
          >
            To ensure accountability, you will receive a monthly report on our
            activities and how your donation was used.
          </motion.p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-extrabold text-[#16327b] text-center mb-8"
          >
            Make a Donation
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Donation Amount (RWF)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={donationData.amount}
                  onChange={handleInputChange}
                  min="1"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] transition-all duration-300"
                />
              </div>

              {/* Mobile Money Payment Fields */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Mobile Money Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={donationData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., 078..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] transition-all duration-300"
                />
              </div>

              {/* Personal Details */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={donationData.name}
                    onChange={handleInputChange}
                    disabled={donationData.isAnonymous}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] transition-all duration-300 disabled:bg-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={donationData.email}
                    onChange={handleInputChange}
                    disabled={donationData.isAnonymous}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16327b] transition-all duration-300 disabled:bg-gray-200"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isAnonymous"
                  name="isAnonymous"
                  checked={donationData.isAnonymous}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-[#16327b] border-gray-300 rounded focus:ring-[#16327b]"
                />
                <label
                  htmlFor="isAnonymous"
                  className="ml-2 text-gray-700 font-semibold"
                >
                  Donate Anonymously
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c48820] text-white font-bold py-4 px-8 rounded-full text-xl shadow-md hover:bg-[#a9751c] transition-colors duration-300"
              >
                Support (Pay)
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Other Support Section */}
      <section className="py-16 md:py-20 bg-gradient-to-tr from-white to-blue-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100"
          >
            <h2 className="text-4xl font-extrabold text-[#16327b] mb-4">
              Other Ways to <span className="text-[#c48820]">Support</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              If you would like to offer support in other ways, such as a venue,
              in-kind support, or any other valuable resources, please get in
              touch with us.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/contact?subject=In-kind%20Support%20Proposal"
                className="inline-block bg-[#16327b] text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-[#12285f] transition-colors duration-300"
              >
                Contact Us to Offer Support
              </Link>
              <Link
                href="https://buymeacoffee.com/techinika"
                target="_blank"
                className="inline-block bg-[#16327b] text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-[#12285f] transition-colors duration-300"
              >
                Use Buy me a Coffee page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
