import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const image = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5]">
            {image && (
              <Image
                src={image.imageUrl}
                alt="A portrait of Volt3D"
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6 font-headline">A PASSION FOR PIXELS</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Hello! I'm Volt3D, a digital artist with a deep-seated passion for creating immersive worlds and compelling characters. With over 8 years in the industry, my journey has taken me through the pipelines of blockbuster films and award-winning video games.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              My expertise lies in translating conceptual ideas into tangible, high-fidelity 3D assets. I thrive on technical challenges and artistic expression, constantly pushing the boundaries of what's possible in digital art.
            </p>
            <Button asChild size="lg" className="px-8 py-7 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/5 rounded-xl">
              <a href="#contact">
                Let's Work Together <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
