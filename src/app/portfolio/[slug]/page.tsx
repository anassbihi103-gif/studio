import { projects } from '@/lib/projects';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }
  
  const heroImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <>
      <Header />
      <main className="bg-background text-foreground overflow-hidden">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          
          <div className="mb-16">
            <Button asChild variant="outline" className="group rounded-full backdrop-blur-sm bg-background/50 hover:bg-background/80 hover:border-primary transition-all duration-300">
              <Link href="/#portfolio">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          {/* New Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center mb-24 lg:mb-32">
            <div className="lg:col-span-3 text-left">
              <p className="text-primary font-code tracking-[0.2em] mb-4 uppercase text-sm">
                {project.category}
              </p>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-headline">
                {project.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed whitespace-pre-line">{project.explanation}</p>
            </div>
            {heroImage && (
              <div className="lg:col-span-2 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src={heroImage.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </div>
            )}
          </div>

          {/* The Process */}
          <section className="mb-24 lg:mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">The Process</h2>
              <p className="text-muted-foreground leading-relaxed">A step-by-step journey from concept to creation.</p>
            </div>

            <div className="relative">
              {/* The vertical timeline bar */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/20 hidden lg:block" />

              <div className="space-y-24">
                {project.process.steps.map((step, index) => {
                  const image = PlaceHolderImages.find(p => p.id === project.process.images[index]);
                  const isEven = index % 2 === 0;

                  return (
                    <div key={index} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden lg:block"></div>

                      <div className={`lg:col-start-${isEven ? 1 : 2} lg:row-start-1 lg:text-${isEven ? 'right' : 'left'}`}>
                        <h3 className="text-2xl font-bold mb-3 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{step.description}</p>
                      </div>

                      {image && (
                        <div className={`relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-border/20 group lg:col-start-${isEven ? 2 : 1} lg:row-start-1`}>
                          <Image
                            src={image.imageUrl}
                            alt={step.title || 'Process step image'}
                            fill
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Final Renders */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">Final Renders</h2>
              <p className="text-muted-foreground leading-relaxed">{project.final.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {project.final.images.map(imageId => {
                const img = PlaceHolderImages.find(p => p.id === imageId);
                return img ? (
                  <div key={img.id} className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-border/20 group relative aspect-video">
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
