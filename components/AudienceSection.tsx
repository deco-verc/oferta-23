import React from "react";

export default function AudienceSection() {
  const collections = [
    {
      num: "1",
      icon: "👩‍🏫",
      title: "Linha Escolar e Infantil",
      target: "(Para Professoras e Mães)",
      description:
        "Caixinhas lúdicas de Papai Noel, Rena, Boneco de Neve, ponteiras de lápis e mimos baratos para encantar turmas inteiras de alunos sem pesar no seu bolso.",
      highlight: "Ideal para turmas e crianças",
    },
    {
      num: "2",
      icon: "🛍️",
      title: "Linha Mimos para Clientes e Equipe",
      target: "(Para Lojistas, Estética, Manicures e Empresas)",
      description:
        'Embalagens elegantes com frases de "Obrigado pela parceria neste ano" e "Boas Festas". O mimo perfeito de centavos que fideliza clientes e valoriza sua marca.',
      highlight: "Fidelize e encante seus clientes",
    },
    {
      num: "3",
      icon: "⛪",
      title: "Linha Natal Cristão",
      target: "(Para Igrejas, Células e Ministério Infantil)",
      description:
        "Artes emocionantes focadas no verdadeiro sentido do Natal: Presépio, Menino Jesus, versículos bíblicos e mensagens de fé e esperança.",
      highlight: "O verdadeiro sentido do Natal",
    },
    {
      num: "4",
      icon: "🎄",
      title: "Linha Ceia em Família e Amigos",
      target: "(Para Anfitriãs e Confraternizações)",
      description:
        "Lembrancinhas de mesa posta, mimos para amigo secreto, colegas de trabalho e vizinhos para ninguém ficar de mãos vazias na noite de Natal.",
      highlight: "Mesa posta & confraternização",
    },
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto">
        {/* Cabeçalho da Dobra */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FAF2F0] text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-2">
            Organizado em 4 Coleções Prontas
          </span>
          <h2 className="text-2xl font-extrabold text-[#111827] leading-tight mb-2">
            Um Kit Completo Pensado Para Todas as Ocasiões
          </h2>
          <p className="text-sm sm:text-[15px] text-[#4B5563] leading-relaxed">
            Não importa para quem você vai entregar, os <strong>300 modelos</strong> já estão divididos em <strong>4 Coleções Exclusivas</strong> para você achar o que precisa em segundos:
          </p>
        </div>

        {/* Cards das 4 Coleções */}
        <div className="space-y-4">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0E4E2] shadow-card hover:shadow-cardHover transition-all flex flex-col gap-2.5 relative"
            >
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF2F0] border border-[#F0E4E2] flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5 flex-wrap">
                    <span className="text-[11px] font-bold text-[#C8102E] uppercase tracking-wide">
                      Coleção {item.num}
                    </span>
                    <span className="text-[10px] font-semibold text-[#0F5132] bg-[#E6F4EA] px-2 py-0.5 rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#C8102E] block mb-1.5">
                    {item.target}
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
