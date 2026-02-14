import React from 'react';
import Image from 'next/image';
import { Progress } from './ui/progress';

const coreSkills = [
  { name: '3d modelling (CAD /polygonal)', level: 95 },
  { name: 'TEXTURING', level: 90 },
  { name: '3D ANIMATION', level: 85 },
  { name: 'RENDERING', level: 80 }
];

const softwareSkills = [
  { name: "Blender", logo: "/softwares/blender.png" },
  { name: "SolidWorks", logo: "/softwares/SolidWorks.png" },
  { name: "Grasshopper", logo: "/softwares/grasshopper.png" },
  { name: "Rhino", logo: "/softwares/Rhino.png" },
  { name: "Substance Painter", logo: "/softwares/substance.png" },
  { name: "Adobe Premiere Pro", logo: "/softwares/Premiere.png" }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 font-headline">THE TOOLBOX</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I leverage the power of industry-leading software combined with custom scripts and procedural workflows to deliver unmatched visual quality. My focus is on creating optimized, production-ready assets.
            </p>
            
            <div className="space-y-6">
              {coreSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm uppercase tracking-wider text-foreground/80">{skill.name}</span>
                    <span className="text-primary font-bold text-sm">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-1.5 [&>div]:bg-primary" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {softwareSkills.map((skill, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-background border border-border flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/50 transition-colors group">
                <div className="p-4 bg-secondary rounded-xl flex items-center justify-center h-20 w-20">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold uppercase tracking-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
