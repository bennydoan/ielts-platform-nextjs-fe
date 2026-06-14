import Image from "next/image";
function FeatureContainer() {
  const imgIndex = [1, 2, 3];
  return (
    <div className="flex flex-col gap-10 2xl:mx-auto">
      <div className="flex flex-col gap-6 lg:w-[40%]">
        <h1 className="font-bold text-black text-3xl">Môi trường học xanh</h1>
        <div className="flex flex-col gap-2">
          <p className="text-black">
            Các lớp học được tổ chức trực tiếp tại trung tâm với không gian hiện
            đại, hỗ trợ chuyên sâu và môi trường học tập tích cực.
          </p>
        </div>
      </div>
      {/* Desktop */}
      <div className="max-w-[1500px] hidden sm:grid grid-cols-3 gap-[15px] justify-items-center">
        {imgIndex.map((index) => (
          <div
            key={index}
            className="w-full h-[283px] 2xl:w-[450px] relative overflow-hidden border border-gray-200 rounded-xl"
          >
            <Image
              loading="lazy"
              alt={`image${index} `}
              src={`/images/Offline-course/image${index}.svg`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* smaller than small responsive size  */}

      <div className="sm:hidden flex gap-4 overflow-x-auto">
        {imgIndex.map((index) => (
          <div
            key={index}
            className="w-[250px] flex-shrink-0 h-[283px] relative overflow-hidden border border-gray-200 rounded-xl"
          >
            <Image
              loading="lazy"
              alt={`image${index} `}
              src={`/images/Offline-course/image${index}.svg`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureContainer;
