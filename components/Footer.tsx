"use client";

import React from "react";
import CtaButton from "./CtaButton";

export default function Footer() {
  return (
    <footer className="bg-[#0F5132] text-white pt-10 pb-8 px-4 sm:px-6">
      <div className="max-w-[500px] mx-auto text-center flex flex-col items-center">
        {/* Chamada Final */}
        <div className="mb-6">
          <span className="text-3xl mb-2 block">🎄</span>
          <h3 className="text-lg sm:text-xl font-extrabold leading-snug mb-2 text-[#F2F8F5]">
            Não deixe para a última hora! Economize tempo e dinheiro neste Natal com lembrancinhas que todo mundo vai amar receber.
          </h3>
          <p className="text-xs text-[#D8ECE1]">
            Acesso vitalício aos +300 moldes + 4 bônus exclusivos por apenas R$ 19,90.
          </p>
        </div>

        {/* CTA Final direto para o Checkout Cakto do Plano Completo R$ 19,90 */}
        <div className="w-full mb-8">
          <CtaButton
            text="🟢 GARANTIR MEU KIT COMPLETO POR R$ 19,90"
            href="https://pay.cakto.com.br/3dvuarj_1303549"
            pulse={false}
          />
        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-[#114B2F] mb-6" />

        {/* Garantias & Formas de Pagamento Seguras */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#A2B5AF] mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-[#53BDEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Pagamento 100% Criptografado
          </span>
          <span>•</span>
          <span>Liberação Imediata</span>
          <span>•</span>
          <span>PIX e Cartão de Crédito</span>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-[#A2B5AF]">
          © 2026 — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
