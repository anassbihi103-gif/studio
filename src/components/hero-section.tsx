import { Button } from './ui/button';


const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[20%]"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-700 mix-blend-screen"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <p className="text-primary font-code tracking-[0.3em] mb-4 uppercase text-sm animate-fade-in">
          Digital Environment & Asset Artist
        </p>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 font-headline">
          BRINGING <br /> IMAGINATION <br /> TO LIFE
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-lg mb-10">
          Specializing in high-fidelity 3D environments, character sculpting, and procedural modeling for films and games.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="px-8 py-7 text-base font-bold bg-white text-slate-950 hover:bg-primary hover:text-primary-foreground transition-all shadow-lg shadow-white/5 rounded-xl">
            <a href="#portfolio">View Showcase</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 py-7 text-base font-bold bg-slate-900/50 backdrop-blur-sm text-white hover:bg-slate-800 transition-all rounded-xl">
            <a href="#contact">Start Project</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#stats" aria-label="Scroll to next section">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
