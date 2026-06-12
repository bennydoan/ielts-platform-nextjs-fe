import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // ← need this for styling

function HeroSection() {
  const avatar = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="w-full bg-[#fff1e1] h-auto py-[60px] lg:w-[95%] mx-auto lg:rounded-xl ">
      <div className="flex flex-col text-center gap-10 w-[90%] lg:w-full mx-auto">
        <h1 className="text-black font-bold text-4xl lg:text-5xl mx-auto lg:mb-12">
          Chào mừng đến Công ty Giáo dục Nhân Văn
        </h1>
        {/* hero avatars */}

        {/* small and medium screen */}
        <div className="block lg:hidden">
          <div className="mx-auto grid grid-cols-4 gap-2 max-w-[320px] md:max-w-[480px] justify-items-center">
            {avatar.map((a) => (
              <Image
                key={a}
                alt={`hero${a}`}
                src={`/images/AboutUs/HeroAvatars/Ellipse${a}.svg`}
                width={100}
                height={100}
                className="rounded-full w-[67px] h-[67px] md:w-[100px] md:h-[100px]"
              />
            ))}
          </div>
        </div>

        {/* large screen add swiper */}

        <div className="hidden lg:block">
          <Swiper
            slidesPerView={7}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={3000}
          >
            {avatar.map((a) => (
              <SwiperSlide key={a}>
                <div className="relative w-[135px] h-[135px] xl:w-[170px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[220px] ">
                  <Image
                    alt={`hero${a}`}
                    src={`/images/AboutUs/HeroAvatars/Ellipse${a}.svg`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
