import React from "react";
import Image from "next/image";
import type { CardBenefit } from "../../data";

type Props = {
  benefits: CardBenefit[];
  backgroundColor: string;
};

function CardBenefitsList({ benefits, backgroundColor }: Props) {
  return (
    <div className="lg:max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] justify-items-center">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className={`${backgroundColor} px-5 py-8 rounded-lg w-[250px] md:w-[310px] h-[273px]`}
        >
          <Image
            src={benefit.iconPath}
            alt={benefit.title}
            width={40}
            height={40}
            className="font-bold py-1"
          />
          <h3 className="text-sm font-bold text-black py-4">{benefit.title}</h3>
          <p className="text-sm text-black">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardBenefitsList;
