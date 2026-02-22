
import { projects } from '@/lib/projects';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GitCommit, Layers, Sparkles } from 'lucide-react';
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
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover opacity-20 grayscale"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-6">
            <p className="text-primary font-code tracking-[0.3em] mb-6 uppercase text-sm">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 font-headline drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)]">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
             <div className="max-w-4xl mx-auto mb-16">
              <Button asChild variant="outline" className="mb-12 group">
                <Link href="/#portfolio">
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
            
            <div className="space-y-24 max-w-4xl mx-auto">
              {/* Project Overview */}
              <div>
                <h2 className="flex items-center text-3xl font-black mb-6 font-headline text-primary">
                  <GitCommit className="mr-4 flex-shrink-0" />
                  <span>Project Overview</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.explanation}</p>
              </div>

              {/* The Process */}
              <div>
                <h2 className="flex items-center text-3xl font-black mb-6 font-headline text-primary">
                  <Layers className="mr-4 flex-shrink-0" />
                  <span>The Process</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">{project.process.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {project.process.images.map(imageId => {
                    const img = PlaceHolderImages.find(p => p.id === imageId);
                    return img ? (
                      <div key={img.id} className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-border group">
                        <Image
                          src={img.imageUrl}
                          alt="Project process"
                          width={800}
                          height={600}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={img.imageHint}
                        />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              
              {/* Final Renders */}
              <div>
                 <h2 className="flex items-center text-3xl font-black mb-6 font-headline text-primary">
                  <Sparkles className="mr-4 flex-shrink-0" />
                  <span>Final Renders</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">{project.final.description}</p>
                <div className="grid grid-cols-1 gap-8">
                  {project.final.images.map(imageId => {
                    const img = PlaceHolderImages.find(p => p.id === imageId);
                    return img ? (
                      <div key={img.id} className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-border group">
                        <Image
                          src={img.imageUrl}
                          alt="Final render"
                          width={1200}
                          height={800}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={img.imageHint}
                        />
                      </div>
                    ) : null;
                  })}
                </div>
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
