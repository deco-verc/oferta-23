import React from "react";

interface ImagePlaceholderProps {
  id: string;
  label: string;
  subtitle?: string;
  aspectRatio?: "square" | "video" | "story" | "sample" | "banner";
  dimensions?: string;
  className?: string;
  theme?: "rosé" | "neutral" | "darkWhatsapp";
  src?: string; // Se o usuário quiser inserir imagem no futuro, basta passar a URL aqui!
  alt?: string;
}

export default function ImagePlaceholder({
  id,
  label,
  subtitle,
  aspectRatio = "square",
  dimensions = "1080x1080",
  className = "",
  theme = "rosé",
  src,
  alt,
}: ImagePlaceholderProps) {
  // Se o usuário passar um src no futuro, renderiza a imagem real:
  if (src) {
    return (
      <div id={id} className={`relative overflow-hidden ${className}`}>
        {/* IMAGEM REAL SUBSTITUÍDA */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || label}
          className="w-full h-full object-cover rounded-[inherit]"
        />
      </div>
    );
  }

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-[16/9]",
    story: "aspect-[9/16]",
    sample: "aspect-[4/3]",
    banner: "aspect-[21/9]",
  }[aspectRatio];

  const themeClasses = {
    rosé: "bg-[#FDF2F0] border-[#E8D5D2] text-[#8C5D58]",
    neutral: "bg-[#F3F4F6] border-[#D1D5DB] text-[#6B7280]",
    darkWhatsapp: "bg-[#0B141A] border-[#1F2C34] text-[#8696A0]",
  }[theme];

  return (
    <div
      id={id}
      data-placeholder-id={id}
      className={`relative w-full ${aspectClasses} rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 text-center select-none transition-all duration-200 overflow-hidden ${themeClasses} ${className}`}
    >
      {/* Comentário para o desenvolvedor localizar facilmente para substituir o arquivo */}
      {/* <!-- [SUBSTITUIR IMAGEM ID: ${id}] Coloque <img src="/caminho-da-imagem.jpg" /> aqui --> */}

      {/* Grid sutil decorativo de fundo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {theme === "darkWhatsapp" ? (
        // Wireframe visual de print de WhatsApp
        <div className="relative z-10 w-full h-full flex flex-col justify-between py-2 px-1">
          {/* Header simulado do WhatsApp */}
          <div className="flex items-center gap-2 pb-2 border-b border-[#202C33] text-left">
            <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-white text-xs font-bold shrink-0">
              C
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[#E9EDEF] truncate">
                Cliente Satisfeita
              </p>
              <p className="text-[10px] text-[#00A884]">online</p>
            </div>
          </div>

          {/* Balão de mensagem centralizado */}
          <div className="bg-[#005C4B] text-white p-3 rounded-2xl rounded-tl-sm text-left shadow-md max-w-[95%] mx-auto my-auto border border-[#02735E]/40">
            <p className="text-xs leading-relaxed text-[#E9EDEF]">
              {subtitle ||
                `"Gente, imprimi na papelaria aqui da rua no papel fotográfico 180g e ficou perfeito, gastei menos de R$ 15 para fazer os mimos das 25 crianças da sala!"`}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#A2B5AF]">
              <span>14:32</span>
              <span className="text-[#53BDEB]">✓✓</span>
            </div>
          </div>

          {/* Rótulo de placeholder discreto */}
          <div className="bg-[#111B21]/90 backdrop-blur rounded-lg px-2.5 py-1.5 border border-[#222E35] text-center">
            <span className="text-[10px] font-semibold tracking-wide text-[#00A884] uppercase block">
              {label}
            </span>
            <span className="text-[9px] text-[#8696A0]">
              Ideal: {dimensions} (Print 9:16)
            </span>
          </div>
        </div>
      ) : (
        // Visual limpo e elegante para produtos e amostras
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 max-w-[90%]">
          <div className="w-12 h-12 rounded-xl bg-white/90 shadow-sm flex items-center justify-center text-[#D31A2B] border border-inherit/40">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/80 text-[11px] font-bold tracking-wide uppercase shadow-xs border border-inherit/50">
              {label}
            </span>
            {subtitle && (
              <p className="text-xs font-medium text-[#4B5563] line-clamp-2 px-1">
                {subtitle}
              </p>
            )}
            <p className="text-[10px] opacity-75 font-mono">
              Dimensões recomendadas: {dimensions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
