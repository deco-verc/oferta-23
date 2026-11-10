"use client";

import React, { useRef, useState } from "react";

export default function SocialProofSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const proofImages = [
    {
      src: "https://ik.imagekit.io/decoimgsfunil/prova_social_1.webp",
      alt: "Depoimento de cliente satisfeita 1",
    },
    {
      src: "https://ik.imagekit.io/decoimgsfunil/09a001a9-a340-4630-abfb-06a4c4844e74.webp",
      alt: "Depoimento de cliente satisfeita 2",
    },
    {
      src: "https://ik.imagekit.io/decoimgsfunil/cb447ebf-82c2-4aa1-8acf-028bd23380dc.webp",
      alt: "Depoimento de cliente satisfeita 3",
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.8;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), proofImages.length - 1));
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto text-center">
        {/* Cabeçalho */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E6F4EA] text-[#0F5132] text-xs font-bold uppercase tracking-wider mb-2">
            Resultados Reais
          </span>
          <h2 className="text-2xl font-extrabold text-[#111827] leading-tight mb-2">
            💬 Veja Quem Já Baixou e Está Montando Suas Lembrancinhas
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563]">
            Deslize para ver os depoimentos de quem já está usando nossos moldes neste Natal:
          </p>
        </div>

        {/* Carrossel Horizontal de Prova Social */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 pt-1 px-1 -mx-2 sm:mx-0"
        >
          {proofImages.map((item, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] shrink-0 snap-center flex justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto rounded-2xl mx-auto shadow-md border border-[#F0E4E2]"
              />
            </div>
          ))}
        </div>

        {/* Indicadores / Dots interativos */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {proofImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ver depoimento ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-6 h-2 bg-[#0F5132]"
                  : "w-2 h-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
