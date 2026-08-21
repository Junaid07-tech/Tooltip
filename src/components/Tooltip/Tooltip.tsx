import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/libs/utils";
import gsap from "gsap";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const Tooltip = ({
  children,
  content,
  position = "top",
  className,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  useEffect(() => {
    const tooltip = tooltipRef.current;

    if (!tooltip) return;

    if (visible) {
      gsap.fromTo(
        tooltip,
        {
          opacity: 0,
          scale: 0.85,
          y: position === "top" ? 8 : position === "bottom" ? -8 : 0,
          x: position === "left" ? 8 : position === "right" ? -8 : 0,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(tooltip, {
        opacity: 0,
        scale: 0.85,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [visible, position]);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        ref={tooltipRef}
        className={cn(
          "absolute z-50 whitespace-nowrap rounded-md bg-slate-900 px-3 py-2 text-sm text-white shadow-lg",
          "pointer-events-none opacity-0",
          positionClasses[position],
          className
        )}
      >
        {content}
      </div>
    </div>
  );
};

Tooltip.displayName = "Tooltip";

export { Tooltip };