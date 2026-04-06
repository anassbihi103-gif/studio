import Image from 'next/image';

const coreSkills = [
  { name: '3d modelling (CAD /polygonal)' },
  { name: 'TEXTURING' },
  { name: '3D ANIMATION' },
  { name: 'RENDERING' }
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/anas.png"
          alt="A portrait of ANAS SBIHI"
          fill
          priority
          className="object-cover object-top opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <p className="font-semibold text-xl sm:text-2xl mb-2 text-foreground">
              Hey, I'm Anas Sbihi
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter font-headline leading-none">
              Creative Director &amp; 3D Artist
            </h1>
          </div>
          <div className="lg:col-span-2 lg:justify-self-end">
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-8 max-w-sm">
              Great design should feel invisible.
            </p>
            <p className="text-lg text-muted-foreground/70 max-w-sm">
              From logo to language, I build brands that connect and convert. Specializing in advanced CAD modeling and real-time high-fidelity 3D visualization.
            </p>
          </div>
        </div>
        
        <div className="mt-20 sm:mt-32 border-t border-border pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreSkills.map((skill, index) => (
              <div key={skill.name}>
                <p className="text-primary/50 font-mono text-sm mb-1">0{index + 1}</p>
                <h3 className="font-semibold text-lg text-foreground uppercase tracking-wider">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
