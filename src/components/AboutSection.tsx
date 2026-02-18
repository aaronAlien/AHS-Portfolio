import Marquee from "./Marquee";
import ScrollArrow from "./ScrollArrow";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutSection = () => (
  <section
    id="about"
    className="flex min-h-screen flex-col items-center justify-center px-4"
  >
    <Marquee text="About" className="mb-8" />

    <div className="w-full max-w-2xl rounded-3xl bg-card p-6 sm:p-8 ">
      <p className="mb-4 text-sm font-semibold text-primary">Hey, I'm name</p>
      <p className="text-sm leading-relaxed text-secondary-foreground">
        After working internationally in the fashion industry, I shifted my focus to software development. Now, I build projects across web and data, usually starting from personal interests and turning them into technical challenges.
        <br />
        I'm intersted in roles where I can continue building, testing and improving systems in a practical environment.
      </p>
      <p className="mt-6 text-center text-sm font-bold text-foreground">
        thatshakespeare2@gmail.com
      </p>
    </div>

    {/* Scroll back to top */}
    <ScrollArrow targetId="hero" direction="up" className="mt-8" />

    {/* Footer socials */}
    <div className="mt-8 flex gap-4 text-xl text-muted-foreground">
      <a href="mailto:you@example.com" className="transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]" aria-label="Email">
        <Mail className="h-5 w-5" />
      </a>
      <a href="#" className="ttransition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="#" className="transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
    <p className="mt-8 mb-8 text-xs text-muted-foreground hover:text-foreground transition-colors"><a href="https://adamtitchener.com/" target="_blank">image: Adam Titchener</a></p>
  </section>
);

export default AboutSection;
