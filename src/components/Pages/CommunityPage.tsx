// components/CommunityPage.jsx (or just Community.jsx if you prefer)
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../HeadFoot/Footer";
import Nav from "../HeadFoot/Nav";

const flagshipProjects = [
  {
    id: 1,
    title: "Digital Discourse",
    tagline: "Monthly Hands-On Tech Sessions",
    description:
      "A monthly event where community members learn and engage in hands-on sessions delivered by industry professionals. We help you stay up-to-date with the latest technology trends and acquire practical skills.",
    icon: "💻",
    bgColor: "bg-blue-50",
    buttons: [
      {
        label: "Attend",
        href: "https://nas.io/tech-rw",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "Propose a Session",
        href: "https://forms.gle/DvheU9tXoVYjGkJ17",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: 2,
    title: "Pitch & Feedback Session",
    tagline: "Innovate, Present, Get Feedback",
    description:
      "A monthly platform for entrepreneurs and innovators within the community to pitch or launch their projects, receiving live, constructive feedback from peers and experts.",
    icon: "🎤",
    bgColor: "bg-white",
    buttons: [
      {
        label: "Apply to Pitch",
        href: "https://forms.gle/gZRNY4j2mXcfTNcJ6",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "Attend",
        href: "https://nas.io/tech-rw",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    id: 3,
    title: "Build It Hackathon",
    tagline: "Annual Innovation & Startup Launchpad",
    description:
      "An annual, intensive 4-day event where participants learn to build projects from scratch, culminating in judging, awards, and support to launch top projects into real startups.",
    icon: "🚀",
    bgColor: "bg-blue-50",
    buttons: [
      {
        label: "Participate",
        href: "https://forms.gle/rCUkJp9XypmyoUdY6",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "Be a Sponsor",
        href: "https://forms.gle/UhyzH6AkEjC45LfX9",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
];

// Data for benefits
const benefits = [
  {
    icon: "🧠", // Brain emoji for learning
    text: "Learn the latest in technology trends and practical skills through expert-led sessions.",
  },
  {
    icon: "🤝", // Handshake emoji for networking
    text: "Network with like-minded individuals, industry leaders, and potential collaborators.",
  },
  {
    icon: "📈", // Chart emoji for growth
    text: "Gain access to mentorship programs, community resources, and opportunities for project development.",
  },
  {
    icon: "🌟", // Star emoji for recognition
    text: "Showcase your innovations and receive valuable feedback to refine your ideas.",
  },
  {
    icon: "🏅", // Medal emoji for achievement
    text: "Participate in hackathons and competitions, with chances to win awards and startup support.",
  },
];

export default function CommunityPage() {
  // Renamed to CommunityPage for consistency
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 2023; // Calculate years active

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-24 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-[#16327b] mb-4"
          >
            Rwanda <span className="text-[#c48820]">Technology Community</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            Empowering Rwandans through technology education, hands-on learning,
            and vibrant community engagement since 2023. Join us to innovate,
            learn, and grow together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="#join-donate"
              className="px-8 py-4 rounded-full text-white bg-[#c48820] hover:bg-[#c48820]/90 transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              Join Our Community
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About the Community Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            About the <span className="text-[#c48820]">Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed text-center"
          >
            {`Founded in 2023, the Rwanda Technology Community is dedicated to
            fostering a culture of continuous learning and innovation. Our
            mission is to keep Rwandans at the forefront of technological
            advancements by providing accessible education, practical workshops,
            and collaborative platforms. For the past ${yearsActive}{" "}
            ${yearsActive === 1 ? "year" : "years"}, we have been empowering
            individuals to not only understand technology but also to actively
            build and apply their skills in meaningful ways, contributing to
            Rwanda's digital transformation.`}
          </motion.p>
        </div>
      </section>

      {/* Our Flagship Projects Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Our <span className="text-[#c48820]">Flagship Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flagshipProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className={`${project.bgColor} rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 h-full`}
              >
                <div className="text-6xl mb-4 text-[#16327b]">
                  {project.icon}
                </div>{" "}
                {/* Icon/Emoji */}
                <h3 className="text-2xl font-semibold text-[#16327b] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#c48820] text-sm font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-gray-700 leading-relaxed text-base flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-between items-center py-6">
                  {project?.buttons?.map((button, idx) => (
                    <Link
                      key={idx + 1}
                      target={button?.target}
                      href={button?.href}
                      className="inline-block bg-primary text-white font-bold px-6 rounded-full text-xs py-2 shadow-md hover:bg-secondary transition-colors duration-300"
                    >
                      {button?.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Joining Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Benefits of{" "}
            <span className="text-[#c48820]">Joining Our Community</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="bg-blue-50 p-8 rounded-xl shadow-md flex items-start gap-4 border border-gray-200"
              >
                <div className="flex-shrink-0 text-3xl text-[#16327b]">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Join or Donate */}
      <section
        id="join-donate"
        className="bg-secondary py-16 md:py-24 text-white text-center"
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Ready to Make an <span className="text-primary">Impact</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10 opacity-90"
          >
            Join our vibrant community of tech enthusiasts and innovators, or
            support our mission to empower Rwandans through technology. Every
            contribution helps us expand our reach and impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="https://nas.io/tech-rw"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-[#16327b] bg-white hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              JOIN THE COMMUNITY
            </Link>
            <Link
              href="/community/donate" // Link to your donation page
              className="px-8 py-4 rounded-full text-white border-2 border-white hover:bg-white hover:text-[#16327b] transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              DONATE TO THE COMMUNITY
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
