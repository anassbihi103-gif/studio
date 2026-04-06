import { projects } from '@/lib/projects';
import ProjectCard from './project-card';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-serif">Selected Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
