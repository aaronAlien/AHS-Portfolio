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
    description: "A resource planner for Genshin Impact. Calculate character materials needed for target levels, save a list of characters to build. Reimplemented in React under MIT License.",
    tags: ["javascript", "react", "vite", "tailwindcss"],
    githubUrl: "https://github.com/aaronAlien/character-calc",
    imageUrl: "/assets/CardImages/character_calc.png",
    liveUrl: "https://character-calc.vercel.app/",
  },
  {
    title: "Live Bus",
    description:
      "Live London bus arrivals from TfL open data. Enter the 5-digit code from a bus stop sign to see what's arriving and when.",
    tags: ["javascript", "html", "css"],
    githubUrl: "https://github.com/aaronAlien/Live-Bus-TFL",
    imageUrl: "/assets/CardImages/live_bus.png",
    liveUrl: "https://live-bus-tfl.vercel.app/",
  },
];

const ProjectsSection = () => (
  <section
    id='projects'
    className='flex min-h-screen flex-col items-center justify-center px-4 '
  >
    <Marquee text='My Projects' className='mb-8' />

    <div className='w-full max-w-5xl rounded-3xl bg-card p-4 border border-zinc-50/10 shadow-md shadow-[hsl(var(--bento-cell-hover))]'>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>

    <ScrollArrow targetId='about' className='mt-8' />
  </section>
);

export default ProjectsSection;
