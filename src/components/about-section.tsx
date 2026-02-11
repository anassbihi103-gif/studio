import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import mypic from '../../public/anas.png';

const AboutSection = () => {
  const image = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] lg:sticky lg:top-24">
            {image && (
              <Image
                src={mypic}
                alt="A portrait of ANAS SBIHI"
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6 font-headline">A PASSION FOR PIXELS</h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Hello! I'm ANAS SBIHI, a digital artist with a deep-seated passion for creating immersive worlds. My expertise lies in translating conceptual ideas into tangible, high-fidelity 3D assets, and I thrive on the blend of technical challenges and artistic expression.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="flex items-center text-2xl font-bold mb-6 font-headline">
                  <Briefcase className="mr-3 text-primary w-6 h-6" />
                  Experience
                </h3>
                <div className="space-y-6 border-l-2 border-primary/20 pl-6">
                  <div className="relative">
                     <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-bold text-foreground">Your Job Title</h4>
                    <p className="text-sm text-muted-foreground">Company Name | 2020 - Present</p>
                    <p className="mt-2 text-sm">Describe your responsibilities and achievements in this role.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-bold text-foreground">Previous Job Title</h4>
                    <p className="text-sm text-muted-foreground">Previous Company | 2018 - 2020</p>
                    <p className="mt-2 text-sm">Describe your responsibilities and achievements in this role.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center text-2xl font-bold mb-6 font-headline">
                  <GraduationCap className="mr-3 text-primary w-6 h-6" />
                  Education
                </h3>
                <div className="space-y-6 border-l-2 border-primary/20 pl-6">
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-bold text-foreground">Your Degree or Certificate</h4>
                    <p className="text-sm text-muted-foreground">University/Institution Name | 2014 - 2018</p>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-12 px-8 py-7 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/5 rounded-xl">
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
