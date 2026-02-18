import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
}

const Marquee = ({ text, className }: MarqueeProps) => {
  const items = Array(20).fill(`• ${text}`);

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0">
            {items.map((item, i) => (
              <span
                key={`${group}-${i}`}
                className="mx-4 text-5xl font-bold uppercase tracking-tight text-foreground sm:text-8xl"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
