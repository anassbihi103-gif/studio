
const coreSkills = [
  { name: '3d modelling (CAD /polygonal)' },
  { name: 'TEXTURING' },
  { name: '3D ANIMATION' },
  { name: 'RENDERING' }
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl">
        <p className="font-semibold text-lg sm:text-xl mb-4 text-muted-foreground">
          Hey, I'm Anas Sbihi
        </p>
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif mb-8 tracking-tighter leading-tight">
          Creative Director & 3D Artist
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From logo to language, I build brands that connect and convert. Specializing in advanced CAD modeling and real-time high-fidelity 3D visualization.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
