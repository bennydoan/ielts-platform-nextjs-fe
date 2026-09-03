import { useRouter } from "next/router";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import TimeSetUp from "./TimeSetUp";
import { useState } from "react";
import HistoryComponent from "./HistoryComponent";
import { courseDatas } from "@/data/Course";

type Props = {
  id?: string;
};

function TestHistoryComponent({ id }: Props) {
  // get the data
  const filteredData = courseDatas.filter((data) => {
    return data.id === Number(id);
  });

  const [showSetUp, setShowSetUp] = useState(false);

  const router = useRouter();

  return (
    <div className=" bg-white w-[90%] mx-auto flex flex-col gap-9 py-20">
      <div className="flex flex-col sm:w-full md:w-[500px] text-pretty gap-3  ">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-black font-semibold cursor-pointer transition lg:mb-15"
        >
          <IoIosArrowRoundBack /> Back
        </button>
        <p className="text-black font-bold text-xl md:text-3xl">
          {filteredData[0].category} {filteredData[0].title}
        </p>
        <p className="block text-gray-400 ">
          Bài kiểm tra mô phỏng theo chuẩn IELTS, gồm 4 phần, kéo dài{" "}
          {filteredData[0].durations} phút. Kết quả chấm điểm tự động ngay sau
          khi hoàn thành.
        </p>

        <div className="flex gap-1">
          <Image
            src="/images/FeatureCard/watch.svg"
            alt="watch"
            width={20}
            height={20}
          />
          <p className="text-black">
            {filteredData[0].durations} mins taken (recommned)
          </p>
        </div>
      </div>

      {/* second div for the history section */}
      <HistoryComponent />

      {/* third div for the reminder and start test button */}
      <div className="flex flex-col gap-5">
        <div className="w-full bg-[#D8F0E2] rounded-lg p-3 flex gap-2 items-center">
          <FaBell className="text-[#1F5E43] shrink-0" />
          <p className="text-[#1F5E43] font-semibold">
            Vui lòng kiểm tra kỹ thiết bị như chuột, bàn phím, tai nghe trước
            khi bắt đầu
          </p>
        </div>

        <div className="w-[150px]">
          <button
            onClick={() => setShowSetUp(true)}
            className="bg-[#F5222D] cursor-pointer border-[#F5222D] hover:text-[#F5222D] hover:bg-white border-2 text-white w-full text-center py-2 rounded-md font-medium flex items-center justify-center gap-2 transition"
          >
            Bắt đầu làm bài
          </button>
        </div>
      </div>
      {showSetUp && (
        <TimeSetUp
          defaultTime={filteredData[0].durations}
          category={filteredData[0].category}
          testId={filteredData[0].id}
          onClose={() => setShowSetUp(false)}
        />
      )}
    </div>
  );
}

export default TestHistoryComponent;
