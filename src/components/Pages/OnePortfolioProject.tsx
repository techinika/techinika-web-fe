import Head from "next/head";
import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";
import Link from "next/link";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "sherrie-silver-foundation" } },
      { params: { id: "yali-alumni-management" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = {
    "sherrie-silver-foundation": {
      title: "Members Management System",
      client: "Sherrie Silver Foundation",
      description:
        "A project we made for them to manage their organization's members, volunteers, and other daily operations.",
      technologies: ["JavaScript", "Node.js", "Next.js", "MongoDB"],
      imageUrl: "/sherriekms.png",
    },
    "yali-alumni-management": {
      title: "Alumni Management System",
      client: "YALI Rwanda Chapter",
      description:
        "A system designed to help YALI Rwanda Chapter keep their Alumni information up to date.",
      technologies: ["JavaScript", "Node.js", "Next.js", "MySQL"],
      imageUrl: "/yaliams.png",
    },
  };

  return {
    props: {
      project: projectData[params.id],
    },
  };
}

export default function ProjectPage({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} - Techinika</title>
        <meta name="description" content={project.description} />
      </Head>
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
              <img
                src={project.imageUrl}
                alt={`${project.title} image`}
                className="w-full h-auto rounded-lg mb-6"
              />
              <p className="text-gray-600 mb-6">{project.description}</p>

              <h3 className="text-2xl font-semibold text-main-blue mb-3">
                Technologies Used
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
