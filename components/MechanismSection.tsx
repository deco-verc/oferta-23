import React from "react";

export default function MechanismSection() {
  const steps = [
    {
      step: "Passo 1",
      icon: "📲",
      title: "Escolha e Baixe",
      description:
        "Acesse os arquivos pelo celular ou computador organizados por categorias. Quer colocar seu nome ou @ da loja? Use a versão editável em 1 clique no Canva Gratuito. Não quer editar nada? Baixe o PDF pronto!",
      extraHighlight: "📱 100% compatível com qualquer celular!",
      tag: "100% Organizado",
    },
    {
      step: "Passo 2",
      icon: "🖨️",
      title: "Imprima em Casa ou na Papelaria",
      description:
        "Todos os moldes já estão configurados no tamanho exato da Folha A4 comum, diagramados para caber o máximo de lembrancinhas por folha e economizar papel e tinta.",
      tag: "Economia Máxima de Tinta",
    },
    {
      step: "Passo 3",
      icon: "✂️",
      title: "Corte na Tesoura e Encante!",
      description:
        "Moldes com linhas de corte reto e dobra fáceis. Basta recortar com uma tesoura comum, colar, colocar o doce dentro e sua lembrancinha está pronta em menos de 3 minutos!",
      extraNote:
        "Qualquer pessoa consegue montar! Os próprios moldes já vêm com marcações visuais indicando exatamente onde cortar (linha contínua), onde dobrar (linha pontilhada) e onde passar a cola.",
      tag: "Pronto em < 3 Minutos",
    },
  ];

  return (
    <section className="bg-[#FDF6F5] py-10 px-4 sm:px-6 border-b border-[#F0E4E2]">
      <div className="max-w-[500px] mx-auto">
        {/* Título da Dobra */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FCECE9] text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-2">
            Simples, Rápido e Econômico
          </span>
          <h2 className="text-2xl font-extrabold text-[#111827] leading-tight mb-2">
            Esqueça os Presentes Caros ou Moldes Difíceis de Montar!
          </h2>
          <p className="text-sm sm:text-[15px] text-[#4B5563] leading-relaxed">
            Você não precisa gastar uma fortuna comprando lembrancinhas prontas e nem passar horas tentando criar artes do zero.
          </p>

          {/* Box de Destaque Suave */}
          <div className="mt-4 p-3.5 rounded-xl bg-white border border-[#F0E4E2] text-xs sm:text-[13px] text-[#4B5563] leading-relaxed text-center shadow-xs">
            Chega de perder horas no Pinterest baixando imagens borradas, no tamanho errado e difíceis. São <strong className="text-[#111827] font-bold">300 moldes de qualidade</strong>, com medidas já testadas e prontos para imprimir sem dor de cabeça.
          </div>
        </div>

        {/* Imagem Real de Praticidade dos Moldes */}
        <div className="mb-8">
          <p className="text-xs font-bold text-[#8C2730] uppercase tracking-wide text-center mb-3">
            ✨ Veja a praticidade dos moldes prontos:
          </p>
          <div className="w-full overflow-hidden rounded-xl shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ik.imagekit.io/decoimgsfunil/eja_a_praticidade_dos_moldes_prontos.webp"
              alt="Veja a praticidade dos moldes prontos"
              loading="lazy"
              className="w-full h-auto rounded-xl mx-auto shadow-xs"
            />
          </div>
        </div>

        {/* Subtítulo do Sistema */}
        <div className="bg-white p-3.5 rounded-xl border border-[#F0E4E2] text-center mb-6 shadow-xs">
          <p className="text-xs sm:text-sm font-bold text-[#111827]">
            Nosso kit foi desenvolvido com o:
          </p>
          <p className="text-base sm:text-lg font-extrabold text-[#C8102E]">
            ⚡ Sistema Folha A4 Descomplicado
          </p>
        </div>

        {/* Cards dos 3 Passos */}
        <div className="space-y-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-[#F0E4E2] shadow-card hover:shadow-cardHover transition-all relative overflow-hidden"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#FAF2F0] border border-[#F0E4E2] flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-semibold bg-[#E6F4EA] text-[#1E8E3E] px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Destaque do Passo 1 */}
                  {item.extraHighlight && (
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E6F4EA] text-[#0F5132] text-xs font-bold border border-[#D8ECE1]">
                      <span>{item.extraHighlight}</span>
                    </div>
                  )}

                  {/* Complemento do Passo 3 */}
                  {item.extraNote && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-[#FAF2F0] border border-[#F0E4E2] text-xs leading-relaxed text-[#4B5563]">
                      <strong className="text-[#C8102E] font-bold block mb-0.5">
                        Qualquer pessoa consegue montar!
                      </strong>
                      Os próprios moldes já vêm com marcações visuais indicando exatamente onde cortar (linha contínua), onde dobrar (linha pontilhada) e onde passar a cola.
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
