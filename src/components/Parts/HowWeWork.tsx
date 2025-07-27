"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHandsHelping,
  FaRocket,
  FaLightbulb,
  FaTools,
} from "react-icons/fa"; // Added FaTools icon

const expertiseAreas = [
  {
    icon: <FaLightbulb className="text-4xl text-[#c48820]" />,
    title: "Strategic Consulting",
    description:
      "We help you define clear technology roadmaps, assess existing systems, and identify opportunities for innovation tailored to your business goals.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-[#c48820]" />,
    title: "Custom Software Development",
    description:
      "From concept to deployment, we build scalable, robust, and user-friendly applications that solve complex challenges and drive efficiency.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-[#c48820]" />,
    title: "Cloud & Infrastructure Solutions",
    description:
      "Leverage the power of the cloud with our expertise in migration, optimization, and management of secure and high-performing infrastructure.",
  },
  {
    icon: <FaRocket className="text-4xl text-[#c48820]" />,
    title: "AI & Automation Integration",
    description:
      "Automate repetitive tasks and gain deeper insights with our AI-powered solutions, enhancing productivity and decision-making.",
  },
  {
    icon: <FaTools className="text-4xl text-[#c48820]" />,
    title: "Technical Support & Maintenance",
    description:
      "Ensure your systems run flawlessly with our comprehensive support, proactive maintenance, and timely updates.",
  },
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    description:
      "We dive deep to understand your vision, challenges, and objectives, laying a strong foundation for a tailored solution.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our experts craft intuitive user experiences and detailed prototypes, ensuring the solution aligns perfectly with your requirements.",
  },
  {
    title: "Development & Testing",
    description:
      "Using agile methodologies, we build and rigorously test your solution, guaranteeing high quality, performance, and security.",
  },
  {
    title: "Deployment & Training",
    description:
      "We ensure a smooth, seamless launch and provide comprehensive training to empower your team for efficient use.",
  },
  {
    title: "Continuous Support & Evolution",
    description:
      "Our commitment extends beyond launch with ongoing support, maintenance, and strategic enhancements to keep you ahead.",
  },
];

export const Expertise = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      {" "}
      {/* Main section background remains white */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-16"
        >
          Our <span className="text-[#c48820]">Expertise</span> & How We Work
        </motion.h2>

        {/* --- */}

        {/* Core Competencies */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-[#16327b] text-center mb-10"
          >
            Core Competencies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {expertiseAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#16327b] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- */}

        {/* Our Process - With new background */}
        <div className="bg-blue-50 py-16 rounded-xl shadow-inner border border-blue-100">
          {" "}
          {/* Subtle blue background, inner shadow, border, and rounded corners */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-[#16327b] text-center mb-10"
          >
            Our Process
          </motion.h3>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12 px-6 md:px-12">
            {" "}
            {/* Added horizontal padding */}
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative bg-white p-8 rounded-lg shadow-xl border border-blue-100 flex flex-col items-center text-center transform hover:scale-[1.02] transition-all duration-300"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-8 bg-[#16327b] text-white rounded-full w-16 h-16 flex items-center justify-center font-extrabold text-2xl border-4 border-white shadow-md">
                  {`0${index + 1}`}
                </div>
                <h4 className="text-2xl font-bold text-[#c48820] mt-6 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
