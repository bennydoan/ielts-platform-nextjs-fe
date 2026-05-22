import CardComponent from "./CardComponent/CardComponent";
function Feature() {
  return (
    <div className="h-auto flex flex-col w-full mx-auto gap-8 lg:flex-row lg:gap-0">
      <div className=" lg:w-[36.8%] lg:ml-[7.36%] lg:px-0 flex flex-col justify-center px-[20px]">
        <p className="text-[#F5222D] text-base xl:text-2xl mb-2">
          Luyện thi IELTS miễn phí tại nhà
        </p>
        <p className="xl:text-5xl mb-6 text-3xl font-bold text-black leading-snug">
          Hiệu quả thực tế,
          <br className="lg:block hidden" /> kết quả thực chứng
        </p>
        <p className="mb-6 text-[#8c8c8c] xl:text-2xl text-wrap">
          Nền tảng luyện thi IELTS trực tuyến giúp bạn luyện tập theo định dạng
          thật, kiểm tra kết quả tức thì và học mọi lúc – mọi nơi.
        </p>
        <button className="bg-[#F5222D] px-4 w-[185px] h-[55px] rounded-lg text-white cursor-pointer">
          Bắt đầu luyện ngay
        </button>
      </div>

      {/* right part */}

      <div className="bg-[#F5222D] lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] flex flex-col items-center py-11 lg:py-44 lg:flex-1">
        <div className="xl:ml-auto xl:mr-[4%] 2xl:mr-[10%] 3xl:mr-[15%] flex flex-col items-center gap-6">
          <div className=" grid grid-cols-1 sm:grid-cols-2 px-5 gap-3 xl:gap-6 lg:pl-[120px]">
            <CardComponent
              header="Bài nghe"
              imgSrc="/images/FeatureCard/listening.svg"
              alt="ListeningImgLogo"
              isDeveloping={false}
            />

            <CardComponent
              header="Bài đọc"
              imgSrc="/images/FeatureCard/reading.svg"
              alt="readingImgLogo"
              isDeveloping={false}
            />

            <CardComponent
              header="Bài đọc"
              imgSrc="/images/FeatureCard/reading.svg"
              alt="readingImgLogo"
              isDeveloping={true}
            />

            <CardComponent
              header="Bài đọc"
              imgSrc="/images/FeatureCard/reading.svg"
              alt="readingImgLogo"
              isDeveloping={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
