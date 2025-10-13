"use client";

import Nav from "@/components/HeadFoot/Nav";
import Footer from "@/components/HeadFoot/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

// You can replace these with your actual links
const MEDIA_LINKS = {
  blog: "https://techinika.com",
  youtubeLearning: "https://www.youtube.com/@Techinika",
  youtubeBusiness: "https://www.youtube.com/@TechinikaBusiness",
};

export default function MediaPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            Our Media <span className="text-[#c48820]">Initiatives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We empower the public with knowledge through our digital platforms,
            providing education, insights, and updates in technology and
            business.
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

      {/* Media Platforms Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Techinika Blog Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="text-[#c48820] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.468 9.248 3.75 7.5 3.75S4.168 5.468 3 6.253v13C4.168 18.532 5.752 16.814 7.5 16.814s3.332 1.718 4.5 2.503m0-13C13.168 5.468 14.752 3.75 16.5 3.75S19.832 5.468 21 6.253v13C19.832 18.532 18.248 16.814 16.5 16.814s-3.332 1.718-4.5 2.503"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-[#16327b] mb-3">
                Techinika Blog
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Our official blog is a space for us to share insights on how to
                build, how things work, and provide the latest updates in the
                tech world.
              </p>
              <Link
                href={MEDIA_LINKS.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#16327b] text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-[#12285f] transition-colors duration-300"
              >
                Read the Blog
              </Link>
            </motion.div>

            {/* Techinika Learning Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="text-[#c48820] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-[#16327b] mb-3">
                Techinika Learning
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">
                A YouTube channel dedicated to technology education. Our videos
                are in <b>Kinyarwanda</b> to make learning accessible and
                relevant to a wider local audience.
              </p>
              <Link
                href={MEDIA_LINKS.youtubeLearning}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#16327b] text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-[#12285f] transition-colors duration-300"
              >
                Watch on YouTube
              </Link>
            </motion.div>

            {/* Techinika Business Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="text-[#c48820] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.518 23.518 0 0112 15c-3.18 0-6.22-.62-9-1.745M16 18.5a2 2 0 11-4 0 2 2 0 014 0zM12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-[#16327b] mb-3">
                Techinika Business
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">
                This channel focuses on the intersection of technology and
                business. Our content is published in <b>English</b> to connect
                with a global audience.
              </p>
              <Link
                href={MEDIA_LINKS.youtubeBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#16327b] text-white font-bold py-3 px-6 rounded-full text-lg shadow-md hover:bg-[#12285f] transition-colors duration-300"
              >
                Watch on YouTube
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call for Contributions Section */}
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
              Contribute to Our <span className="text-[#c48820]">Mission</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Are you passionate about technology and education? We are always
              looking for new voices to contribute to our platforms. If you have
              a blog post idea or a video concept you would like to propose, we
              would love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#c48820] text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-[#a9751c] transition-colors duration-300"
              >
                Get in Touch with Your Ideas
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029Vb73U7eEKyZ8IRA5Gb1W"
                target="_blank"
                className="inline-block bg-[#c48820] text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-[#a9751c] transition-colors duration-300"
              >
                Follow our WhatsApp Channel
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
