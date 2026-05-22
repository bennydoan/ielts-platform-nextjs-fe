import Image from "next/image";
interface props {
  header: string;
  imgSrc: string;
  alt: string;
  isDeveloping: boolean;
}

function CardComponent({ header, imgSrc, alt, isDeveloping }: props) {
  return (
    <div className="bg-white rounded-xl px-3 lg:px-6 pt-4 lg:pt-5.25 shadow-[0px_20px_50px_0px_#12112714] w-[440px] h-[200px] sm:w-[300px] md:w-[370px] lg:w-[210px] lg:h-[250px] xl:w-[280px] ">
      <div className="flex flex-col gap-3 mb-4 ">
        <Image src={imgSrc} alt={alt} className="" width={44} height={44} />
        <p className="text-black font-bold ">{header}</p>
      </div>
      <div className={` ${isDeveloping ? "hidden" : ""} flex gap-1`}>
        <Image
          src="/images/FeatureCard/watch.svg"
          alt="watch"
          className=""
          width={20}
          height={20}
        />

        <p className={`text-black`}>00:00 phút làm bài</p>
      </div>

      <button
        className={`${isDeveloping ? "hidden" : ""} mt-5 bg-white text-[#F5222D] p-2 rounded-md cursor-pointer border-2`}
      >
        Tham gia
      </button>

      <p className={`${isDeveloping ? "" : "hidden"} text-[#bfbfbf]`}>
        (Sớm ra mắt)
      </p>
    </div>
  );
}

export default CardComponent;
