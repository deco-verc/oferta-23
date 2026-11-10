import React from "react";

export default function DeliverablesSection() {
  const items = [
    {
      title: "Porta-Bombom",
      detail: "(Sonho de Valsa, Ouro Branco, Serenata, Ferrero Rocher)",
      tag: "Mais vendido",
    },
    {
      title: "Porta-Bis",
      detail: "(Individual, Duplo e Caixa de Bis inteira encapada)",
      tag: "Econômico",
    },
    {
      title: "Porta-KitKat e Barra de Chocolate",
      detail: "(Medidas exatas para barras tradicionais)",
      tag: "Sucesso garantido",
    },
    {
      title: "Porta-Sabonete Redondo",
      detail:
        "(Natura, Avon, Boticário – o campeão para presentear mulheres!)",
      tag: "Presente afetivo",
    },
    {
      title: "Cards para Balinha, Moeda de Chocolate, Batom Garoto e Pirulito",
      detail: "(Mimos rápidos que custam centavos)",
      tag: "Mimo de centavos",
    },
    {
      title: "Caixas Presenteáveis",
      detail:
        "(Caixa Milk, Caixa Pirâmide, Caixa Coração, Sacolinhas e Porta-Mini Panetone)",
      tag: "Linha Luxo",
    },
  ];

  return (
    <section className="bg-[#FAF2F0] py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto">
        {/* Cabeçalho da Dobra */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-[#111827] leading-tight mb-2">
            Moldes na Medida Exata Para Doces e Mimos que Você Acha em Qualquer Mercado
          </h2>
          <p className="text-sm sm:text-[15px] text-[#4B5563] leading-relaxed">
            Você não precisa comprar recheios caros. Nossos moldes foram projetados sob medida para:
          </p>
        </div>

        {/* Imagem Real de Medidas Testadas e Aprovadas */}
        <div className="mb-6 overflow-hidden rounded-xl shadow-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ik.imagekit.io/decoimgsfunil/Medidas_Testadas___Aprovadas.webp"
            alt="Medidas Testadas e Aprovadas para Doces"
            loading="lazy"
            className="w-full h-auto rounded-xl mx-auto shadow-xs"
          />
        </div>

        {/* Lista no estilo 'Pílulas Empilhadas' do Design System */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#F0E4E2] shadow-xs flex items-center gap-3 transition-transform hover:-translate-y-0.5"
            >
              {/* Ícone de Check nos Cards: Círculo verde pastel claro com check verde */}
              <div className="w-8 h-8 rounded-full bg-[#E6F4EA] flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-[#1E8E3E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.8}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Conteúdo textual */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <p className="text-sm font-bold text-[#111827] leading-tight">
                    {item.title}
                  </p>
                </div>
                <p className="text-xs text-[#4B5563] leading-snug mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
