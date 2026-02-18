import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface ScrollArrowProps {
  targetId: string;
  direction?: "down" | "up";
  className?: string;
}

const ScrollArrow = ({ targetId, direction = "down", className }: ScrollArrowProps) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const Icon = direction === "up" ? FaAnglesUp : FaAnglesDown;

  return (
    <button
      onClick={handleClick}
      className={cn("animate-bounce text-muted-foreground transition-colors duration-300 ease-out hover:text-[hsl(var(--violet-border))]", className)}
      aria-label={direction === "up" ? "Scroll to top" : "Scroll to next section"}
    >
      <Icon className="h-8 w-8" />
    </button>
  );
};

export default ScrollArrow;
