import { Button } from './ui/button';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40 grayscale-[20%]">
        <iframe
          src="https://player.vimeo.com/video/1163080800?background=1&loop=1&autopause=0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-screen w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0"
          title="GrabberVideo"
        ></iframe>

      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <p className="text-primary font-code tracking-[0.3em] mb-4 uppercase text-sm animate-fade-in">
          Higher Technician in Digital Manufacturing Design & 3D artist
        </p>
        <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary bg-[length:200%_auto] animate-gradient font-headline drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]">
          bringing your vision to life with precision and flair
        </h1>
        <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10">
          Specializing in advanced CAD modeling and real-time high-fidelity 3D visualization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="px-8 py-7 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/5 rounded-xl">
            <a href="#portfolio">View Showcase</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 py-7 text-base font-bold bg-secondary/50 backdrop-blur-sm text-foreground hover:bg-secondary/80 transition-all rounded-xl">
            <a href="#contact">Start Project</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#stats" aria-label="Scroll to next section">
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
