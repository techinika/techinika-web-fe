// components/Story.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image for optimized images
import { motion } from "framer-motion"; // Import motion for animations
import { FaNewspaper } from "react-icons/fa"; // Import a media icon from react-icons

import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";

// Assuming Quote component is defined elsewhere. If not, this is a simple inline definition.
const Quote = ({ quote, speaker }: { quote: string; speaker: string }) => (
  <div className="bg-gray-50 py-16 md:py-20 text-center px-6 md:px-12">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-2xl md:text-3xl font-light italic text-gray-800 max-w-4xl mx-auto leading-relaxed"
    >
      “{quote}”
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="mt-6 text-lg md:text-xl font-semibold text-[#c48820]"
    >
      - {speaker}
    </motion.p>
  </div>
);

// Define the TeamMember interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  picture: string;
  linkedin: string;
}

interface Award {
  id: number;
  title: string;
  description: string;
  link: string;
}

export default function Story() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Achille Songa",
      position: "Founder & MD",
      picture: "/achille songa.png",
      linkedin: "https://linkedin.com/in/achillesonga",
    },
  ];

  // Updated mediaMentions data to remove specific icon paths
  const mediaMentions = [
    {
      id: 1,
      title: "Hanga Weekly Roundup EP 25: Features Techinika",
      source: "Hanga Weekly",
      link: "https://www.linkedin.com/pulse/hanga-weekly-roundup-ep-25-hanga-pitchfest-3jxke/",
    },
    {
      id: 2,
      title:
        "Rwanda: Cishahayo Songa Achille Democratizes Digital Skills Through Techinika",
      source: "WeAreTech.Africa",
      link: "https://www.wearetech.africa/en/fils-uk/tech-stars/rwanda-cishahayo-songa-achille-democrtizes-digital-skills-through-techinika",
    },
    {
      id: 3,
      title:
        "EDTech Partners Show Need for Accelerated Blended Learning Models (Techinika Featured)",
      source: "Kigali Today - KT Press",
      link: "https://www.ktpress.rw/2023/06/edtech-partners-show-need-for-accelerated-blended-learning-models/",
    },
    {
      id: 4,
      title:
        "From being an MTN agent to becoming a DG of an EdTech company #Technika | Songa Achille's journey",
      source: "KC2 - RBA",
      link: "https://youtu.be/9Kpaohzu_-I", // Verify this URL
    },
    {
      id: 5,
      title:
        "Le Rwandais Cishahayo Songa Achille fournit aux particuliers et aux entreprises des compétences numériques modernes",
      source: "225Tech.info",
      link: "https://www.225tech.info/le-rwandais-cishahayo-songa-achille-fournit-aux-particuliers-et-aux-entreprises-des-competences-numeriques-modernes/",
    },
  ];

  const awards: Award[] = [
    {
      id: 1,
      title: "Best Accessible eLearning Solutions Provider 2024 - Rwanda",
      description: "Awarded by MEA Markets Digital",
      link: "https://meamarkets.digital/winners/techinika-limited/",
    },
    {
      id: 2,
      title: "Nominated in Top 45, Hanga Pitch Fest 2023",
      description:
        "Recognized among top startups at Rwanda's premier tech event.",
      link: "https://x.com/hangapitchfest/status/1716814304639352987", // General news link about the 2023 finale
    },
  ];

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
            Our <span className="text-[#c48820]">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            Discover the journey of Techinika: empowering Africa through
            technology, from our humble beginnings to becoming a leader in
            digital age.
          </motion.p>
        </div>
      </section>

      {/* Quote Section */}
      <Quote
        quote={`...we are constantly running towards building people who use digital tools, and build digital tools to solve problems.`}
        speaker={"Cishahayo Songa Achille, The Founder"}
      />

      {/* About Techinika Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Who We <span className="text-[#c48820]">Are</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
          >
            <p className="mb-4">
              Hello there! We are <b>Techinika</b>, a name that perfectly blends
              <b>Technology</b> with <b>Gutekinika</b>, a powerful Kinyarwanda
              verb meaning <b>finding ingenious solutions</b> even when
              challenges seem insurmountable. This unique essence is at the very
              heart of what we do: we innovate and solve problems through the
              strategic application of technology.
            </p>
            <p className="mb-4">
              Our <b>IKIGAI</b> (our reason for being) is deeply rooted in
              <b>empowering Africans to acquire and master technology skills</b>
              . But our mission does not stop there. We also work hand-in-hand
              with <b>businesses</b>, providing them with the digital tools and
              strategies they need to{" "}
              <b>grow, reach more customers, and operate smarter</b>.{" "}
            </p>

            <p>
              Whether it is helping educational businesses digitize their
              offerings or building custom solutions for companies, or recommend
              working solutions, we are dedicated to helping ventures thrive in
              the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Our <span className="text-[#c48820]">Journey</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto relative pl-8 md:pl-16">
            {/* Timeline Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-[#16327b] opacity-20"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {/* Event: The Beginning (2020) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>{" "}
                {/* Timeline dot */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">2020:</span> The Genesis of
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our quest began with the launch of our original product, a{" "}
                    <Link target="_blank" href="https://techinika.com">
                      <b>blog</b>
                    </Link>{" "}
                    aimed at empowering Rwandans by teaching them{" "}
                    <b>how to do things themselves</b> and{" "}
                    <b>how things work,</b>
                    all in Kinyarwanda. This laid the foundation for our future
                    endeavors.
                  </p>
                </div>
              </motion.div>

              {/* Event: Company Registration & Professional Training (March 2023) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>{" "}
                {/* Timeline dot */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">March 2023:</span> Company
                    Registration & Professional Training
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Techinika was officially registered as a company. This
                    milestone allowed us to begin offering specialized{" "}
                    <b>training services to professionals</b>, while continuing
                    to operate our foundational blog.
                  </p>
                </div>
              </motion.div>

              {/* Event: Rwanda Technology Community Launch (October 2023) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">October 2023:</span> Launch
                    of Rwanda Technology Community
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We launched the{" "}
                    <Link href="/community">
                      <b>Rwanda Technology Community</b>
                    </Link>
                    , our non-profit initiative, dedicated to fostering a
                    vibrant ecosystem where Rwandan tech professionals can stay
                    current, collaborate on projects, and find mutual support.
                  </p>
                </div>
              </motion.div>

              {/* Event: Masterclasses & Internships (2024) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">2024:</span> Masterclasses
                    & Internship Program
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We introduced monthly{" "}
                    <Link href="/masterclass" target="_blank">
                      <b>Masterclasses</b>
                    </Link>{" "}
                    to equip professionals with essential skills for seamless
                    integration into the job market. As part of this program, we
                    also provided valuable internship opportunities for both
                    university and high school students.
                  </p>
                </div>
              </motion.div>

              {/* Event: Consultation Services (January 2025) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">January 2025:</span> Launch
                    of Consultation Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Starting the year strong, we launched our{" "}
                    <Link href="/consultancy">
                      <b>consultation services</b>
                    </Link>
                    , assisting businesses in identifying their core problems
                    and providing custom-tailored solutions or recommending
                    effective existing tools.
                  </p>
                </div>
              </motion.div>

              {/* Event: SecureDot Launch (July 2025) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">July 2025:</span>{" "}
                    Introduction of SecureDot
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Driven by our own experience, we launched{" "}
                    <Link
                      href="https://securedot.tech"
                      className="text-[#c48820] hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <b>SecureDot</b>
                    </Link>
                    , a platform designed to help companies stay protected,
                    perform well online, and boost their visibility through free
                    SSL certificates and future web tools.
                  </p>
                </div>
              </motion.div>

              {/* Event: Apprena Official Launch (October 2025) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="relative pl-8 md:pl-12 flex items-start"
              >
                <div className="absolute left-[-6px] md:left-[26px] top-2 w-4 h-4 rounded-full bg-[#c48820] border-2 border-white shadow-md"></div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#16327b] mb-1">
                    <span className="text-[#c48820]">October 2025:</span>{" "}
                    Official Launch of Apprena
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Looking ahead, we are officially launching{" "}
                    <Link
                      href="https://apprena.app"
                      className="text-[#c48820] hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <b>Apprena</b>
                    </Link>
                    , our advanced Learning & Training Management System. While
                    initially built for our Masterclasses and consultation
                    business, Apprena has the potential to be utilized by other
                    training companies, course sellers, and businesses for
                    onboarding and training new hires.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Recognized for Our <span className="text-[#c48820]">Impact</span>
          </motion.h2>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-[#c48820] text-white p-8 md:p-10 rounded-xl shadow-lg flex flex-col items-center justify-center text-center"
              >
                <div className="text-6xl md:text-7xl flex-shrink-0 mb-4">
                  🏆
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {award.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-medium opacity-90">
                    {award.description}
                  </p>
                  <Link
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-3 bg-white text-[#c48820] rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Media Mentions Carousel/Grid */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-[#16327b] text-center mb-8"
          >
            Techinika in the News:
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaMentions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="bg-blue-50 rounded-xl shadow-md p-6 flex items-start space-x-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 text-[#16327b]">
                  {/* Using the React Icon here */}
                  <FaNewspaper size={40} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#16327b] mb-1">
                    {item.source}
                  </h4>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#c48820] text-base leading-snug block transition-colors duration-200 underline-offset-2 hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Meet Our <span className="text-[#c48820]">Dedicated Team</span>
          </motion.h2>

          {team.length > 0 ? (
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  // Added max-w-sm to constrain card width on larger screens for better alignment
                  className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 flex flex-col items-center text-center p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-sm"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#c48820] shadow-md">
                    {member.picture ? (
                      <Image
                        src={member.picture}
                        alt={`${member.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#16327b] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.position}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#16327b] hover:text-[#c48820] transition-colors inline-flex items-center gap-2 text-sm font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.23 0H1.77C.792 0 0 .775 0 1.723v20.554C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.723V1.723C24 .775 23.208 0 22.23 0zM7.128 20.451H3.556V9.035h3.572v11.416zM5.34 7.51A2.072 2.072 0 013.275 5.45 2.067 2.067 0 015.34 3.39a2.072 2.072 0 012.066 2.06c0 1.135-.926 2.06-2.066 2.06zm15.11 12.94h-3.572v-5.847c0-1.394-.028-3.186-1.942-3.186-1.946 0-2.244 1.518-2.244 3.084v5.95h-3.572V9.035h3.429v1.558h.05c.478-.902 1.642-1.852 3.378-1.852 3.611 0 4.281 2.378 4.281 5.465v6.245z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 text-center text-lg mt-8"
            >
              No team members to display yet!
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: team.length * 0.1 + 0.2 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed text-center mt-12"
          >
            We work with the best to ensure we deliver the best experience to
            people who trust us. Together, we are shaping the future of
            technology in Rwanda and beyond.
          </motion.p>
        </div>
      </section>

      {/* Call to Action / Our Ask Section */}
      <section className="bg-secondary py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            How You Can <span className="text-primary">Join Our Story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-10 opacity-90"
          >
            {`You've read our story, and now we invite you to be a part of it.
            Whether you're an aspiring tech professional, a potential investor,
            or a community advocate, there's a place for you.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="https://forms.gle/t7o7tdeWi652oPTp7"
              target="_blank"
              className="px-8 py-4 rounded-full text-[#16327b] bg-white hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              START YOUR CAREER
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-white border-2 border-white hover:bg-white hover:text-[#16327b] transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              INVEST IN OUR MISSION
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg opacity-80"
          >
            You can reach out to us on our email{" "}
            <b>
              <Link
                href={"mailto:info@techinika.com"}
                className="underline hover:text-[#c48820] transition-colors"
              >
                info@techinika.com
              </Link>
            </b>{" "}
            or use our{" "}
            <Link
              href={"/contact"}
              className="underline hover:text-primary transition-colors"
            >
              contact page
            </Link>
            .
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
