import Link from "next/link";
import dynamic from "next/dynamic";
import { TestCategory, courseDatas } from "@/data/Course";
import { IoIosArrowRoundForward } from "react-icons/io";

//only run on client side
const TestList = dynamic(() => import("../Course/TestList"), { ssr: false });

// get the array of all the test of each category

function TestBank() {
  return (
    <div className=" bg-white w-[90%] mx-auto flex flex-col gap-9 py-20">
      {/* First Div  */}
      <div className=" w-[90%] lg:w-[81%] mx-auto flex items-center md:justify-between">
        <div className="flex flex-col w-[500px] text-pretty gap-3  ">
          <p className="text-black font-bold text-3xl md:text-4xl">
            Ngân Hàng Đề Thi
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

      <div className="w-[90%] lg:w-[81%] mx-auto flex flex-col gap-4">
        {/* list of tests */}
        {Object.values(TestCategory).map((cat) => {
          const arrayOfTest = courseDatas.filter((CD) => CD.category === cat);

          return (
            <div key={cat} className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h1 className="text-black font-bold text-2xl">
                  ĐỀ THI {cat.toUpperCase()}
                </h1>
                {/* set condition for view more button */}
                {arrayOfTest.length > 10 && (
                  <Link
                    className="text-[#F5222D] flex items-center gap-2  hover:underline"
                    href={`/exam-library/${cat.toLowerCase()}`}
                  >
                    Xem thêm <IoIosArrowRoundForward />
                  </Link>
                )}
              </div>

              <TestList categoryShown={cat} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TestBank;
