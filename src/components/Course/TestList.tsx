"use client";
import Image from "next/image";
import { courseDatas, ListOfBGColour } from "@/data/Course";
import { useRef } from "react";

function TestList({ categoryShown }: { categoryShown: string | null }) {
  // this is the category filter
  const filteredCategory = categoryShown
    ? courseDatas.filter((course) => course.category === categoryShown)
    : courseDatas;
  const scrollRef = useRef<HTMLDivElement>(null); //refer to the div

  // funtion handle scroll

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex flex-row mb-8">
      {/* button */}
      <button className="flex items-center cursor-pointer" onClick={scrollLeft}>
        <Image
          src="/images/Course/Pagination-Prev.svg"
          alt="prevBtn"
          width={48}
          height={48}
        />
      </button>

      <div
        ref={scrollRef}
        className="w-[90%] lg:w-[81%] mx-auto flex items-center flex-row gap-4 overflow-x-hidden overflow-y-hidden"
      >
        {filteredCategory.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[177px]">
            <p className="text-gray-400 text-lg font-medium">Coming Soon</p>
          </div>
        ) : (
          filteredCategory.map((course, index) => (
            <div
              key={course.id}
              className="w-[280px] h-[177px] shrink-0 rounded-lg p-5 flex flex-col justify-between relative overflow-hidden"
              style={{
                backgroundColor: ListOfBGColour[index % ListOfBGColour.length],
              }}
            >
              {/* Background illustrations */}
              <div className="absolute top-0 left-0 pointer-events-none">
                <Image
                  src="/images/Course/Illustration1.svg"
                  alt=""
                  width={264}
                  height={177}
                />
              </div>
              <div className="absolute bottom-0 right-0 pointer-events-none">
                <Image
                  src="/images/Course/Illustration2.svg"
                  alt=""
                  width={264}
                  height={177}
                />
              </div>

              {/* content */}
              <div className="flex flex-col gap-7 relative z-10">
                <h3 className="font-bold text-black">
                  {course.category} {course.title}
                </h3>
                <div className="flex gap-1">
                  <Image
                    src="/images/FeatureCard/watch.svg"
                    alt="watch"
                    width={20}
                    height={20}
                  />
                  <p className="text-black">{course.durations} mins taken</p>
                </div>
              </div>
              <button className="text-button-mobile text-black md:text-button-sm w-full py-2 rounded-md cursor-pointer bg-white/30 hover:bg-white/80 hover:brightness-125 hover:shadow-md transition-all duration-300 ease-in-out">
                Take the test now
              </button>
            </div>
          ))
        )}
      </div>

      <button
        className="flex items-center cursor-pointer"
        onClick={scrollRight}
      >
        <Image
          src="/images/Course/Pagination-Next.svg"
          alt="nextBtn"
          width={48}
          height={48}
        />
      </button>
    </div>
  );
}

export default TestList;
