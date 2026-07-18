import Link from "next/link";
import { useState } from "react";
import ResultTable from "./ResultTable";
import Chart from "./Chart";
function ResultAnalysis() {
  const [skillShown, setSkillShown] = useState<string>("");

  const [active, setActive] = useState<"all" | "specific">("all");

  const baseClass =
    "text-gray-400 text-body leading-[21px] px-4 py-2 rounded-md border-2 border-gray-400 cursor-pointer min-h-10";
  const activeClass =
    " bg-black text-white text-body leading-[21px] px-4 py-2 rounded-md border-2 border-black cursor-pointer min-h-10";

  return (
    <div className="md:p-20 p-2 lg:w-[70%] w-full flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold xl:text-3xl text-2xl">
          Phân Tích Kết Quả Làm Bài
        </h1>
        <Link
          href="/exam-library"
          className="bg-[#F5222D] text-white text-body leading-[21px] px-6 py-2 rounded-md border-2 border-[#F5222D] hover:bg-white hover:text-[#F5222D] cursor-pointer min-h-10"
        >
          Bắt đầu thi
        </Link>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => {
            setActive("all");
            setSkillShown("");
          }}
          className={active === "all" ? activeClass : baseClass}
        >
          Tổng quan
        </button>
        <select
          onClick={() => setActive("specific")}
          value={skillShown}
          className={active === "specific" ? activeClass : baseClass}
          onChange={(e) => {
            setSkillShown(e.target.value);
          }}
        >
          <option value="">Theo kỹ năng</option>
          <option value="Reading">Reading</option>
          <option value="Listening">Listening</option>
          <option value="Writting">Writting</option>
        </select>
      </div>

      <ResultTable filterTest={skillShown} />

      <Chart filterTest={skillShown} />
    </div>
  );
}

export default ResultAnalysis;
