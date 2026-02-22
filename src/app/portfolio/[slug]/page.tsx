
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
      <main className="bg-background pt-24">
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover opacity-30 grayscale"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background"></div>
          <div className="relative z-10 container mx-auto px-6">
            <p className="text-primary font-code tracking-[0.2em] mb-4 uppercase text-sm">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight font-headline">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16">
              <Button asChild variant="outline" className="mb-12">
                <Link href="/#portfolio">
                  <ArrowLeft className="mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <h2 className="text-3xl font-bold mb-4 font-headline">Project Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.explanation}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 font-headline">The Process</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.process.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {project.process.images.map(imageId => {
                  const img = PlaceHolderImages.find(p => p.id === imageId);
                  return img ? (
                    <div key={img.id} className="rounded-xl overflow-hidden shadow-lg border border-border">
                       <Image
                        src={img.imageUrl}
                        alt="Project process"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        data-ai-hint={img.imageHint}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 font-headline">Final Renders</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.final.description}</p>
              <div className="grid grid-cols-1 gap-8">
                 {project.final.images.map(imageId => {
                  const img = PlaceHolderImages.find(p => p.id === imageId);
                  return img ? (
                    <div key={img.id} className="rounded-xl overflow-hidden shadow-lg border border-border">
                      <Image
                        src={img.imageUrl}
                        alt="Final render"
                        width={1200}
                        height={800}
                        className="object-cover w-full h-full"
                        data-ai-hint={img.imageHint}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </section>
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
