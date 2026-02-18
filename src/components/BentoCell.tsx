import { cn } from "@/lib/utils";

interface BentoCellProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCell = ({ children, className }: BentoCellProps) => (
  <div
    className={cn(
      "rounded-2xl bg-bento-cell p-5 transition-all duration-300 ease-out",
      "hover:-translate-y-0.5 hover:bg-bento-cell-hover hover:shadow-[0_4px_24px_hsl(var(--bento-glow))]",
      className
    )}
  >
    {children}
  </div>
);

export default BentoCell;
