import Image from "next/image";
import CardBenefitsList from "../CardBenefits/CardBenefitsList";
import { cardBenefits } from "../../data";

function ContentContainer() {
  return (
    <div className="p-10 w-full flex flex-col gap-16 lg:w-[95%] xl:w-[60%]">
      {/* first div */}
      <div className="block lg:flex lg:justify-center lg:items-center lg:gap-16 ">
        <div className="flex flex-col gap-6 lg:w-[50%]  ">
          <h1 className="font-bold text-black text-3xl">Giới thiệu</h1>
          <div className="flex flex-col gap-2">
            <p className="text-black">
              Chào mừng bạn đến với Nhan Van Education, nơi cung cấp các giải
              pháp hiện đại cho nhu cầu kiểm tra năng lực tiếng Anh của bạn.
            </p>
            <p className="text-black">
              Với cơ sở vật chất tiên tiến, chúng tôi thiết kế không gian kiểm
              tra đạt chuẩn, tiện nghi và hiệu quả – từ phòng cách âm cho đến hệ
              thống công nghệ hỗ trợ đánh giá thông minh.
            </p>
            <p className="text-black">
              Chúng tôi cam kết mang lại trải nghiệm thi cử mượt mà và chuyên
              nghiệp cho mọi học viên. Trung tâm không chỉ chú trọng tính chính
              xác và công năng, mà còn tạo nên không khí thân thiện với phong
              cách trang trí hiện đại và màu sắc tươi sáng.
            </p>
            <p className="text-black font-bold">
              Hãy cùng chúng tôi bắt đầu hành trình chinh phục tiếng Anh một
              cách tự tin và hiệu quả!
            </p>
          </div>
        </div>
        {/* this is for the image */}
        <div className="w-full lg:w-[50%] h-[316px] relative mt-4 overflow-hidden rounded-lg ">
          <Image
            src="/Images/AboutUs/team.svg"
            alt="teamImage"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* first div */}

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <h1 className="font-bold text-black text-3xl">
            Vì sao chọn chúng tôi?
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-black">
              Chúng tôi mang đến giải pháp kiểm tra ngôn ngữ sáng tạo trong một
              không gian học tập thoải mái và đầy đủ thiết bị.
            </p>
            <p className="text-black">
              Trung tâm của chúng tôi nổi bật với phòng thi cách âm, hệ thống
              công nghệ hiện đại và không gian truyền cảm hứng – tạo nên một
              trải nghiệm học và thi vừa nghiêm túc vừa tích cực.
            </p>
          </div>
        </div>

        {/* for CTA */}
        <CardBenefitsList
          benefits={cardBenefits}
          backgroundColor="bg-[#f0f0f0]"
        />
      </div>
    </div>
  );
}

export default ContentContainer;
