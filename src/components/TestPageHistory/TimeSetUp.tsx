import ModeCard from "./ModeCard";
import { useState } from "react";

type TimeSetUpProps = {
  onClose: () => void;
  defaultTime: number;
  category: string;
  testId: number;
};

// set duration time

function TimeSetUp({ onClose, defaultTime, category, testId }: TimeSetUpProps) {
  const [duration, setDuration] = useState(defaultTime);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white border-3 h-auto py-5 px-10 w-full lg:w-[90%] xl:w-[60%] md:py-15 md:px-20 rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition text-xl font-bold cursor-pointer"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row lg:flex-row items-stretch lg:items-center justify-center gap-10">
          <ModeCard
            title="Practise Mode"
            description="Choose how long you want to take the test"
            href={`/ielts-tests/${category}/${testId}?mode=practice&duration=${duration}`}
          >
            <div className="mb-5 sm:h-[98px] flex flex-col justify-center">
              <label className="text-gray-400">
                Duration
                <span className="text-[#F5222D]">*</span>
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                step="1"
                min={duration}
                max={90}
                className="w-[80%] border border-gray-300 rounded-lg px-4 py-2 text-black outline-none focus:border-[#F5222D] transition"
              />
            </div>
          </ModeCard>
          <ModeCard
            title="Actual Mode"
            description="Choose how long you want to take the test"
            href={`/ielts-tests/${category}/${testId}?mode=practical&duration=${category.toLocaleLowerCase() === "reading" ? 60 : 30}`}
          >
            <div className="mb-5">
              <p className="text-gray-400">
                The best way to experience a real computer-based IELTS test is
                through Simulation Test Mode. The test consists of 4 sections
                and has a total duration of 30 minutes.
              </p>
            </div>
          </ModeCard>
        </div>
      </div>
    </div>
  );
}

export default TimeSetUp;
