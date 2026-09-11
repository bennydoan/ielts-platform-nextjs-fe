import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { courseDatas } from "@/data/Course";
import { type Submission } from "@/libs/submission";

type Props = {
  filterTest: string;
  submissions: Submission[];
};

//get real submissions for the line chart, oldest to newest, by test category

function getChartData(submissions: Submission[], category: string) {
  return submissions
    .filter((result) => {
      const course = courseDatas.find((c) => String(c.id) === result.testId);
      return course?.category === category; // check if the category matched
    })
    .slice()
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // get the latest first
    .map((result) => ({
      date: new Date(result.date).toLocaleDateString(),
      Score: result.rawScore,
    }));
}

function Chart({ filterTest, submissions }: Props) {
  const showAll = !filterTest;

  const readingData = useMemo(
    () => getChartData(submissions, "Reading"), // we need the reading data during the render not after so we dont use the useEffect
    [submissions],
  );
  const listeningData = useMemo(
    () => getChartData(submissions, "Listening"),
    [submissions],
  );

  return (
    <div className="flex flex-col gap-8">
      {(showAll || filterTest === "Reading") && readingData.length > 0 && (
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
                dataKey="Score"
                stroke="#F5222D"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {(showAll || filterTest === "Listening") && listeningData.length > 0 && (
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
                dataKey="Score"
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
