import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import TestCategoriesMenu from "./TestCategoriesMenu";
import dynamic from "next/dynamic";
const TestList = dynamic(() => import("./TestList"), { ssr: false });
import { useEffect, useState } from "react";
import { getTest, Test } from "@/libs/testBank";

function Course() {
  const [arrayOfTest, setArrayOfTest] = useState<Test[]>();

  useEffect(() => {
    getTest()
      .then(setArrayOfTest)
      .catch(() => setArrayOfTest([]));
  }, []);

  // useState for the selected Categories
  const [selectedCategory, setCategory] = useState<string | null>("Reading");

  const filteredTest = selectedCategory
    ? arrayOfTest?.filter((t) => t.category === selectedCategory)
    : arrayOfTest;

  return (
    <div className=" bg-white max-w-[1440px] mx-auto flex flex-col gap-6">
      {/* First Div  */}
      <div className=" w-[90%] lg:w-[81%] mx-auto flex items-center justify-between  ">
        <div className="flex flex-col w-[346px] text-pretty gap-3  ">
          <p className="text-black font-bold text-3xl md:text-4xl">Test bank</p>
          <p className="hidden lg:block text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <Link
          href="/exam-library"
          className="hidden lg:flex flex-row items-center gap-1 text-[#F5222D] hover:underline"
        >
          <span>Xem tất cả</span> <GoLinkExternal />
        </Link>
      </div>

      {/* second Div: Test Categories */}

      <TestCategoriesMenu selected={selectedCategory} onSelect={setCategory} />

      {/* list of tests */}

      <TestList tests={filteredTest} />
    </div>
  );
}

export default Course;
