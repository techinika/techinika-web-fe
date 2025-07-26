"use client";

import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Masterclass() {
  const today = new Date();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const determineStatus = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (end) end.setHours(23, 59, 59, 999);

    if (end && today > end) return "ENDED";
    if (today >= start && (!end || today <= end)) return "IN PROGRESS";
    if (today < start) return "UPCOMING";
    return "UNKNOWN";
  };

  const masterclasses = [
    {
      id: 1,
      title: "WordPress Masterclass",
      sessions: [
        { startDate: "2024-12-23", endDate: "2025-01-03" },
        { startDate: "2025-01-20", endDate: "2025-01-31" },
      ],
      description:
        "Learn to build and manage powerful, professional websites using WordPress, the world's most popular content management system. Ideal for aspiring web developers, bloggers, and small business owners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ), // Code icon
    },
    {
      id: 2,
      title: "SolidWorks Masterclass",
      sessions: [{ startDate: "2025-02-17", endDate: "2025-03-17" }],
      description:
        "Master 3D design and engineering with SolidWorks. This course covers everything from basic sketching to complex assembly modeling, essential for product design and mechanical engineering.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0v10l-8 4m8-4H8m8 0V7M12 4v16m-4-4l-8 4m8-4h.01"
          />
        </svg>
      ), // Cube icon
    },
    {
      id: 3,
      title: "Coding for Beginners",
      sessions: [],
      description:
        "Dive into the world of programming with foundational concepts. This masterclass is perfect for absolute beginners looking to understand the basics of coding and build their first simple applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "UI/UX for Beginners with Figma",
      sessions: [{ startDate: "2024-10-19", endDate: "2024-10-19" }],
      description:
        "Learn the fundamentals of User Interface (UI) and User Experience (UX) design. Use Figma to create stunning, user-friendly digital products and prototypes that truly resonate with users.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1H14.25M5 14h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2zm2-6h.01M7 16h.01"
          />
        </svg>
      ), // Desktop icon
    },
    {
      id: 5,
      title: "Digital Marketing Fundamentals",
      sessions: [],
      description:
        "Explore the core principles of digital marketing, including SEO, social media, content marketing, and email campaigns. Learn how to reach your target audience and grow your online presence.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8L11 2m9 9v9a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11.586a1 1 0 01.707.293L21 7.414a1 1 0 01.293.707V13z"
          />
        </svg>
      ), // Trending Up icon
    },
    {
      id: 6,
      title: "Design for Beginners with Canva",
      sessions: [],
      description:
        "Unlock your creativity and design stunning visuals effortlessly using Canva. This masterclass covers everything from basic graphic design principles to creating professional marketing materials, even with no prior experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ), // Photo icon
    },
    {
      id: 7,
      title: "AI Prompting for Beginners",
      sessions: [],
      description:
        "Master the art of communicating with AI. Learn how to craft effective prompts for generative AI tools like ChatGPT and Midjourney to get the best results for writing, design, coding, and more.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6M9 13h6"
          />
        </svg>
      ), // Chip icon (representing AI/tech)
    },
    {
      id: 8,
      title: "Freelancing for Beginners",
      sessions: [],
      description:
        "Launch your successful freelance career! This masterclass covers finding clients, setting rates, building a portfolio, marketing yourself, and managing your business as a independent professional.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#16327b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.565 23.565 0 0112 15c-1.38 0-2.7-.09-4-.255M9.75 10H15m-6.255 4H15M10 21v-4.747m0 0L9 14m4-4V6m0 0L15 4m0 0h-.249M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
          />
        </svg>
      ), // Briefcase/dollar icon (representing business/freelancing)
    },
  ];

  const masterclassesWithSessions = masterclasses.filter(
    (mc) => mc.sessions.length > 0
  );
  const masterclassesWithoutSessions = masterclasses.filter(
    (mc) => mc.sessions.length === 0
  );

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
            Masterclass <span className="text-[#c48820]">Program</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Equipping you with cutting-edge skills that unlock new opportunities
            and accelerate your journey to success.
          </motion.p>
        </div>
        {/* Subtle background waves/shapes for visual interest */}
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

      {/* Program Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#16327b] text-center mb-10"
          >
            Transforming Potential into{" "}
            <span className="text-[#c48820]">Proficiency</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto"
          >
            Our Masterclass Program is meticulously crafted to empower both{" "}
            <b>individuals</b> and <b>businesses</b> with practical,
            industry-relevant skills and innovative digital solutions. We aim to
            unlock new opportunities, boost income potential, and help transform
            your groundbreaking ideas into tangible realities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
          >
            Whether you are a professional seeking career enhancement, an
            aspiring entrepreneur, or a student ready for real-world experience,
            our comprehensive masterclasses and invaluable internship
            opportunities provide the essential tools, deep knowledge, and
            confidence required for true success. Join us and make your
            aspirations a reality!
          </motion.p>
        </div>
      </section>

      {/* Our Masterclass Offerings Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#16327b] text-center mb-12"
          >
            Explore Our <span className="text-[#c48820]">Masterclasses</span>
          </motion.h2>

          {masterclassesWithSessions.length > 0 && (
            <div className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-[#16327b] mb-8 text-center"
              >
                Upcoming & In Progress Sessions
              </motion.h3>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  masterclassesWithSessions.length === 1
                    ? "lg:max-w-md mx-auto"
                    : masterclassesWithSessions.length === 2
                    ? "lg:max-w-3xl mx-auto"
                    : ""
                }`}
              >
                {masterclassesWithSessions.map((mclass, idx) => (
                  <motion.div
                    key={mclass.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full"
                  >
                    <div className="flex items-center mb-4">
                      {mclass.icon && (
                        <div className="mr-3 text-[#c48820]">{mclass.icon}</div>
                      )}
                      <h4 className="text-2xl font-bold text-[#16327b]">
                        {mclass.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {mclass.description}
                    </p>
                    <div className="space-y-3">
                      {mclass.sessions.map((session, index) => {
                        const status = determineStatus(
                          session.startDate,
                          session.endDate
                        );
                        return (
                          <div
                            key={index}
                            className="bg-gray-100 p-3 rounded-lg flex items-center justify-between text-sm"
                          >
                            <div>
                              <p className="text-gray-700">
                                <strong>Start:</strong>{" "}
                                {formatDate(session.startDate)}
                              </p>
                              {session.endDate && (
                                <p className="text-gray-700">
                                  <strong>End:</strong>{" "}
                                  {formatDate(session.endDate)}
                                </p>
                              )}
                            </div>
                            <span
                              className={`px-3 py-1 font-semibold rounded-full ${
                                status === "UPCOMING"
                                  ? "bg-green-100 text-green-700"
                                  : status === "IN PROGRESS"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {masterclassesWithoutSessions.length > 0 && (
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-[#16327b] mt-16 mb-8 text-center"
              >
                Explore More: On-Demand & Future Masterclasses
              </motion.h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
                {`We're always expanding our offerings to meet the latest industry
                demands. These masterclasses are available for custom group
                training or are currently in development for future public
                sessions.`}
              </p>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  masterclassesWithoutSessions.length === 1
                    ? "lg:max-w-md mx-auto"
                    : masterclassesWithoutSessions.length === 2
                    ? "lg:max-w-3xl mx-auto"
                    : ""
                }`}
              >
                {masterclassesWithoutSessions.map((mclass, idx) => (
                  <motion.div
                    key={mclass.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full"
                  >
                    <div className="flex items-center mb-4">
                      {mclass.icon && (
                        <div className="mr-3 text-[#c48820]">{mclass.icon}</div>
                      )}
                      <h4 className="text-2xl font-bold text-[#16327b]">
                        {mclass.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {mclass.description}
                    </p>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-center">
                      Coming Soon / On-Demand
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="bg-gradient-to-tr from-white to-blue-50 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-[#16327b] text-center mb-10"
          >
            Our <span className="text-[#c48820]">Internship Program</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto"
          >
            At Techinika, we are deeply committed to nurturing the next
            generation of talent. Our comprehensive <b>Internship Program</b>
            offers invaluable hands-on experience to both{" "}
            <b>university and high school students</b>, bridging the crucial gap
            between academic knowledge and real-world industry application.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto"
          >
            Interns collaborate with experienced professionals on live projects,
            gaining practical skills in various tech domains, contributing to
            live projects, and building a strong foundation for their future
            careers. We believe in empowering young minds to become true
            innovators and problem-solvers from an early stage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#c48820] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#a9751c] transition-colors duration-300"
            >
              Apply for Internship
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-white mb-6"
          >
            Ready to Accelerate Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed"
          >
            Whether you are looking for professional training or an impactful
            internship, our team is here to guide you. Reach out today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Link
              href={"mailto:info@techinika.com"}
              className="inline-flex items-center bg-white text-[#16327b] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-5 13H8a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
              Email Us
            </Link>
            <Link
              href="tel:+250780630465"
              className="inline-flex items-center bg-primary text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:text-secondary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
              </svg>
              Call or WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
