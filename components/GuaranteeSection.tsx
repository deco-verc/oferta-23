import React from "react";

export default function GuaranteeSection() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto">
        <div className="bg-[#F2F8F5] border border-[#D8ECE1] rounded-2xl p-6 sm:p-7 text-center relative shadow-xs">
          {/* Banner de Garantia 30 Dias */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/decoimgsfunil/garantia_30d.webp"
            alt="Garantia Incondicional"
            className="w-full max-w-xs h-auto mx-auto mb-4"
            loading="lazy"
          />

          {/* Título da Garantia */}
          <div className="inline-block px-3 py-1 rounded-full bg-[#E6F4EA] text-[#0F5132] text-xs font-bold uppercase tracking-wider mb-2">
            100% Livre de Risco
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-snug mb-3">
            🛡️ Risco Zero: Garantia Incondicional de 30 Dias
          </h2>

          {/* Texto Integral da Copy Atualizado para 30 Dias */}
          <p className="text-xs sm:text-[14px] text-[#374151] leading-relaxed">
            Você pode baixar todo o material, abrir os moldes e testar. Se por qualquer motivo achar que os arquivos não são para você, basta enviar um único e-mail ou mensagem dentro de 30 dias e <strong>devolveremos 100% do seu dinheiro</strong>, sem perguntas e sem burocracia.
          </p>

          <div className="mt-4 pt-4 border-t border-[#D8ECE1]/60 flex items-center justify-center gap-2 text-xs font-semibold text-[#0F5132]">
            <span>✓ Devolução Simples</span>
            <span>•</span>
            <span>✓ Reembolso Total</span>
            <span>•</span>
            <span>✓ Satisfação Garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
