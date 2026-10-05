import Marquee from "./Marquee";
import ProjectCard from "./ProjectCard";
import ScrollArrow from "./ScrollArrow";

const projects = [
  {
    title: "DeleteDB",
    description:
      "A full stack demonstration of privacy by design with automatic data deletion, real-time monitoring and temporary sessions.",
    tags: [
      "docker",
      "postgresql",
      "node",
      "typescript",
      "react",
      "vite",
      "tailwindcss",
    ],
    githubUrl: "https://github.com/aaronAlien/delete_db",
    imageUrl: "/assets/CardImages/sucess_logout.jpg",
    liveUrl: "https://delete-db.vercel.app/",
  },
  {
    title: "Character Calc",
    description:
      "A gaming resource planner.",
    tags: [
      "javascript",
      "react",
      "vite",
      "tailwindcss",
    ],
    githubUrl: "https://github.com/aaronAlien/character-calc",
    imageUrl: "/assets/CardImages/character_calc.png",
    liveUrl: "https://character-calc.vercel.app/",
  },

];

// tailwind classes grow section when new added
const layouts = {
1: { width: "max-w-md", cols: "" },
2: { width: "max-w-4xl", cols: "sm:grid-cols-2" },
3: { width: "max-w-6xl", cols: "sm:grid-cols-2 lg:grid-cols-3" },  
};

const columns = projects.length === 4 ? 2 : Math.min(projects.length, 3);
const layout = layouts[columns as 1 | 2 | 3];

const ProjectsSection = () => (
  <section
    id='projects'
    className='flex min-h-screen flex-col items-center justify-center px-4 py-16'
  >
    <Marquee text='My Projects' className='mb-8' />

    <div className={`w-full ${layout.width} rounded-3xl bg-card p-4 border border-zinc-50/10 shadow-2xl`}>
      <div className={`grid grid-cols-1 gap-3 ${layout.cols}`}>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>

    <ScrollArrow targetId='about' className='mt-8' />
  </section>
);

export default ProjectsSection;
