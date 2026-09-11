import Image from "next/image";
import { getSubmissions } from "@/libs/submission";
import { useState, useEffect } from "react";
import { Submission } from "@/libs/submission";
type Props = { id?: string };

function HistoryComponent({ id }: Props) {
  const [subs, setSubs] = useState<Submission[]>([]);

  useEffect(() => {
    if (!id) return;
    getSubmissions(id).then(setSubs);
  }, [id]);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-black">Lịch sử bài làm :</p>
      </div>
      <div className="flex gap-3 overflow-x-scroll">
        {subs.map((s) => (
          <div
            key={s.id}
            className="border-1 rounded-xl h-[118px] w-[315px] p-2 flex flex-col justify-around shrink-0 mb-3"
          >
            <h1 className="text-black font-bold">
              {new Date(s.date).toLocaleDateString("en-GB")}
            </h1>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <Image
                  src="/images/FeatureCard/watch.svg"
                  alt="watch"
                  width={20}
                  height={20}
                />
                <p className="text-black">{s.timeTaken}</p>
              </div>
              <div className="flex gap-1">
                <p className="text-black">
                  Tổng điểm: <span className="text-[#F5222D]">{s.band}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryComponent;
//  {Array.from({ length: 10 }).map((_, i) => (
//           <div
//             key={i}
//             className="border-1 rounded-xl h-[118px] w-[315px] p-2 flex flex-col justify-around shrink-0 mb-3"
//           >
//             <h1 className="text-black font-bold">DD/MM/YYYY</h1>
//             <div className="flex gap-3">
//               <div className="flex gap-1">
//                 <Image
//                   src="/images/FeatureCard/watch.svg"
//                   alt="watch"
//                   width={20}
//                   height={20}
//                 />
//                 <p className="text-black">40 mins taken</p>
//               </div>
//               <div className="flex gap-1">
//                 <p className="text-black">
//                   Tổng điểm: <span className="text-[#F5222D]">4.0</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
