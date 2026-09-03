import { useRouter } from "next/router";
import { IoBulbOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useRef } from "react";

type Props = {
  audioSrc: string | undefined;
};

function TestFunctioning({ audioSrc }: Props) {
  const router = useRouter();
  const allowedTimeRef = useRef(0);

  const { mode, category } = router.query;

  return (
    <div className="flex lg:w-[40%]">
      {/* This is for Listening */}
      {category?.toString().toLowerCase() === "listening" && (
        <audio
          controls
          autoPlay
          controlsList="nodownload noplaybackrate"
          src={audioSrc}
          onTimeUpdate={(e) => {
            if (mode === "practical")
              allowedTimeRef.current = e.currentTarget.currentTime;
          }}
          onSeeking={(e) => {
            const audio = e.currentTarget;
            if (
              mode === "practical" &&
              Math.abs(audio.currentTime - allowedTimeRef.current) > 0.5
            ) {
              audio.currentTime = allowedTimeRef.current; // snap back, block manual scrub
            }
          }}
          onPause={(e) => {
            const audio = e.currentTarget;
            if (mode === "practical" && !audio.ended) audio.play();
          }}
          className="w-full rounded-xl border h-[60px] bg-white p-2"
        />
      )}

      {/* this is for reading  */}

      {category?.toString().toLowerCase() === "reading" && (
        <div className="w-full rounded-xl border h-auto lg:h-[60px] bg-white p-3 flex flex-col sm:flex-row gap-3 lg:items-center">
          <div className="flex items-center justify-between gap-3 bg-[#FFE1E6] rounded-xl px-5 py-2">
            <span className="text-black font-medium">
              Hightlights Instructions
            </span>
            <IoBulbOutline className="text-black text-2xl" />
          </div>
          <div className="flex items-center justify-between gap-3 bg-[#DDFBE5] rounded-xl px-5 py-2">
            <span className="text-black font-medium">View Notes</span>
            <IoEyeOutline className="text-black text-2xl" />
          </div>
        </div>
      )}
    </div>
  );
}

export default TestFunctioning;
