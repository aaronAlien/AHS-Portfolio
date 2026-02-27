import BentoCell from "./BentoCell";
import ScrollArrow from "./ScrollArrow";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { ArrowRight, Mail } from "lucide-react";

const BentoHero = () => {
  return (
    <section
      id='hero'
      className='flex min-h-screen flex-col items-center shadow-card justify-center px-4'
    >
      {/* grey card */}
      <div className='w-full max-w-3xl rounded-3xl bg-card p-4 border border-zinc-50/10 shadow-md shadow-[hsl(var(--bento-cell-hover))]'>
        {/* bento grid */}
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:grid-rows-3'>
          {/* profile - left span 2 */}
          <BentoCell className='flex flex-col items-center justify-center gap-4 md:col-span-1 md:row-span-2'>
            <img
              src='/assets/AHShakespearePFP2_sq.jpg'
              alt='image of AHS'
              className='h-28 w-28 rounded-full border-2 border-border object-cover'
            />
            <div className='text-center'>
              <h1 className='sm:text-xl text-lg font-bold text-foreground'>
                Aaron Shakespeare
              </h1>
              <p className='text-sm text-muted-foreground'>
                Full-Stack Developer
              </p>
              <p className='text-l text-muted-foreground'>📍 London, UK</p>
            </div>
          </BentoCell>

          {/* bio - top right - span 2 */}
          <BentoCell className='md:col-span-2'>
            <p className='text-sm leading-relaxed text-secondary-foreground'>
              I’m a developer with a creative background and a lifelong interest
              in technology. I enjoy learning by doing, building and testing
              software systems to understand how they work.
              <a
                href='#about'
                className='ml-1 text-muted-foreground transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]'
              >
                more...
              </a>
            </p>
          </BentoCell>

          {/* stack - rright */}
          <BentoCell className='md:col-span-2'>
            <p className='mb-3 text-l font-semibold uppercase tracking-wider text-muted-foreground'>
              Stack
            </p>
            <div className='flex flex-wrap gap-3 text-2xl text-secondary-foreground'>
              <FaJs title='JavaScript' />
              <SiTypescript title='TypeScript' />
              <FaPython title='Python' />
              <FaNodeJs title='Node.js' />
              <FaReact title='React' />
              <SiVite title='Vite' />
              <SiTailwindcss title='Tailwind CSS' />
              <FaHtml5 title='HTML' />
              <FaCss3Alt title='CSS' />
            </div>
          </BentoCell>

          {/* working on - bottom left */}
          <BentoCell className='group md:col-span-1'>
            <a href='https://github.com/aaronAlien/reflection-sessions' target="_blank" className='flex h-full flex-col justify-between gap-3'>
              <p className='text-l font-semibold uppercase tracking-wider text-muted-foreground'>
                Working On
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-foreground transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]'>
                  Reflection Sessions
                </span>
                <ArrowRight className='h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1' />
              </div>
            </a>
          </BentoCell>

          {/* sociials - bottom right */}
          <BentoCell className='md:col-span-2'>
            <p className='mb-3 text-l font-semibold uppercase tracking-wider text-muted-foreground'>
              Connect
            </p>
            <div className='flex gap-4 text-2xl text-secondary-foreground'>
              <a
                href='thatshakespeare2@gmail.com'
                target='_blank'
                className='transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]'
                aria-label='Email: thatshakespeare2@gmail.com'
              >
                <Mail className='h-6 w-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/aaron-shakespeare/'
                target='_blank'
                className='transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://github.com/aaronAlien/'
                target='_blank'
                className='transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]'
                aria-label='GitHub'
              >
                <FaGithub />
              </a>
            </div>
          </BentoCell>
        </div>
      </div>

      <ScrollArrow targetId='projects' className='mt-8' />
    </section>
  );
};

export default BentoHero;
