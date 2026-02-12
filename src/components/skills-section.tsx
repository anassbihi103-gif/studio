import React from 'react';
import { Box, DraftingCompass, Film, Layers, Shapes, Workflow } from 'lucide-react';
import { Progress } from './ui/progress';

const coreSkills = [
  { name: 'High-Poly Sculpting', level: 95 },
  { name: 'PBR Material Design', level: 90 },
  { name: 'Real-time Lighting', level: 85 },
  { name: 'Technical Art', level: 80 }
];

const softwareSkills = [
  { name: "Blender", icon: <Box className="w-6 h-6" /> },
  { name: "SolidWorks", icon: <DraftingCompass className="w-6 h-6" /> },
  { name: "Grasshopper", icon: <Workflow className="w-6 h-6" /> },
  { name: "Rhino", icon: <Shapes className="w-6 h-6" /> },
  { name: "Substance Painter", icon: <Layers className="w-6 h-6" /> },
  { name: "Adobe Premiere Pro", icon: <Film className="w-6 h-6" /> }
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
                <div className="p-4 bg-secondary rounded-xl text-muted-foreground group-hover:text-primary transition-all">
                  {skill.icon}
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
