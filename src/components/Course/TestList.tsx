import Image from "next/image";
import { Test } from "@/libs/testBank";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import TestCard from "./TestCard";
import { useAuth } from "@/context/AuthContext";
import { ListOfBGColour } from "@/constants/cardBGColor";

function TestList({ tests = [] }: { tests?: Test[] }) {
  const { isLoggedIn } = useAuth();
  //reference to the swiper to use in the btn onClick
  const swiperRef = useRef<SwiperType | null>(null);
  // this is the category filter
  // limit to 10
  const listOfTest = tests.slice(1, 11);

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
        {!isLoggedIn ? (
          <div className="flex items-center justify-center w-full h-[177px]">
            <p className="text-gray-400 text-lg font-medium">
              Please Log In To See Content
            </p>
          </div>
        ) : listOfTest.length === 0 ? (
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
            {listOfTest.map((test, index) => (
              <SwiperSlide key={test.id} style={{ width: "280px" }}>
                <TestCard
                  category={test.category}
                  testId={String(test.id)}
                  title={test.title}
                  durations={test.durationMinutes}
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
