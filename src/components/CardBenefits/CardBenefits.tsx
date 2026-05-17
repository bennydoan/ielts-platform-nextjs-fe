import React from "react";
import { cardBenefits } from "../../data";
import CardBenefitsList from "./CardBenefitsList";
import Link from "next/link";
import styles from "./CardBenefits.module.css";

const CardBenefits: React.FC = () => {
  return (
    <div className="flex justify-center flex-col bg-[#FFF1E1] px-[106px] py-[96] mw-[1440px] mh-[1500px]">
      <h1
        className={`${styles.header} text-black text-center text-2xl md:text-5xl font-bold leading-normal my-5 tracking-tight`}
      >
        Luyện thi IELTS dễ dàng
        <br />
        Tiết kiệm thời gian, đạt kết quả thật
      </h1>
      <h2
        className={`${styles.header} text-1xl md:text-2xl text-center text-gray-400 max-w-2xl mx-auto mb-10`}
      >
        Nền tảng luyện thi trực tuyến giúp bạn học hiệu quả hơn, tiết kiệm chi
        phí và hướng đến kết quả đầu ra thực tế.
      </h2>
      <CardBenefitsList benefits={cardBenefits} />
      <div className="mx-auto text-center my-10">
        <Link
          href="/about-us"
          className="inline-flex items-center justify-center group cursor-pointer"
        >
          <span className="relative inline-block">
            <span className="text-sm text-red-500 group-hover:scale-105 transform transition duration-200 font-medium inline-block">
              Tìm hiểu thêm
            </span>
            <span className="absolute left-0 top-full text-red-500 translate-y-[5px] h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300"></span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block ml-2 text-red-500 group-hover:scale-110 transform transition duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CardBenefits;
