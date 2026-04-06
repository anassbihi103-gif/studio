import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const image = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50">
        {image && (
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale"
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
           <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
