import React from "react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F5132] text-white shadow-md">
      <div className="max-w-[540px] mx-auto px-4 py-2.5 text-center flex items-center justify-center gap-1.5 text-xs sm:text-[13px] font-semibold leading-snug">
        <span className="text-amber-300 animate-pulse text-sm">⚠️</span>
        <span>
          <strong className="text-amber-200">OFERTA ESPECIAL DE FIM DE ANO:</strong>{" "}
          Desconto de 80% + Todos os 4 Bônus liberados somente hoje{" "}
          <span className="underline decoration-amber-300 font-bold">
            (09/11/2026)
          </span>
          .
        </span>
      </div>
    </header>
  );
}
