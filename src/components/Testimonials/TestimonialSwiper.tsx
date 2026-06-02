import Image from "next/image";
import { useState, RefObject } from "react"; // add RefObject here
import { Swiper as SwiperType } from "swiper"; // move up, grouped with react imports
import { userTestimonials } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 1. Define the prop type

type Props = {
  swiperRef: RefObject<SwiperType | null>; // ✅ uses named import
};

function TestimonialSwiper({ swiperRef }: Props) {
  const [activeItem, setActiveItem] = useState<
    (typeof userTestimonials)[0] | null
  >(null);

  return (
    <div className="">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination]}
      >
        {userTestimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="">
              <div className="">
                <p className="text-black mb-6 min-h-[80px] text-left">
                  {item.feedback}
                </p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex items-center gap-[8px]">
                  <div>
                    <Image
                      alt="studentImage"
                      src="./Images/Testimonial/studentImage.svg"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-black font-bold">{item.studentName}</p>
                    <p className=" text-sm text-[#8c8c8c]">
                      Học viêm khóa {item.yearOfIntake}
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setActiveItem(item)}
                    className="w-25 h-10 rounded-lg text-[#8c8c8c] hover:text-[#f5222d] border border-[#8c8c8c] pt-[5.4px] pr-[10px] pb-[5.4px] pl-[10px] flex items-center justify-center cursor-pointer"
                  >
                    Kết quả thi
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeItem && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveItem(null);
          }}
          className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center lg:px-0"
        >
          <Image
            alt={activeItem.studentName}
            src={activeItem.testResult}
            width={600}
            height={1000}
          />
        </div>
      )}
    </div>
  );
}

export default TestimonialSwiper;
