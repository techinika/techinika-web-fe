// app/consultancy/[id]/page.tsx

// Import the ProjectDetail component (assuming it's a Client Component if it uses 'use client')
import ProjectDetail from "@/components/Pages/PortfolioProjectPage";
// Import your project data
import { consultancyProjects } from "@/data/portfolio";
// Import notFound utility from Next.js for handling missing data
import { notFound } from "next/navigation";

// Define the props type for the page component, including the dynamic segment 'id'
interface ProjectPageProps {
  params: {
    id: string;
  };
}

// generateStaticParams replaces getStaticPaths in the App Router
// It tells Next.js which dynamic segments to pre-render at build time.
export async function generateStaticParams() {
  // Map over your projects to create an array of { id: 'projectId' } objects
  const params = consultancyProjects.map((project) => ({
    id: project.id,
  }));

  return params;
}

// Your page component is now an async Server Component
// It directly receives the 'params' prop from Next.js
export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectId = params.id;

  // Fetch the project data directly within the Server Component
  // In a real app, this might be a database query or an external API call.
  const project = consultancyProjects.find((p) => p.id === projectId);

  // If the project is not found, use Next.js's notFound utility
  // This will render the closest not-found.tsx file up the tree.
  if (!project) {
    notFound();
  }

  // Pass the fetched project data to your ProjectDetail component
  // ProjectDetail can be a Client Component if it needs interactivity.
  return (
    <div>
      <ProjectDetail project={project} />
    </div>
  );
}
