import CardBenefitsList from "../CardBenefits/CardBenefitsList";
import { cardBenefits } from "../../data";

type Prop = {
  text1: string;
  text2: string;
};
function WhyChoosingUs({ text1, text2 }: Prop) {
  return (
    <div className="flex flex-col gap-10 mx-auto">
      <div className="flex flex-col gap-6 lg:w-[40%]">
        <h1 className="font-bold text-black text-3xl">
          Vì sao chọn chúng tôi?
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-black">{text1}</p>
          <p className="text-black">{text2}</p>
        </div>
      </div>

      {/* for CTA */}
      <CardBenefitsList
        benefits={cardBenefits}
        backgroundColor="bg-[#f0f0f0]"
      />
    </div>
  );
}

export default WhyChoosingUs;
