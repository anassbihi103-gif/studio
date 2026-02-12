import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] lg:sticky lg:top-24">
            <Image
              src="/anas.png"
              alt="A portrait of ANAS SBIHI"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6 font-headline">Executive Summary</h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Highly accomplished 3D Visualization Specialist with a proven ability to bridge advanced technical modeling (CAD) and high-fidelity artistic production. Core expertise centers on developing optimized 3D assets and animations for real-time applications, consistently meeting stringent performance and visual requirements. Strategic collaborator skilled in translating complex engineering data and specifications into compelling, commercially viable digital solutions, demonstrating meticulous attention to detail and project efficiency.
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
                    <h4 className="font-bold text-foreground">3D ARTIST</h4>
                    <p className="text-sm text-muted-foreground">Antemotion | Rovereto</p>
                    <p className="mt-2 text-sm">Creation of high-fidelity, optimized 3D assets for peak performance in real-time applications. Leveraged expert technical skills in retopology, PBR texturing, and modeling to consistently deliver photorealistic results that met stringent visual and technical specifications. Enhanced project efficiency and asset quality by integrating industry-standard tools (Blender, Substance Painter) into the streamlined production pipeline.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-bold text-foreground">CREATIVE DESIGNER</h4>
                    <p className="text-sm text-muted-foreground">Metalfer | Tione</p>
                    <p className="mt-2 text-sm">Directed the end-to-end 3D CAD design pipeline (SolidWorks), translating complex engineering specifications into production-ready digital assets. Generated high-impact photorealistic renders (Blender) by expertly refining lighting and composition, significantly enhancing product visibility and appeal. Integrated engineering precision with artistic excellence, ensuring design deliverables were both technically accurate and commercially compelling.</p>
                  </div>
                   <div className="relative">
                    <div className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-bold text-foreground">MODELLAZIONE 3D</h4>
                    <p className="text-sm text-muted-foreground">Double S | Brentonico</p>
                    <p className="mt-2 text-sm">Executed detailed 3D CAD modeling projects (SolidWorks) that directly supported the efficient execution of the core production schedule. Streamlined design workflows by applying deep knowledge of the production process, resulting in measurable gains in overall project efficiency. Applied advanced problem-solving methodologies to rapidly adapt to new technical requirements and ensure on-time delivery across diverse project scopes.</p>
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
                    <h4 className="font-bold text-foreground">Alta Formazione Digital Manufacturing Design</h4>
                    <p className="text-sm text-muted-foreground">Poloveronesi | 2022 - 2026</p>
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
