import Image from "next/image";
function TeamImageComponent() {
  return (
    <div className="w-full h-auto pb-20 bg-white relative">
      {/* Image */}
      <div className="w-full h-[27rem] lg:h-[40rem] relative z-0">
        <Image
          alt="imageBackground"
          src="/images/AboutUs/team.svg"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>
      {/* text */}
      <div className="bg-black/0 w-[auto] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black z-10 flex flex-col justify-center items-center gap-10">
        <div className="sm:w-[400px] md:w-[600px] lg:w-full px-4">
          <h1 className="text-white text-3xl lg:text-5xl font-bold text-center">
            Khóa học trực tuyến của chúng tôi
          </h1>
        </div>
        <div className="w-[380px] lg:w-[50%] text-center mx-auto">
          <p>
            Trải nghiệm môi trường học tập hiện đại, đầy đủ thiết bị và hỗ trợ
            trực tiếp từ đội ngũ giảng viên chuyên môn cao. Học tại trung tâm –
            tiếp cận phương pháp luyện thi IELTS hiệu quả và linh hoạt.
          </p>
        </div>
        <a
          href="#registration-form"
          className="bg-[#F5222D] text-white px-6 py-2 rounded-md hover:opacity-80 min-h-10"
        >
          Đăng kí ngay
        </a>
      </div>
    </div>
  );
}

export default TeamImageComponent;
