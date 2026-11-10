"use client";

import React, { useEffect, useState } from "react";
import { appendCurrentUtms } from "@/utils/utm";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUpsellUrl?: string; // Padrão: https://pay.cakto.com.br/5z3o6ug
  checkoutBasicUrl?: string;  // Padrão: https://pay.cakto.com.br/3fr4s2c
}

export default function UpgradeModal({
  isOpen,
  onClose,
  checkoutUpsellUrl = "https://pay.cakto.com.br/5z3o6ug",
  checkoutBasicUrl = "https://pay.cakto.com.br/3fr4s2c",
}: UpgradeModalProps) {
  const [finalUpsellUrl, setFinalUpsellUrl] = useState(checkoutUpsellUrl);
  const [finalBasicUrl, setFinalBasicUrl] = useState(checkoutBasicUrl);

  // Repassa automaticamente todos os parâmetros UTM da URL atual para os links da Cakto
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFinalUpsellUrl(appendCurrentUtms(checkoutUpsellUrl));
      setFinalBasicUrl(appendCurrentUtms(checkoutBasicUrl));
    }
  }, [checkoutUpsellUrl, checkoutBasicUrl, isOpen]);

  // Bloqueia o scroll da página enquanto o modal estiver aberto e escuta tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* Card do Modal */}
      <div
        className="relative w-full max-w-[440px] bg-white rounded-3xl border-2 border-[#D31A2B] shadow-2xl overflow-hidden animate-modal-scale my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Faixa Superior de Urgência */}
        <div className="bg-[#F59E0B] text-slate-950 font-black text-xs sm:text-[13px] tracking-wide uppercase py-3 px-8 text-center flex items-center justify-center gap-1.5 shadow-sm">
          <span>✋</span>
          <span>ESPERE! OFERTA SECRETA DESBLOQUEADA</span>
        </div>

        {/* Botão Fechar "X" Discreto */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal e voltar"
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 text-slate-900 flex items-center justify-center transition-colors text-sm font-bold z-10"
        >
          ✕
        </button>

        {/* Conteúdo Principal */}
        <div className="p-5 sm:p-6 text-center">
          {/* Título em Destaque */}
          <h3
            id="upgrade-modal-title"
            className="text-lg sm:text-xl font-extrabold text-[#111827] leading-tight mb-2"
          >
            Por apenas <span className="text-[#D31A2B] underline decoration-[#D31A2B]/40">+ R$ 5,00</span> leve o{" "}
            <span className="text-[#D31A2B]">KIT COMPLETO</span> com TODOS os Bônus!
          </h3>

          {/* Texto Curto */}
          <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed mb-4">
            Não leve o kit pela metade! Liberamos um desconto exclusivo para você atualizar seu pedido de{" "}
            <span className="line-through text-[#9CA3AF]">R$ 19,90</span> por apenas{" "}
            <strong className="text-[#16A34A] font-bold">R$ 14,90</strong>:
          </p>

          {/* Box de Benefícios Resumido */}
          <div className="bg-[#F2F8F5] border border-[#D8ECE1] rounded-2xl p-3.5 mb-4 text-left shadow-2xs">
            <p className="text-[11px] font-bold text-[#0F5132] uppercase tracking-wider mb-2">
              Você vai receber imediatamente:
            </p>
            <ul className="space-y-1.5 text-xs text-[#1F2937]">
              <li className="flex items-start gap-2">
                <span className="text-[#16A34A] font-bold shrink-0">✅</span>
                <span>
                  <strong>Todos os 300 Moldes</strong> (As 4 Coleções Completas)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16A34A] font-bold shrink-0">✅</span>
                <span>
                  <strong>Versão PDF + Editável</strong> no Canva Gratuito
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#16A34A] font-bold shrink-0">✅</span>
                <span>
                  <strong>Todos os 4 Bônus Inclusos</strong> (Guia de Papéis + Ano Novo 2027 + Cartinha + 150 Tags)
                </span>
              </li>
            </ul>
          </div>

          {/* Preço de Destaque */}
          <div className="mb-5">
            <span className="text-xs text-[#9CA3AF] line-through block font-medium">
              De R$ 19,90 por apenas:
            </span>
            <div className="flex items-baseline justify-center text-[#16A34A] leading-none mt-1">
              <span className="text-xl font-extrabold mr-1">R$</span>
              <span className="text-4xl sm:text-5xl font-black tracking-tight">14</span>
              <span className="text-xl font-extrabold">,90</span>
            </div>
            <span className="text-[11px] font-bold text-[#0F5132] bg-[#E6F4EA] px-2.5 py-0.5 rounded-full inline-block mt-1">
              ⚡ Pagamento Único • Acesso Vitalício
            </span>
          </div>

          {/* Botões de Ação */}
          <div className="space-y-3">
            {/* Botão Principal Grande Verde de Aceite R$ 14,90 */}
            <a
              href={finalUpsellUrl}
              className="w-full py-4 px-4 rounded-full bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-extrabold text-sm sm:text-[15px] uppercase tracking-wide transition-all duration-300 shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 group cursor-pointer animate-pulse-green"
            >
              <span>SIM! QUERO O COMPLETO POR R$ 14,90</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                →
              </span>
            </a>

            {/* Link Secundário de Recusa R$ 9,90 */}
            <div>
              <a
                href={finalBasicUrl}
                className="inline-block text-[12px] sm:text-[13px] text-[#6B7280] hover:text-[#374151] underline underline-offset-2 transition-colors leading-relaxed px-2 py-1 cursor-pointer"
              >
                Não, obrigado. Quero continuar apenas com os 50 modelos básicos por R$ 9,90 (sem bônus).
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
