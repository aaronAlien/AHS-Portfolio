import Marquee from "./Marquee";
import ProjectCard from "./ProjectCard";
import ScrollArrow from "./ScrollArrow";

const projects = [
    {
    title: "DeleteDB",
    description: "A full stack demonstration of privacy by design with automatic data deletion, real-time monitoring and temporary sessions.",
    tags: ["node", "typescript", "docker", "sql", "react", "vite", "tailwindcss"],
    githubUrl: "https://github.com/aaronAlien/delete_db",
    imageUrl: "/assets/CardImages/sucess_logout.jpg",
    liveUrl:"#",
  },
  {
    title: "Character Calc - Genshin Impact",
    description: "Data-driven dashboard that calculates character upgrade materials, with dynamic routing, normalized data models and unit tested logic.",
    tags: ["react", "vite", "tailwindcss", "api", "local storage", "unit testing"],
    githubUrl: "https://github.com/aaronAlien/Character-Calc",
    imageUrl: "/assets/CardImages/character_calc.png",
    liveUrl:"https://character-calc.vercel.app/",
  },
    {
    title: "Spotify Data Analysis ",
    description: "Python pipeline to fetch Spotify data via API, process it with Pandas, and visualize trends",
    tags: ["python", "api", "jupyter", "numpy", "pandas", "matplotlib", "data analysis"],
    githubUrl: "https://github.com/aaronAlien/Exploring-Spotify",
    imageUrl: "/assets/CardImages/wordcloud_genres_2.png",
    liveUrl:"https://github.com/aaronAlien/Exploring-Spotify",
  },
];

const ProjectsSection = () => (
  <section
    id="projects"
    className="flex min-h-screen flex-col items-center justify-center px-4 "
  >
    <Marquee text="My Projects" className="mb-8" />

    <div className="w-full max-w-5xl rounded-3xl bg-card p-4 shadow-2xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>

    <ScrollArrow targetId="about" className="mt-8" />
  </section>
);

export default ProjectsSection;
