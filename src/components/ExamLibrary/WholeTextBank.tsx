import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import TestCard from "../Course/TestCard";
import Pagination from "../Blogs/Pagination";
import { useState, useEffect } from "react";
import { getTest, Test } from "@/libs/testBank";
import { ListOfBGColour } from "@/constants/cardBGColor";

// typeof TestCategory
// ↓
// readonly ["Noti", "Tips", "Vocab"]

// (typeof TestCategory)[number]
// ↓
// "Noti" | "Tips" | "Vocab"

// (typeof TestCategory)[number][]
// ↓
// ("Noti" | "Tips" | "Vocab")[]

type Props = {
  header: string;
};

function WholeTestBank({ header }: Props) {
  const router = useRouter();

  const [allTests, setAllTests] = useState<Test[]>([]);

  useEffect(() => {
    getTest()
      .then(setAllTests)
      .catch(() => setAllTests([])); // if fails
  }, []);

  //filter category

  const filteredCat = allTests
    .filter((cat) => {
      return cat.category === header;
    })
    .sort((a, b) => a.id - b.id); // smallest id first

  const items_per_page = 12;
  const totalPages = Math.ceil(filteredCat.length / items_per_page);
  const [currentPage, setCurrenPage] = useState(1);

  // show tests per page

  const shownTest = filteredCat.slice(
    (currentPage - 1) * items_per_page,
    currentPage * items_per_page,
  );

  return (
    <div className=" bg-white w-[90%] mx-auto flex flex-col gap-9 py-20">
      {/* First Div  */}
      <div className=" w-[90%] lg:w-[81%] mx-auto flex items-center md:justify-between">
        <div className="flex flex-col w-[500px] text-pretty gap-3  ">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-black font-semibold cursor-pointer transition lg:mb-10"
          >
            <IoIosArrowRoundBack /> Back
          </button>
          <p className="text-black font-bold text-xl md:text-2xl">
            Ngân Hàng Đề Thi {header}
          </p>
          <p className="hidden lg:block text-gray-400 ">
            Hệ thống đề thi IELTS đa dạng, sát thực tế, chia theo từng kỹ năng –
            giúp bạn luyện tập có định hướng và tiến bộ rõ rệt.
          </p>
        </div>
        <Link
          className="border border-[#F5222D] text-[#F5222D] rounded-md py-2 px-4 hover:bg-[#F5222D] hover:text-white transition"
          href="/profile"
        >
          Xem phân tích kết quả
        </Link>
      </div>
      {/* second div for content */}
      <div className="w-[90%] lg:w-[81%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shownTest.map((cat, index) => {
            return (
              <TestCard
                key={index}
                testId={String(cat.id)}
                category={cat.category}
                title={cat.title}
                durations={cat.durationMinutes}
                backgroundColor={ListOfBGColour[index % ListOfBGColour.length]}
              />
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      {/* Page Pagination */}
      <div className="w-[90%] lg:w-[81%] mx-auto">
        <Pagination
          currentPage={currentPage}
          totalPage={totalPages}
          onPageChange={setCurrenPage}
        />
      </div>
    </div>
  );
}

export default WholeTestBank;
