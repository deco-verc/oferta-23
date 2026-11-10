import React from "react";

export default function BonusSection() {
  const bonuses = [
    {
      num: 1,
      title: 'Guia "O Segredo do Papel Perfeito" (Impressão em Casa ou na Gráfica)',
      originalPrice: "R$ 19,90",
      description:
        "Não sabe qual papel comprar? Neste guia rápido e direto ao ponto, você descobre qual é o papel mais barato e firme que vende em qualquer papelaria, qual cola usar para não manchar e como mandar o PDF pelo WhatsApp para qualquer gráfica rápida imprimir por centavos caso você não tenha impressora em casa!",
      imgSrc: "https://ik.imagekit.io/decoimgsfunil/b1.webp",
      imgAlt: "Bônus 1 - Guia de Papéis e Impressão",
    },
    {
      num: 2,
      title: "Coleção Especial Réveillon & Ano Novo 2027",
      originalPrice: "R$ 27,00",
      description:
        'Já garanta também as festas de fim de ano! Receba moldes de Porta-Bombom da Sorte, Caixinhas da Prosperidade, Porta-Moedinha de Chocolate e Tags de "Feliz 2027" em tons dourados e brancos.',
      imgSrc: "https://ik.imagekit.io/decoimgsfunil/bonus2.webp",
      imgAlt: "Bônus 2 - Lembrancinhas de Ano Novo 2027",
    },
    {
      num: 3,
      title: "Kit Magia Infantil (Cartinha do Papai Noel + Certificado)",
      originalPrice: "R$ 14,90",
      description:
        'As crianças ficam encantadas! Inclui modelos de Cartinhas para escrever ou receber do Papai Noel + o famoso "Certificado Oficial de Criança Comportada no Ano" pronto para imprimir e preencher o nome da criança.',
      imgSrc: "https://ik.imagekit.io/decoimgsfunil/bonus3.webp",
      imgAlt: "Bônus 3 - Kit Cartinha do Papai Noel e Certificado",
    },
    {
      num: 4,
      title: 'Mega Pack com 150 Tags Natalinas + Etiquetas "De: / Para:"',
      originalPrice: "R$ 19,90",
      description:
        '150 modelos de tags (redondas, quadradas e formato etiqueta) com mensagens cristãs, corporativas e familiares para amarrar em sacolinhas, panetones ou colar nos presentes da árvore de Natal.',
      imgSrc: "https://ik.imagekit.io/decoimgsfunil/bonus_4.webp",
      imgAlt: "Bônus 4 - 150 Tags e Etiquetas de Natal",
    },
  ];

  return (
    <section className="bg-[#FDF6F5] py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto">
        {/* Cabeçalho da Dobra de Bônus */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-[#E6F4EA] text-[#0F5132] text-xs font-bold uppercase tracking-wider mb-2">
            Presentes Especiais Para Você
          </span>
          <h2 className="text-2xl font-extrabold text-[#111827] leading-tight mb-2">
            🎁 Levando o Kit Completo Hoje, Você Recebe 4 Bônus Exclusivos (Grátis):
          </h2>
          <p className="text-sm text-[#4B5563]">
            Mais de <strong className="text-[#C8102E]">R$ 81,70</strong> em materiais extras que você não paga nada a mais por eles!
          </p>
        </div>

        {/* Lista de Bônus em Estilo Pílulas / Cards com Borda Suave */}
        <div className="space-y-5">
          {bonuses.map((bonus) => (
            <div
              key={bonus.num}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0E4E2] shadow-card relative overflow-hidden"
            >
              {/* Topo do Card de Bônus */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FCECE9] text-[#C8102E] font-extrabold text-xs flex items-center justify-center shrink-0">
                    {bonus.num}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wide text-[#C8102E]">
                    BÔNUS {bonus.num}
                  </span>
                </div>
                {/* Badge de Preço Riscado e Grátis */}
                <div className="text-right">
                  <span className="text-[11px] text-[#9CA3AF] line-through block leading-none">
                    Valor: {bonus.originalPrice}
                  </span>
                  <span className="text-xs font-extrabold text-[#15803D] uppercase bg-[#E6F4EA] px-2 py-0.5 rounded-full inline-block mt-0.5">
                    HOJE: GRÁTIS
                  </span>
                </div>
              </div>

              {/* Título do Bônus com 🎁 */}
              <h3 className="text-[15px] font-bold text-[#111827] leading-snug mb-3 flex items-start gap-1.5">
                <span className="text-base shrink-0">🎁</span>
                <span>{bonus.title}</span>
              </h3>

              {/* Imagem Real do Bônus */}
              <div className="my-3 overflow-hidden rounded-xl shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bonus.imgSrc}
                  alt={bonus.imgAlt}
                  loading="lazy"
                  className="w-full h-auto rounded-xl mx-auto shadow-xs"
                />
              </div>

              {/* Descrição Detalhada em Card / Pill */}
              <div className="bg-[#FAF2F0] p-3 rounded-xl border border-[#F0E4E2] mt-3">
                <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
