import NotFound from "@/app/not-found";
import ProjectDetail from "@/components/Pages/PortfolioProjectPage";
import { consultancyProjects, Project } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params = consultancyProjects.map((project) => ({
    id: project.id,
  }));

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const resolved = await params;

  const { id: projectId } = resolved;
  const project = consultancyProjects.find((p) => p.id === projectId);

  if (!project) {
    return NotFound;
  }

  return {
    title: project.title,
    description: project.tagline || project.overview.substring(0, 150) + "...",
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const resolved = await params;

  const { id: projectId } = resolved;
  const project: Project | undefined = consultancyProjects.find(
    (p) => p.id === projectId
  );

  if (!project) {
    return NotFound; // This will stop rendering and show your app/not-found.tsx page
  }

  return (
    <div>
      <ProjectDetail project={project} />
    </div>
  );
}
