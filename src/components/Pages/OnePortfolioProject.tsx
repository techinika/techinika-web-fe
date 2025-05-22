"use client";

import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";
import Link from "next/link";
import Image from "next/image";

export interface Project {
  title: string;
  client: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <div className="relative h-screen">
      <div className="font-main">
        <Nav />
      </div>
      <div className="bg-white font-main mx-auto mt-24 p-3">
        <div className="bg-gray-50 py-8">
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto">
            <Link
              href="/consultancy"
              className="text-main-blue hover:underline text-lg mb-4 inline-block"
            >
              &larr; Back
            </Link>
            <h1 className="text-3xl font-bold text-main-blue mb-4">
              {project.title}
            </h1>
            <h2 className="text-xl text-gray-700 mb-2">
              Client: {project.client}
            </h2>
            <Image
              src={project.imageUrl}
              alt={`${project.title} image`}
              className="w-full h-auto rounded-lg mb-6"
              width={800}
              height={400}
            />
            <p className="text-gray-600 mb-6">{project.description}</p>

            <h3 className="text-2xl font-semibold text-main-blue mb-3">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {project.technologies.map((tech: string, index: number) => (
                <li key={index + 1}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
