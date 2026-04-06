import { projects } from '@/lib/projects';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }
  
  const heroImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <>
      <Header />
      <main className='text-foreground bg-background'>
        <div className="container mx-auto px-6 py-24 sm:py-32">
          
          <div className="mb-16">
            <Button asChild variant="outline" className="group rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-24">
            <p className="text-sm font-bold text-primary mb-4 tracking-widest uppercase">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter font-serif">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed whitespace-pre-line max-w-3xl mx-auto">{project.problemStatement}</p>
          </div>
          
          <section className="mb-24 lg:mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 font-serif">Concept Development</h2>
              <p className="text-foreground/80 leading-relaxed">A step-by-step journey from concept to creation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.conceptDevelopment.steps.map((step, index) => {
                const image = PlaceHolderImages.find(p => p.id === project.conceptDevelopment.images[index]);
                const isSpecialImage = image?.imageUrl === '/refeasy.png';
                return (
                  <div key={index} className="flex flex-col gap-4">
                    {image && (
                      <div className={`relative rounded-lg overflow-hidden ${isSpecialImage ? 'p-8 bg-black' : 'aspect-square bg-secondary'}`}>
                        <Image
                          src={image.imageUrl}
                          alt={step.title || 'Process step image'}
                          width={isSpecialImage ? 600 : undefined}
                          height={isSpecialImage ? 400 : undefined}
                          fill={!isSpecialImage}
                          className={`object-contain ${!isSpecialImage ? '' : ''}`}
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="text-left">
                      <h3 className="font-bold text-lg mb-1 font-serif">
                        <span className="text-primary/50 mr-2">0{index + 1}</span>{step.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed whitespace-pre-line">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Design Solution */}
          <section className="mb-24 lg:mb-32">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 font-serif">Design Solution</h2>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{project.designSolution.description}</p>
            </div>
          </section>

          {/* Final Visuals */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 font-serif">Final Visuals</h2>
              <p className="text-foreground/80 leading-relaxed">A gallery of the final polished renders.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.finalVisuals.images.map(imageId => {
                const img = PlaceHolderImages.find(p => p.id === imageId);
                return img ? (
                  <div key={img.id} className="rounded-lg overflow-hidden group relative aspect-video">
                    <Image
                      src={img.imageUrl}
                      alt="Final render"
                      fill
                      className="object-cover w-full h-full"
                      data-ai-hint={img.imageHint}
                    />
                  </div>
                ) : null;
              })}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}
