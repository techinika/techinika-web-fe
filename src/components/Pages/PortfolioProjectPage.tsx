"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import Footer from "../HeadFoot/Footer";
import Nav from "../HeadFoot/Nav";
import NotFound from "@/app/not-found";

interface ProjectDetailProps {
  project: Project | null;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 md:py-32 overflow-hidden">
        {project.heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover object-center opacity-30"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        )}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-[#16327b] mb-4 drop-shadow-sm"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            {project.tagline}
          </motion.p>
          {project.client && (
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 text-lg text-gray-600"
            >
              Client:{" "}
              <span className="font-semibold text-[#c48820]">
                {project.client}
              </span>
            </motion.p>
          )}
          {project.date && (
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-md text-gray-500"
            >
              Duration: {project.date}
            </motion.p>
          )}
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#16327b] mb-4">
              Project <span className="text-[#c48820]">Overview</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#16327b] mb-4">
              The <span className="text-[#c48820]">Challenge</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#16327b] mb-4">
              Our <span className="text-[#c48820]">Solution</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-extrabold text-[#16327b] mb-4">
              Impact & <span className="text-[#c48820]">Results</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.results}
            </p>
          </motion.div>

          {/* Technologies Used */}
          {project.technologiesUsed && project.technologiesUsed.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-extrabold text-[#16327b] mb-4">
                Technologies <span className="text-[#c48820]">Used</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologiesUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-[#16327b] text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              href="/consultancy" // Link back to your main consultancy page (if you have one)
              className="inline-block bg-[#c48820] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#a9751c] transition-colors duration-300"
            >
              ← Back to All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
