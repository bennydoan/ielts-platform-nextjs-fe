import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { testResult } from "@/data/TestResult";
import { courseDatas } from "@/data/Course";

type Props = {
  filterTest: string;
};
//get data from test result for the line chart

function getChartData(category: string) {
  return testResult
    .filter((result) => {
      const course = courseDatas.find((c) => c.id === result.courseId);
      return course?.category === category; // check if the category matched
    })
    .map((result) => ({
      date: result.testDate,
      scorePercentage: Math.round((result.score / 40) * 100 * 100) / 100,
    }));
}

const readingData = getChartData("Reading");
const listeningData = getChartData("Listening");

function Chart({ filterTest }: Props) {
  const showAll = !filterTest;

  return (
    <div className="flex flex-col gap-8">
      {(showAll || filterTest === "Reading") && (
        <div>
          <h2 className="text-black font-bold mb-2">Reading</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={readingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="scorePercentage"
                stroke="#F5222D"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {(showAll || filterTest === "Listening") && (
        <div>
          <h2 className="text-black font-bold mb-2">Listening</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={listeningData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="scorePercentage"
                stroke="#1F5E43"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Chart;
