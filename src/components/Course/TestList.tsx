import Image from "next/image";
import { courseDatas, ListOfBGColour } from "@/data/Course";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import TestCard from "./TestCard";

function TestList({ categoryShown }: { categoryShown: string | null }) {
  //reference to the swiper to use in the btn onClick
  const swiperRef = useRef<SwiperType | null>(null);
  // this is the category filter
  // limit to 10
  const filteredCategory = categoryShown
    ? courseDatas
        .filter((course) => course.category === categoryShown)
        .slice(0, 10)
    : courseDatas.slice(0, 10);

  return (
    <div className="flex flex-row mb-8">
      {/* button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="flex items-center cursor-pointer shrink-0"
      >
        <Image
          src="/images/Course/Pagination-Prev.svg"
          alt="nextBtn"
          width={48}
          height={48}
          onClick={() => swiperRef.current?.slidePrev()}
        />
      </button>

      <div className="w-[90%] lg:w-[81%] mx-auto flex items-center flex-row gap-4 overflow-x-hidden overflow-y-hidden">
        {filteredCategory.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[177px]">
            <p className="text-gray-400 text-lg font-medium">Coming Soon</p>
          </div>
        ) : (
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView="auto"
            spaceBetween={14}
            className="!ml-0"
          >
            {filteredCategory.map((course, index) => (
              <SwiperSlide key={course.id} style={{ width: "280px" }}>
                <TestCard
                  category={course.category}
                  testId={String(course.id)}
                  title={course.title}
                  durations={course.durations}
                  backgroundColor={
                    ListOfBGColour[index % ListOfBGColour.length]
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="flex items-center cursor-pointer shrink-0"
      >
        <Image
          src="/images/Course/Pagination-Next.svg"
          alt="nextBtn"
          width={48}
          height={48}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </button>
    </div>
  );
}

export default TestList;
