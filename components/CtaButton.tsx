"use client";

import React from "react";
import { appendCurrentUtms } from "@/utils/utm";

interface CtaButtonProps {
  text: string;
  subtext?: string;
  targetId?: string; // se fornecido, faz smooth scroll até a seção (ex: "planos")
  href?: string;     // se fornecido, atua como link direto (ex: link de checkout Cakto)
  className?: string;
  pulse?: boolean;
}

export default function CtaButton({
  text,
  subtext,
  targetId,
  href,
  className = "",
  pulse = true,
}: CtaButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Se tiver targetId e não tiver href direto, faz smooth scroll
    if (targetId && !href) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const finalHref = href ? appendCurrentUtms(href) : `#${targetId || "planos"}`;

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <a
        href={finalHref}
        onClick={handleClick}
        className={`w-full py-4 px-6 rounded-full bg-[#D31A2B] hover:bg-[#B01221] active:scale-[0.98] text-white font-extrabold text-center text-sm sm:text-base uppercase tracking-wide transition-all duration-300 shadow-cta hover:shadow-ctaHover flex items-center justify-center gap-2 group cursor-pointer ${
          pulse ? "animate-cta-subtle" : ""
        }`}
      >
        <span>{text}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
          →
        </span>
      </a>
      {subtext && (
        <p className="mt-2 text-center text-xs text-[#6B7280] font-medium leading-relaxed max-w-[90%]">
          {subtext}
        </p>
      )}
    </div>
  );
}
