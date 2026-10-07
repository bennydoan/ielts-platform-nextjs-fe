import Image from "next/image";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { getProfile, uploadAvatar } from "@/libs/profile";
import { toast } from "sonner";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

type Props = {
  active: string;
  setActive: (showInfo: "profile" | "analysis") => void;
};
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Navigation({ active, setActive }: Props) {
  const { logout, setAvatarUrl } = useAuth();
  //refer to the submitted fike
  const fileInputRef = useRef<HTMLInputElement>(null);

  //set avatar url
  const [imgUrl, setImgUrl] = useState<string | null>(
    "/images/ProfilePage/defaultAvatar.svg",
  );

  useEffect(() => {
    getProfile()
      .then((p) => {
        if (p.avatarUrl) setImgUrl(`${API_URL}${p.avatarUrl}`);
      })
      .catch(() => {});
  }, []);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // because files list looks like and array

    if (!file) return;
    // quick check on the frontend (backend checks again)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Ảnh phải nhỏ hơn 2MB");
      return;
    }
    const oldUrl = imgUrl;
    setImgUrl(URL.createObjectURL(file)); // show preview immediately

    try {
      const result = await uploadAvatar(file);
      setImgUrl(`${API_URL}${result.avatarUrl}`);
      setAvatarUrl(result.avatarUrl); //  tells the whole app, so the Header re-renders
      toast.success("Cập nhật ảnh đại diện thành công");
    } catch (err) {
      setImgUrl(oldUrl); // upload failed, go back to the old image
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      e.target.value = "";
    }
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
          <Image src={`${imgUrl}`} alt="avatar" height={150} width={150} />
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
        <Link
          href="/"
          onClick={logout}
          className="px-2 cursor-pointer flex items-center justify-center gap-2 text-white bg-[#F5222D] rounded-lg py-2 w-[100%]"
        >
          <IoLogOutOutline />
          <span>Đăng xuất</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
