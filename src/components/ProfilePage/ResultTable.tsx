import Pagination from "../Blogs/Pagination";
import { testResult } from "@/data/TestResult";
import { courseDatas } from "@/data/Course";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { calculatingBandScore } from "@/utils";

type Props = {
  filterTest: string;
};

function ResultTable({ filterTest }: Props) {
  const router = useRouter();
  const [currentPage, setCurrenPage] = useState(1);
  const items_per_page = 5;

  //this one will return an array
  const filteredResult = testResult.filter((test) => {
    if (!filterTest || filterTest === "Default") return true; // keep everything
    //we want to get the course
    const course = courseDatas.find((data) => data.id === test.courseId); // we only want one so we use find
    return course?.category === filterTest;
  });
  const totalPages = Math.ceil(filteredResult.length / items_per_page);

  const shownResult = filteredResult.slice(
    (currentPage - 1) * items_per_page,
    currentPage * items_per_page,
  );

  useEffect(() => {
    setCurrenPage(1);
  }, [filterTest]);

  return (
    <div className="flex flex-col gap-5">
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-5 px-5 border border-gray-300 text-black text-center">
              Bài Thi
            </th>
            <th className="py-5 px-5 border border-gray-300 text-black text-center">
              Điểm Đạt Được
            </th>
            <th className="py-5 px-5 border border-gray-300 text-black text-center">
              Điểm Band
            </th>
            <th className="py-5 px-5 border border-gray-300 text-black text-center">
              Thời Gian Làm Bài
            </th>
          </tr>
        </thead>
        <tbody>
          {shownResult.map((result) => {
            const course = courseDatas.find(
              (data) => data.id === result.courseId,
            );

            return (
              <tr
                key={result.resultId}
                onClick={() => router.push(`/results/${result.resultId}`)}
                className="cursor-pointer hover:bg-gray-50"
              >
                <td className="py-5 px-5 border border-gray-300 text-gray-600 text-center">
                  {course ? `${course.category} ${course.title}` : "Unknown"}
                </td>
                <td className="py-5 px-5 border border-gray-300 text-gray-600 text-center">
                  {result.score} / 40
                </td>
                <td className="py-5 px-5 border border-gray-300 text-gray-600 text-center">
                  {calculatingBandScore(result.score)}
                </td>
                <td className="py-5 px-5 border border-gray-300 text-gray-600 text-center">
                  {result.Duration}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrenPage}
      />
    </div>
  );
}

export default ResultTable;
