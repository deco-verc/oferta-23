import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import MechanismSection from "@/components/MechanismSection";
import AudienceSection from "@/components/AudienceSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import BonusSection from "@/components/BonusSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F2F5] sm:py-6 flex justify-center selection:bg-[#FCECE9] selection:text-[#C8102E]">
      {/* Container Mobile-First centralizado no Desktop mantendo a fidelidade exata de conversão */}
      <div className="w-full max-w-[520px] bg-white sm:shadow-2xl sm:rounded-3xl overflow-hidden border border-[#E5E7EB] flex flex-col relative">
        {/* BARRA DE TOPO (URGÊNCIA) */}
        <TopBar />

        {/* DOBRA 1: HERO SECTION */}
        <Hero />

        {/* DOBRA 2: QUEBRA DE OBJEÇÃO & MECANISMO */}
        <MechanismSection />

        {/* DOBRA 3: SEGMENTAÇÃO DE PÚBLICO */}
        <AudienceSection />

        {/* DOBRA 4: ESPECIFICIDADE (O QUE CABE DENTRO) */}
        <DeliverablesSection />

        {/* DOBRA 5: EMPILHAMENTO DE VALOR (OS BÔNUS) */}
        <BonusSection />

        {/* DOBRA 6: PROVA SOCIAL */}
        <SocialProofSection />

        {/* DOBRA 7: OFERTA E PLANOS */}
        <PricingSection />

        {/* DOBRA 8: GARANTIA */}
        <GuaranteeSection />

        {/* DOBRA 9: PERGUNTAS FREQUENTES (FAQ) */}
        <FaqSection />

        {/* DOBRA 10: RODAPÉ DE FECHAMENTO */}
        <Footer />
      </div>
    </main>
  );
}
