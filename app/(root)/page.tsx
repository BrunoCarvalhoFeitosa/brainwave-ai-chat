import { HomeHeroSection } from "@/app/(root)/_components/home-hero-section"
import { HomeAdvantagesSection } from "@/app/(root)/_components/home-advantages-section"
import { HomeCollaborationSection } from "@/app/(root)/_components/home-collaboration-section"
import { HomeHowToUseSection } from "@/app/(root)/_components/home-how-to-use-section"
import { HomePriceSection } from "@/app/(root)/_components/home-price-section"
import { HomePlanetsSection } from "./_components/home-planets-section"

const HomePage = () => {
  return (
    <main>
      <HomeHeroSection />
      <HomeAdvantagesSection />
      <HomeCollaborationSection />
      <HomeHowToUseSection />
      <HomePriceSection />
      <HomePlanetsSection />
    </main>
  )
}

export default HomePage