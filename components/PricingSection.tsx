"use client";

import React, { useState } from "react";
import UpgradeModal from "./UpgradeModal";
import { appendCurrentUtms } from "@/utils/utm";

export default function PricingSection() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  // Link de checkout Cakto do Plano Completo R$ 19,90 com repasse de UTMs
  const checkoutCompletoUrl = appendCurrentUtms("https://pay.cakto.com.br/3dvuarj_1303549");

  const basicIncluded = [
    "50 Modelos Básicos de Lembrancinhas de Natal",
    "Arquivos em PDF (Tamanho A4)",
    "Impressão ilimitada",
    "Acesso imediato",
  ];

  const basicNotIncluded = [
    "Sem divisão pelas 4 Coleções Completas (250 modelos a menos)",
    "Sem versão editável no Canva (para colocar nome/@)",
    "Sem Bônus 1: Guia de Papéis e Impressão",
    "Sem Bônus 2: Coleção Ano Novo 2027",
    "Sem Bônus 3: Kit Cartinha do Papai Noel e Certificado",
    "Sem Bônus 4: 150 Tags e Etiquetas Natalinas",
  ];

  const completeIncluded = [
    { text: "Todos os 300 Modelos Exclusivos de Lembrancinhas de Natal", bold: true },
    { text: "As 4 Coleções Completas (Escolar, Clientes/Empresas, Cristã e Família)", bold: true },
    { text: "Duplo Formato: Arquivos em PDF Prontos para Imprimir + Links Editáveis no Canva Gratuito", bold: true },
    { text: "Configuração Folha A4 Econômica (Corte fácil na tesoura)", bold: false },
    { text: "🎁 BÔNUS 1: Guia Prático de Papéis, Colas e Impressão em Gráfica", bold: true, isBonus: true },
    { text: "🎁 BÔNUS 2: Coleção Especial Lembrancinhas de Ano Novo 2027", bold: true, isBonus: true },
    { text: "🎁 BÔNUS 3: Kit Cartinha do Papai Noel + Certificado Infantil", bold: true, isBonus: true },
    { text: "🎁 BÔNUS 4: 150 Modelos de Tags Natalinas + Etiquetas \"De/Para\"", bold: true, isBonus: true },
    { text: "Acesso Vitalício (Use neste Natal e nos próximos anos!)", bold: true },
    { text: "Garantia Incondicional de 30 Dias", bold: false },
  ];

  return (
    <section id="planos" className="bg-[#FAF2F0] py-12 px-4 sm:px-6 border-b border-[#F0E4E2] scroll-mt-12">
      <div className="max-w-[500px] mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] leading-tight mb-2">
            Escolha Seu Plano Abaixo e Receba Acesso Imediato
          </h2>
        </div>

        {/* Planos Empilhados */}
        <div className="space-y-8">
          {/* ================= CARD PLANO COMPLETO (MAIS ESCOLHIDO) ================= */}
          <div className="relative bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#D31A2B] shadow-xl pt-8">
            {/* Badge Superior Flutuante Dourada */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-slate-900 font-extrabold text-xs uppercase px-4 py-1.5 rounded-full shadow-badge flex items-center gap-1.5 whitespace-nowrap">
              <span>⭐</span>
              <span>MAIS ESCOLHIDO (94% DAS CLIENTES ESCOLHEM ESTE)</span>
            </div>

            {/* Cabeçalho do Card */}
            <div className="text-center pb-4 border-b border-[#F0E4E2]">
              <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-extrabold text-[#111827]">
                <span>🏆</span>
                <span>PLANO COMPLETO + TODOS OS BÔNUS</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-0.5">
                O pacote definitivo para quem não quer perder nenhum modelo
              </p>

              {/* Tag de Desconto */}
              <div className="mt-3">
                <span className="inline-block bg-[#15803D] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  🔥 Mais de 80% de Desconto — Pagamento Único!
                </span>
              </div>

              {/* Bloco de Preço */}
              <div className="mt-3">
                <span className="text-xs sm:text-sm text-[#9CA3AF] line-through block font-medium">
                  De R$ 97,00 por apenas:
                </span>
                <div className="flex items-baseline justify-center text-[#D31A2B] leading-none mt-1">
                  <span className="text-xl sm:text-2xl font-extrabold mr-1">R$</span>
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">19</span>
                  <span className="text-xl sm:text-2xl font-extrabold">,90</span>
                </div>
                <span className="text-xs font-semibold text-[#4B5563] block mt-1">
                  (ou 2x de R$ 10,38)
                </span>
              </div>
            </div>

            {/* Lista de Entregáveis e Bônus */}
            <div className="py-5 space-y-2.5">
              <p className="text-[11px] font-bold text-[#8C2730] uppercase tracking-wider mb-2">
                O que você recebe no Plano Completo:
              </p>
              {completeIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 p-2 rounded-xl text-xs sm:text-[13px] leading-snug transition-colors ${
                    item.isBonus
                      ? "bg-[#FAF2F0] border border-[#F0E4E2] text-[#8C2730]"
                      : "bg-[#F9FAFB] text-[#1F2937]"
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#E6F4EA] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#1E8E3E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className={item.bold ? "font-bold" : "font-normal"}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Botão de Compra Plano Completo Cakto R$ 19,90 */}
            <div className="pt-2">
              <a
                href={checkoutCompletoUrl}
                className="w-full py-4 px-4 rounded-full bg-[#D31A2B] hover:bg-[#B01221] active:scale-[0.98] text-white font-extrabold text-center text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 shadow-cta hover:shadow-ctaHover flex items-center justify-center gap-1.5 group cursor-pointer animate-cta-subtle"
              >
                <span>🟢 SIM! QUERO O KIT COMPLETO COM TODOS OS BÔNUS</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-base">
                  →
                </span>
              </a>
              <p className="mt-2 text-center text-[11px] text-[#4B5563] font-medium leading-relaxed">
                (Dica: Por apenas R$ 10 a mais que o básico, você leva 250 moldes extras, versão editável e todos os 4 bônus inclusos!)
              </p>
            </div>
          </div>

          {/* ================= CARD PLANO BÁSICO ================= */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5E7EB] shadow-sm">
            {/* Cabeçalho do Card */}
            <div className="text-center pb-4 border-b border-[#F3F4F6]">
              <div className="flex items-center justify-center gap-1.5 text-base sm:text-lg font-bold text-[#1F2937]">
                <span>🔹</span>
                <span>PLANO BÁSICO</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-0.5">
                (Para quem quer apenas alguns modelos simples)
              </p>

              {/* Preço Básico */}
              <div className="mt-3">
                <div className="flex items-baseline justify-center text-[#111827] leading-none">
                  <span className="text-lg font-bold mr-1">R$</span>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">9</span>
                  <span className="text-lg font-bold">,90</span>
                </div>
                <span className="text-xs text-[#6B7280] block mt-1 font-medium">
                  (Pagamento único)
                </span>
              </div>
            </div>

            {/* Lista de Inclusos & Não Inclusos */}
            <div className="py-4 space-y-2">
              {basicIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-1.5 rounded-lg text-xs leading-snug text-[#374151]"
                >
                  <div className="w-4 h-4 rounded-full bg-[#E6F4EA] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-[#1E8E3E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}

              {basicNotIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-1.5 rounded-lg text-xs leading-snug text-[#9CA3AF] opacity-80"
                >
                  <div className="w-4 h-4 rounded-full bg-[#FEE2E2] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#DC2626] text-[10px] font-bold">✕</span>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Botão Secundário do Plano Básico - ACIONA O MODAL DE UPSELL */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsUpgradeModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-[#F9FAFB] active:scale-[0.98] text-[#1F2937] font-bold text-center text-xs uppercase tracking-wide transition-all border-[1.5px] border-[#1F2937] flex items-center justify-center gap-1.5 group cursor-pointer"
              >
                <span>QUERO APENAS O BÁSICO</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Popup de Upgrade de Oferta (Upsell Pré-Checkout) */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        checkoutUpsellUrl="https://pay.cakto.com.br/5z3o6ug"
        checkoutBasicUrl="https://pay.cakto.com.br/3fr4s2c"
      />
    </section>
  );
}
