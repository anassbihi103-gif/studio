export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  imageId: string;
  description: string;
  explanation: string;
  process: {
    description: string;
    images: string[];
  };
  final: {
    description: string;
    images: string[];
  };
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "easy-tear-all-in-one",
    title: "Easy tear all in one",
    category: "Product Design & Visualization",
    imageId: "project-1",
    description: "A comprehensive design and rendering project for an innovative consumer product.",
    explanation: "This project centers on redesigning an existing consumer gadget to address limitations and errors present in previous versions, creating a more advanced and feature-rich iteration. The updated design incorporates improved functionality, enhanced performance, and a futuristic aesthetic while maintaining user-friendly operation.\n\nTo support visualization and marketing, a complete set of photorealistic renders was produced, showcasing the product’s refined design, new features, and modern appeal. These visuals are tailored for both marketing campaigns and social media promotion. Additionally, artistic animations were developed to highlight the gadget’s advanced features and demonstrate its interaction in dynamic, real-world scenarios.\n\nThe project highlights the integration of technical problem-solving, forward-thinking design, and high-quality visual communication, demonstrating a holistic approach to product development and presentation.",
    process: {
      description: "Research & Analysis\n\nEvaluated the previous version of the gadget to identify functional errors, user pain points, and design limitations.\n\nConducted market and competitor research to define opportunities for innovation and advanced features.\n\nCollected user feedback to understand needs and expectations for the new iteration.\n\nDesign Thinking & Ideation\n\nApplied design thinking methodology to generate multiple concepts for an upgraded version.\n\nFocused on combining enhanced functionality, futuristic aesthetics, and ergonomic usability.\n\nCreated initial sketches, concept boards, and feature lists for evaluation.\n\nConcept Development\n\nSelected the most promising design concept and refined it with detailed technical sketches and CAD models.\n\nIntegrated new advanced features, optimized component placement, and ensured feasibility for production.\n\n3D Modeling & Prototype Design\n\nDeveloped a full 3D model of the gadget using CAD software, incorporating precise dimensions and mechanical details.\n\nProduced a physical or virtual prototype to test form, ergonomics, and functionality.\n\nVisual Communication & Marketing Assets\n\nCreated photorealistic renders highlighting the new design, features, and futuristic look.\n\nDeveloped artistic animations to showcase product interaction, use cases, and advanced functionality.\n\nTailored visual content for social media, marketing campaigns, and portfolio presentation.\n\nTesting & Iteration\n\nEvaluated the prototype for usability, durability, and overall performance.\n\nImplemented refinements based on testing feedback to ensure a polished final product.\n\nFinal Deliverables\n\nComplete CAD files and detailed prototype.\n\nHigh-quality photorealistic renders and dynamic animations for marketing.\n\nDocumentation of design process, iterations, and design rationale",
      images: ["project-1-process-1", "project-1-process-2", "process-extra-1", "process-extra-2"]
    },
    final: {
      description: "The final output included a series of high-resolution studio renders showcasing the product from multiple angles, along with lifestyle images demonstrating its use-case. An animated 360-degree turntable video was also produced to provide a dynamic view. All assets were optimized for both web and print.",
      images: ["project-1-final-1", "project-1-final-2", "final-extra-1", "final-extra-2"]
    }
  },
  {
    id: 2,
    slug: "fanuc-robots",
    title: "Fanuc Robots",
    category: "Industrial Automation CGI",
    imageId: "project-2",
    description: "High-fidelity visualization of industrial robots for trade show and marketing applications.",
    explanation: "This project focused on creating a visually striking and technically accurate animation of Fanuc robotic arms in a simulated factory environment. The objective was to showcase the robots' precision, speed, and capabilities for an international trade show booth and for use in digital marketing campaigns.",
    process: {
      description: "We started by importing the client's CAD models of the robots into Blender. A significant amount of work went into retopology and optimization for animation. We then rigged the models for realistic movement and created a futuristic factory setting. The animation was storyboarded and previz'd before final rendering.",
      images: ["project-2-process-1", "project-2-process-2"]
    },
    final: {
      description: "The final deliverable was a 90-second cinematic animation. We also produced several high-resolution still renders from the animation, capturing key moments of the robotic arms in action. These stills were used for large-format printing for the trade show booth.",
      images: ["project-2-final-1", "project-2-final-2"]
    }
  },
  {
    id: 3,
    slug: "metalfer-products",
    title: "Metalfer Products",
    category: "Product Catalog Renders",
    imageId: "project-3",
    description: "Creation of a complete 3D product catalog for a manufacturer of metal components.",
    explanation: "Metalfer required a full digital catalog of their extensive product line. Traditional photography was proving to be costly and inflexible. We proposed a CGI solution to create a consistent, high-quality, and easily updatable set of images for their web and print catalogs.",
    process: {
      description: "The workflow involved modeling dozens of unique metal products based on engineering drawings. We developed a master Blender scene with a lighting setup that would provide consistent, clean results across all products. A custom material library was built in Substance Painter to represent various metal finishes like brushed steel, chrome, and anodized aluminum.",
      images: ["project-3-process-1", "project-3-process-2"]
    },
    final: {
      description: "We delivered over 200 individual product renders on transparent backgrounds. The consistency and quality of the images significantly enhanced the professionalism of their catalog. The 3D assets are now a valuable, reusable resource for any future marketing needs.",
      images: ["project-3-final-1", "project-3-final-2"]
    }
  },
  {
    id: 4,
    slug: "smart-kitchen",
    title: "Smart Kitchen",
    category: "Architectural Visualization",
    imageId: "project-4",
    description: "Photorealistic renders of a futuristic smart kitchen concept for a design competition.",
    explanation: "For a speculative design competition, we conceptualized and visualized a 'Smart Kitchen' of the future. The project aimed to explore how technology could be seamlessly integrated into the home environment to enhance convenience, sustainability, and culinary creativity.",
    process: {
      description: "The entire kitchen was designed and modeled from scratch. This included custom cabinetry, integrated smart appliances, and holographic displays. We paid special attention to lighting and materials to create a warm, inviting, yet technologically advanced atmosphere. The scene was rendered in Blender using Cycles for maximum realism.",
      images: ["project-4-process-1", "project-4-process-2"]
    },
    final: {
      description: "The final submission consisted of a series of cinematic-quality renders from various perspectives within the kitchen, highlighting different features and moods (e.g., morning coffee, evening meal preparation). The project was highly praised for its vision and the quality of the execution.",
      images: ["project-4-final-1", "project-4-final-2"]
    }
  },
  {
    id: 5,
    slug: "stand-for-cappa-pulita",
    title: "Stand for Cappa Pulita",
    category: "Exhibition Stand Design",
    imageId: "project-5",
    description: "Design and visualization of a modular exhibition stand for a trade show.",
    explanation: "Cappa Pulita needed a compelling and reusable exhibition stand design for their upcoming trade show circuit. The brief required a design that was visually impactful, modular for different booth sizes, and effectively communicated their brand identity.",
    process: {
      description: "We went through several design iterations, starting with rough sketches and moving to 3D blockouts to test different layouts and configurations. The final design was modeled in detail, including product displays, lighting fixtures, and branding elements. We created a set of assembly instruction visuals based on the 3D model.",
      images: ["project-5-process-1", "project-5-process-2"]
    },
    final: {
      description: "The final package included photorealistic renders of the stand from human-eye perspectives, an exploded-view diagram for assembly, and a specification sheet for the stand fabricator. The client was able to secure a prime spot at the trade show thanks to the professional quality of the visuals.",
      images: ["project-5-final-1", "project-5-final-2"]
    }
  },
  {
    id: 6,
    slug: "tennis-x-gruppo-activa",
    title: "Tennis X Gruppo Activa",
    category: "Commercial Interior Design",
    imageId: "project-6",
    description: "Interior design and visualization for a premium indoor tennis facility.",
    explanation: "Gruppo Activa commissioned us to design the interior of a new luxury indoor tennis club. The goal was to create a premium, modern, and energetic environment for members, including the lounge, changing rooms, and viewing areas.",
    process: {
      description: "Working from the architect's base plans, we developed the full interior concept. This included selecting materials, designing custom furniture, and creating a lighting scheme. We built a detailed 3D model of the entire space and produced a series of test renders to refine the look and feel in collaboration with the client.",
      images: ["project-6-process-1", "project-6-process-2"]
    },
    final: {
      description: "The final deliverables were a set of high-quality photorealistic renders that were used for marketing the facility to potential members before construction was complete. The visuals were instrumental in securing early membership sign-ups and generating buzz for the new club.",
      images: ["project-6-final-1", "project-6-final-2"]
    }
  }
];
