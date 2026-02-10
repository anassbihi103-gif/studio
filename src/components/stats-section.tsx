import React from 'react';

const stats = [
  { label: "Projects Completed", val: "120+" },
  { label: "Software Tools", val: "12" },
  { label: "Years Experience", val: "8" },
  { label: "Creative Awards", val: "14" }
];

const StatsSection = () => {
  return (
    <section id="stats" className="bg-secondary/50 border-y border-border py-12">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-3xl font-black text-primary mb-1 font-headline">{stat.val}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
