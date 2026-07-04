// src/components/Course/TestCard.tsx
import Image from "next/image";
import Link from "next/link";

type Props = {
  testId: string;
  category: string;
  title: string;
  durations: number;
  backgroundColor: string;
};

function TestCard({
  testId,
  category,
  title,
  durations,
  backgroundColor,
}: Props) {
  return (
    <div
      className="w-full h-[177px] shrink-0 rounded-lg p-5 flex flex-col justify-between relative overflow-hidden"
      style={{ backgroundColor }}
    >
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

      <div className="flex flex-col gap-7 relative z-10">
        <h3 className="font-bold text-black">
          {category} {title}
        </h3>
        <div className="flex gap-1">
          <Image
            src="/images/FeatureCard/watch.svg"
            alt="watch"
            width={20}
            height={20}
          />
          <p className="text-black">{durations} mins taken</p>
        </div>
      </div>
      <Link
        href={`/ielts-tests/${category}/${testId}`}
        className="text-button-mobile text-black md:text-button-sm w-full py-2 rounded-md cursor-pointer bg-white/30 hover:bg-white/80 hover:brightness-125 hover:shadow-md transition-all duration-300 ease-in-out text-center"
      >
        Take the test now
      </Link>
    </div>
  );
}

export default TestCard;
