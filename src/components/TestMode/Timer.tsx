import { FaRegClock } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";

type Props = {
  timeUpSubmission: () => void;
  isTestSubmitted: boolean; // for the submit button, if this one is clicked , stop the timer
};

function TimerClock({ timeUpSubmission, isTestSubmitted }: Props) {
  const router = useRouter();
  const { duration } = router.query;
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  const timeUpSubmissionRef = useRef(timeUpSubmission); // prevent being rerendered when Testmode rerenders after user choose answers
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasWarnedRef = useRef(false); // useRef to stop rerendering

  useEffect(() => {
    timeUpSubmissionRef.current = timeUpSubmission;
  }, [timeUpSubmission]); // runs when the time is up

  useEffect(() => {
    if (!duration) return;
    let remaining = Number(duration) * 60; // turn to seconds
    setSecondsLeft(remaining);
    const timer = setInterval(() => {
      remaining -= 1;
      setSecondsLeft(remaining);
      if (remaining === 300 && !hasWarnedRef.current) {
        hasWarnedRef.current = true;
        toast.info("5 minutes left!", {
          style: { color: "#F5222D" },
        });
      }

      if (remaining === 900 && !hasWarnedRef.current) {
        hasWarnedRef.current = true;
        toast.info("15 minutes left!", {
          className: "text-[#F5222D]",
        });
      }

      if (remaining === 1800 && !hasWarnedRef.current) {
        hasWarnedRef.current = true;
        toast.info("30 minutes left!", {
          className: "text-[#F5222D]",
        });
      }

      if (remaining <= 0) {
        // when interval hits 0 (time up)
        clearInterval(timer);
        timeUpSubmissionRef.current(); // this one will trigger the first useEffect
      } // need to stop the interval
    }, 1000); //repeat after a second

    intervalRef.current = timer; // store timer in the ref to use in another ref

    return () => clearInterval(timer);
  }, [duration]);

  // when the test is submitted, the timer stops and sent the time taken
  useEffect(() => {
    if (!isTestSubmitted) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [isTestSubmitted]);

  const minutes = secondsLeft !== null ? Math.floor(secondsLeft / 60) : 0;
  const seconds = secondsLeft !== null ? secondsLeft % 60 : 0; // we want to get the seconds part, get modulo
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="flex lg:w-[25%]">
      <div className="border w-full bg-white h-[60px] rounded-lg flex items-center p-3 justify-between">
        <p className="text-black text-md font-semibold">Countdown</p>
        {/* countdown clock */}
        <div className="flex gap-2 items-center justify-center">
          <FaRegClock className="text-black text-3xl" />
          <p className="text-black font-bold text-3xl">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}

export default TimerClock;
