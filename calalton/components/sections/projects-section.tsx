import { ProjectCard } from '@/components/ui/project-card';
import { SectionHeader } from '@/components/ui/section-header';
import { ReactNode } from 'react';
import { NoContent } from '../error/no-content';

type Project = { logo: ReactNode; company: string; description: string };

type Props = {
  projects?: Project[];
};

export const ProjectsSection = ({ projects }: Props) => {
  const hasProjects = projects && projects.length > 0;

  return (
    <section className="py-6 px-4 bg-gray-50 rounded-lg">
      <SectionHeader title="Projects" showButton={hasProjects} />
      {hasProjects ? (
        <div className="space-y-4">
          {projects.map(({ logo, company, description }) => (
            <ProjectCard
              key={company}
              logo={logo}
              company={company}
              description={description}
              bgColor="bg-foreground"
            />
          ))}
        </div>
      ) : (
        <NoContent sectionName="projects" />
      )}
    </section>
  );
};
