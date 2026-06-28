import Image from "next/image";
function GreetingComponent() {
  return (
    <div className="bg-[#FFEFF0] w-full md:h-[280px] lg:h-[350px] rounded-lg flex items-center py-5 md:py-15 gap-15 md:gap-[170px] xl:gap-[500px] ">
      <div className="flex flex-col gap-2 ml-1 pl-8 w-[70%] sm:w-[50%] xl:w-[40%] md:ml-16">
        <h1 className="text-black font-bold text-2xl lg:text-5xl">
          Chào bạn, Dinh Tuan Doan
        </h1>
        <p className="text-gray-500 text-base  lg:text-xl xl:text-2xl sm:w-[83%] md:w-[85%] lg:w-[88%]">
          Cùng bắt đầu hành trình luyện thi IELTS hiệu quả với kho đề thi mô
          phỏng chuẩn thật. Chọn bài thi và bắt đầu luyện tập ngay!
        </p>
      </div>

      <div className="overflow-hidden xl:h-[450px] xl:w-[450px] h-[200px] w-[200px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px]  relative ">
        <Image
          src="/images/ExamLibrary/certificationImage.svg"
          fill
          alt="ladyHoldingACert"
          className="object-contain "
        />
      </div>
    </div>
  );
}

export default GreetingComponent;
