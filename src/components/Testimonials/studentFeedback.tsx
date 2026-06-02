import { useRef } from "react";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import dynamic from "next/dynamic";
const TestimonialSwiper = dynamic(() => import("./TestimonialSwiper"), {
  ssr: false,
});
import { Swiper as SwiperType } from "swiper";

function StudentFeedback() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex flex-col w-full md:flex-1 lg:w-[50%]">
      <div className="flex gap-[8px] mb-4 justify-end">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className="w-9 h-9 rounded-lg border border-gray-300 pt-[6.4px] pr-[10px] pb-[6.4px] pl-[10px] flex items-center justify-center cursor-pointer"
        >
          <IoIosArrowRoundBack size={36} className="text-black" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#FFCCC7] w-9 h-9 rounded-lg border border-[#F5222D] pt-[6.4px] pr-[10px] pb-[6.4px] pl-[10px] flex items-center justify-center cursor-pointer"
        >
          <IoIosArrowRoundForward size={36} className="text-[#F5222D]" />
        </button>
      </div>

      <TestimonialSwiper swiperRef={swiperRef} />
    </div>
  );
}

export default StudentFeedback;
