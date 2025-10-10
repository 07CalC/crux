import { PartnersSection } from "../components/home/PartnersSections";
import { StudentReviewsSection } from "../components/home/StudentReviewsSection";
import { CutoffSection } from "../components/home/CutoffSection";
import { BonkSection } from "../components/home/BonkSection";
import { CtaSection } from "../components/home/CtaSection";
import { ComingSoonSection } from "../components/home/ComingSoonSection";
import { StatsSection } from "../components/home/StatsSection";
import { WarningsSection } from "../components/home/WarningsSection";
import { HeroSection } from "../components/home/HeroSection";
import { SurveySection } from "../components/home/SurveySection";


export default async function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <HeroSection />
      <SurveySection />
      <WarningsSection />
      <StatsSection />
      <CutoffSection />
      <StudentReviewsSection />
      <BonkSection />
      <PartnersSection />
      <ComingSoonSection />
      <CtaSection />
    </div>
  );
}
