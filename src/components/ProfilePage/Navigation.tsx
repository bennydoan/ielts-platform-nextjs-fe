import Image from "next/image";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useState, useRef } from "react";

type Props = {
  active: string;
  setActive: (showInfo: "profile" | "analysis") => void;
};

function Navigation({ active, setActive }: Props) {
  //refer to the submitted fike
  const fileInputRef = useRef<HTMLInputElement>(null);

  //set avatar url
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // because files list looks like and array

    if (file) setImgUrl(URL.createObjectURL(file)); // we want to get the img url instead of the Image itself
  };

  const baseClass =
    "px-2 cursor-pointer flex items-center gap-2 text-black py-3 md:w-[250px]";

  const activeClass = "border-r-2 border-[#F5222D] bg-[#f5f5f5]";

  return (
    <div className="flex flex-col p-20 items-center lg:gap-5">
      <div className="flex flex-col gap-5 justify-center lg:w-[70%] items-center">
        {imgUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgUrl}
            alt="avatar"
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
        ) : (
          <Image
            src="/images/ProfilePage/defaultAvatar.svg"
            alt="avatar"
            height={150}
            width={150}
          />
        )}
        <button
          onClick={() => fileInputRef.current?.click()} // current refers to the whole input blog
          className=" cursor-pointer text-red-600 font-semibold w-[200px]"
        >
          THAY ẢNH ĐẠI DIỆN
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {/* second div, button */}
      <div className="flex flex-col gap-5">
        <nav className="flex lg:flex-col w-[100%]">
          <button
            onClick={() => setActive("profile")}
            className={`${baseClass} ${active === "profile" ? activeClass : ""}`}
          >
            <RiAccountCircleLine />
            <span className="font-bold">Chi tiết hồ sơ</span>
          </button>

          <button
            onClick={() => setActive("analysis")}
            className={`${baseClass} ${active === "analysis" ? activeClass : ""}`}
          >
            <IoAnalyticsOutline />
            Phân tích kết quả thi
          </button>
        </nav>
        <button className="px-2 cursor-pointer flex items-center justify-center gap-2 text-white bg-[#F5222D] rounded-lg  py-2 w-[100%]">
          <IoLogOutOutline />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
