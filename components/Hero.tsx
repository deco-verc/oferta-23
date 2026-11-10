import React from "react";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="bg-white pt-6 pb-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto flex flex-col items-center text-center">
        {/* Pré-Headline */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF2F0] border border-[#F0E4E2] text-xs font-semibold text-[#8C2730] mb-4 shadow-2xs">
          <span>✨</span>
          <span>Sem precisar de máquina de corte • Folha A4 comum • Corte fácil na tesoura</span>
        </div>

        {/* Headline Principal */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] leading-[1.2] tracking-tight mb-3">
          Transforme <span className="text-[#C8102E]">Folhas A4</span> e{" "}
          <span className="text-[#C8102E]">Doces Simples</span> de Mercado em{" "}
          <span className="text-[#C8102E]">Lembrancinhas de Natal Inesquecíveis!</span>
        </h1>

        {/* Sub-headline */}
        <div className="text-[15px] sm:text-base text-[#4B5563] leading-relaxed mb-6 font-normal space-y-1.5">
          <p>
            Tenha acesso imediato a <strong>+300 Moldes de Natal Prontos para Editar e Imprimir</strong>.
          </p>
          <p>
            Lembrancinhas rápidas, bonitas e econômicas para presentear alunos, clientes, membros da igreja, amigos e familiares gastando centavos!
          </p>
        </div>

        {/* Imagem Mockup Principal da Hero (carregamento prioritário, sem lazy) */}
        <div className="w-full mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/decoimgsfunil/Hero_sec.webp"
            alt="Kit Lembrancinhas de Natal Prontas para Imprimir"
            className="w-full h-auto rounded-2xl shadow-md mx-auto"
          />
        </div>

        {/* CTA Button */}
        <div className="w-full">
          <CtaButton
            text="🟢 QUERO BAIXAR MEU KIT DE NATAL AGORA"
            subtext="(Acesso imediato via E-mail e WhatsApp logo após o pagamento)"
            targetId="planos"
          />
        </div>

        {/* Micro-prova / Badges de confiança */}
        <div className="mt-5 flex items-center justify-center gap-4 text-[12px] text-[#6B7280]">
          <span className="flex items-center gap-1 font-medium">
            <svg className="w-4 h-4 text-[#1E8E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Acesso Imediato
          </span>
          <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
          <span className="flex items-center gap-1 font-medium">
            <svg className="w-4 h-4 text-[#1E8E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Garantia de 30 Dias
          </span>
          <span className="w-1 h-1 bg-[#D1D5DB] rounded-full" />
          <span className="flex items-center gap-1 font-medium">
            <svg className="w-4 h-4 text-[#1E8E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Compra Segura
          </span>
        </div>
      </div>
    </section>
  );
}
