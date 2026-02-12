import React from 'react';

const stats = [
  { label: "Projects Completed", val: "50+" },
  { label: "Software Tools", val: "7" },
  { label: "Years Experience", val: "5" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-5xl text-primary mb-2 font-code drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]">{stat.val}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
