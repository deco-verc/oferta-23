"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro aberto por padrão para facilitar leitura

  const faqs = [
    {
      question: "1. Como e quando recebo o acesso aos arquivos?",
      answer:
        "O acesso é imediato e automático! Assim que o pagamento for confirmado (no PIX ou Cartão leva menos de 1 minuto), você recebe no seu E-mail e WhatsApp o link de acesso à nossa área organizada com todos os moldes prontos para baixar no celular ou computador.",
    },
    {
      question: "2. Preciso ter máquina de corte (Silhouette) para fazer as lembrancinhas?",
      answer:
        "Não! Todos os nossos 300 moldes foram desenhados especificamente para corte fácil na tesoura comum. As linhas de corte e dobra já vêm marcadas para facilitar a montagem.",
    },
    {
      question: "3. Não tenho impressora em casa. Consigo fazer mesmo assim?",
      answer:
        "Com certeza! Como os arquivos já estão em formato PDF padronizado em folha A4, basta você baixar no seu celular e enviar pelo WhatsApp para qualquer papelaria, lan house ou gráfica rápida perto da sua casa. No Bônus 1, ensinamos exatamente qual papel pedir para ficar lindo e baratinho!",
    },
    {
      question: "4. Qual papel devo usar para imprimir?",
      answer:
        "Você pode imprimir em Papel Fotográfico (Glossy ou Matte) de 180g ou Papel Offset 180g (aquele branquinho fosco mais firme que folha sulfite). Eles funcionam em qualquer impressora caseira comum e custam centavos por folha. Explicamos tudo em detalhes no nosso Guia Bônus!",
    },
    {
      question: "5. Preciso saber mexer no Canva ou em programas de edição?",
      answer:
        "Não precisa! Todos os 300 modelos já vêm em PDF Prontos para Imprimir — é literalmente clicar e mandar imprimir. Porém, no Plano Completo, nós também enviamos o link do Canva Gratuito caso você queira adicionar o nome do seu filho, da sua escola ou o @ da sua loja antes de imprimir.",
    },
    {
      question: "6. Posso imprimir quantas vezes eu quiser? Inclusive para vender?",
      answer:
        "Sim! O seu acesso no Plano Completo é vitalício e a impressão é 100% ilimitada. Você pode imprimir para presentear sua família, seus alunos, seus clientes ou até mesmo montar as lembrancinhas físicas para vender na sua cidade e fazer uma excelente renda extra neste Natal!",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-7">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF2F0] text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl font-extrabold text-[#111827] leading-tight mb-2">
            ❓ Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563]">
            Tudo o que você precisa saber antes de baixar seu kit
          </p>
        </div>

        {/* Acordeão de Perguntas */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-[10px] border border-[#EAEAEA] shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-[#111827] hover:text-[#C8102E] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span
                    className={`w-6 h-6 rounded-full bg-[#F3F4F6] flex items-center justify-center shrink-0 text-sm text-[#4B5563] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FCECE9] text-[#C8102E]" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-[#4B5563] leading-relaxed border-t border-[#F3F4F6] bg-[#FAFAFA]/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
