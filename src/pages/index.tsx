import { CallToActionSlider } from "@/components";
import { ctaSlidesMock } from "@/data";
import { CardCTA, CardBenefits } from "../components";
import { FeatureBox } from "@/components";

export default function Home() {
  return (
    <main className="bg-white">
      <FeatureBox />
      <CardBenefits />
      <section className="mx-auto w-full max-w-[1440px] px-4 py-6">
        <div className="rounded-3xl bg-white overflow-hidden">
          <CallToActionSlider slides={ctaSlidesMock} intervalMs={4500} />
        </div>
      </section>
      <CardCTA />
    </main>
  );
}