
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
      {project.slug === 'easy-tear-all-in-one' && (
        <div className="fixed top-0 left-0 w-full h-screen -z-10 opacity-20">
          <Image
            src="/Easytear.png"
            alt="Easy Tear Logo Background"
            layout="fill"
            objectFit="cover"
            className="brightness-0 invert"
          />
        </div>
      )}
      <Header />
      <main className={`text-foreground overflow-hidden ${project.slug === 'easy-tear-all-in-one' ? 'bg-transparent' : 'bg-background'}`}>
        <div className="container mx-auto px-6 py-24 sm:py-32">
          
          <div className="mb-16 animate-in fade-in duration-500">
            <Button asChild variant="outline" className="group rounded-full backdrop-blur-sm bg-background/50 hover:bg-background/80 hover:border-primary transition-all duration-300">
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          {/* New Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 lg:mb-32">
            <div className="lg:col-span-1 text-left relative animate-in fade-in slide-in-from-left-8 duration-700">
              {project.slug === 'easy-tear-all-in-one' && (
                <div className="mb-8">
                  <Image src="/Easytear.png" alt="Easy Tear Logo" width={200} height={50} className="brightness-0 invert opacity-80" />
                </div>
              )}
              <p className="text-primary font-code tracking-[0.2em] mb-4 uppercase text-sm">
                {project.category}
              </p>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-headline">
                {project.title}
              </h1>
            </div>
            {heroImage && (
              <div className="lg:col-span-1 relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50 animate-in fade-in slide-in-from-right-8 duration-700">
                <Image
                  src={heroImage.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
              </div>
            )}
          </div>
          
          {/* Problem Statement */}
          <section className="mb-24 lg:mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">Problem Statement</h2>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{project.problemStatement}</p>
            </div>
          </section>

          {/* Concept Development */}
          <section className="mb-24 lg:mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <h2 className="text-4xl font-black mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">Concept Development</h2>
              <p className="text-foreground/80 leading-relaxed">A step-by-step journey from concept to creation.</p>
            </div>

            <div className="flex flex-col items-center">
              {project.conceptDevelopment.steps.map((step, index) => {
                const image = PlaceHolderImages.find(p => p.id === project.conceptDevelopment.images[index]);
                const isEven = index % 2 === 0;

                return (
                  <React.Fragment key={index}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                      <div className={`lg:col-start-${isEven ? 1 : 2} lg:row-start-1 lg:text-${isEven ? 'right' : 'left'}`}>
                        <h3 className="text-2xl font-bold mb-3 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
                          {step.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{step.description}</p>
                      </div>

                      {image && (
                        <div className={`relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-border/20 group lg:col-start-${isEven ? 2 : 1} lg:row-start-1`}>
                          <Image
                            src={image.imageUrl}
                            alt={step.title || 'Process step image'}
                            fill
                            className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${image.id === 'project-1-process-3' ? 'brightness-0 invert' : ''}`}
                            data-ai-hint={image.imageHint}
                          />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                        </div>
                      )}
                    </div>

                    {index < project.conceptDevelopment.steps.length - 1 && (
                      <div className="h-32 w-full max-w-xl hidden lg:block my-4 animate-in fade-in duration-1000 delay-500">
                        <svg width="100%" height="100%" viewBox="0 0 400 128" preserveAspectRatio="none">
                          <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                              <feGaussianBlur stdDeviation="4" result="glow" />
                              <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          {isEven ? (
                            // Path from right-top to left-bottom
                            <path
                              d="M 380 10 C 200 10, 200 118, 20 118"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              fill="none"
                              filter="url(#glow)"
                              className="opacity-50"
                            />
                          ) : (
                            // Path from left-top to right-bottom
                            <path
                              d="M 20 10 C 200 10, 200 118, 380 118"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              fill="none"
                              filter="url(#glow)"
                              className="opacity-50"
                            />
                          )}
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </section>

          {/* Design Solution */}
          <section className="mb-24 lg:mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">Design Solution</h2>
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed whitespace-pre-line">{project.designSolution.description}</p>
            </div>
          </section>

          {/* Final Visuals */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">Final Visuals</h2>
              <p className="text-foreground/80 leading-relaxed">A gallery of the final polished renders.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {project.finalVisuals.images.map(imageId => {
                const img = PlaceHolderImages.find(p => p.id === imageId);
                return img ? (
                  <div key={img.id} className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-border/20 group relative aspect-video animate-in fade-in zoom-in-95 duration-500">
                    <Image
                      src={img.imageUrl}
                      alt="Final render"
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
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
